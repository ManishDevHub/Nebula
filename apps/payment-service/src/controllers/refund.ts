import { create } from "node:domain";
import { PaymentStatus } from "../../../../packages/db/generated/prisma/enums";
import prisma from "../../../../packages/db/lib/prisma";
import { createRefund } from "../services/refund.service";
import { publishEvent } from "../events/publisher";


export async function refundPaymet(c:any) {

    const paymentId = c.req.param("id");
    const body = c.req.json();

    const { amount } = body;

    const payment = await prisma.payment.findUnique({
        where:{ id: paymentId},
        include:{ refund:true}
    })

    if(!payment){
        return c.json({ error: "Payment not found" }, { status: 404 });
    }

    if(payment.status !== PaymentStatus.SUCCESS){
        return c.json({ error : "Only successful payment can be refunded" }, { status: 400 });
    }


    // Check already refunded amount
    const totalRefunded = payment.refund.reduce(
         (sum, r) => sum + Number(r.amount),
         0
    )

    if(totalRefunded + amount > Number(payment.amount)){
        return c.json({ error: "Refund amount exceeds payment amount" }, { status: 400 });
    }

const razorpayRefund = await createRefund(
    payment.providerPaymentId!,
    amount,
)


// Save refund record

const refund = await prisma.refund.create({
    data:{
        paymentId: payment.id,
        amount: BigInt(amount),
        status: PaymentStatus.PENDING,
        providerRefundId: razorpayRefund.id,
    }
})


await publishEvent("payment.refund.requested", {
    paymentId: payment.id,
    refundId: refund.id,
    amount: amount,
}
)
return c.json(refund);
}