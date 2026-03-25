import { razorpay } from "../config/razorpay";

export async function createRefund(paymentId:string, amount:number) {
    return razorpay.payments.refund(paymentId, {
        amount: amount * 100,
    })
    
}