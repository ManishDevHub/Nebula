
import { razorpay } from "../config/razorpay";

import { v4 as uuid} from "uuid";

export async function createOrder(amount: number) {
    return razorpay.orders.create({
        amount: amount * 100,
        currency: "INR",
        receipt: uuid(),
    })
}