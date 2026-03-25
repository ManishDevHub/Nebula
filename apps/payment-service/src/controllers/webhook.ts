
import { publishEvent } from "../events/publisher";
import { makePaymentSuccess } from "../services/payment.service";
import { verifySignature } from "../utils/verify-signature"

export async function razorpayWebhook(c:any) {
    const rawbody = await c.req.text();
    const signature = c.req.headers.get("X-Razorpay-Signature") || "";
    if(!verifySignature(rawbody, signature)) {
        return c.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawbody);

    if(event.event === "payment.captured") {
        const paymentId = event.payload.payment.entity.id;
        const orderId = event.payload.payment.entity.order_id;

        await makePaymentSuccess(paymentId, orderId);

        await publishEvent("payment.success", {
        paymentId,
        orderId,
        });
       
    }

return c.json({ status: "ok" });
}
