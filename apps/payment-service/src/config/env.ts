
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

export const env = {
    PORT : process.env.PORT || 4002,
    RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID! || "rzp_test_1234567890",
    RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET! || "razorpay_key_secret_1234567890",
    RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET! || "webhook_secret_1234567890",
    RABBIT_URL: process.env.RABBITMQ_URL! || "amqp://localhost:5672",
    RADIS_URL: process.env.REDIS_URL! || "redis://localhost:6379",

}