
import { PaymentStatus } from "../../../../packages/db/generated/prisma/enums";
import  prisma  from "../../../../packages/db/lib/prisma";

export async function createPaymentRecord(data:any) {
    return await prisma.payment.create({
        data,
    })
}

export async function makePaymentSuccess(providerOrderId:string , paymentId:string) {
    return await prisma.payment.update({
        where:{providerOrderId},
        data:{
            status:PaymentStatus.SUCCESS, 
            providerPaymentId:paymentId}
    })
}