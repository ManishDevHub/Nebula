
import crypto from "crypto";
import { env } from "../config/env";

export function verifySignature(body: string , signature: string): boolean {
    const expected = crypto
    .createHmac("sha256" , env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest("hex");
    return expected === signature;
}