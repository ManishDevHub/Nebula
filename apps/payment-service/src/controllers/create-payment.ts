
import { createOrder } from "../services/razorpay.service";
import { createPaymentRecord } from "../services/payment.service";
import { checkIdempotency } from "../services/idempotency.service";
import { storeIdempotency } from "../services/idempotency.service";

import { v4 as uuid } from "uuid";
import { PaymentStatus } from "../../../../packages/db/generated/prisma/enums";

export async function createPayment(c:any) {

    const body = await c.req.json();
    const { amount , orderId } = body;

    const idempotencyKey = c.req.headers.get("Idempotency-Key") || uuid();

    if(!idempotencyKey) {
        return c.json({ error: "Idempotency-Key is required" }, { status: 400 });
    }

    const cached = await checkIdempotency(idempotencyKey);

    if(cached){
        return c.json(JSON.parse(cached));
    }

    const razorpayOrder = await createOrder(amount);
    const payment = await createPaymentRecord({
        id: uuid(),
        userId:c.get("userId"),
        amount: BigInt(amount),
        orderId,
        status: PaymentStatus.CREATED,
        providerOrderId: razorpayOrder.id,
        idempotencyKey,
    });

    await storeIdempotency(idempotencyKey , JSON.stringify(razorpayOrder))

    return c.json(razorpayOrder);
}