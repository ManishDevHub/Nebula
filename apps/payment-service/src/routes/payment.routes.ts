
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createPayment } from "../controllers/create-payment";
import { razorpayWebhook } from "../controllers/webhook";
import { refundPaymet } from "../controllers/refund";


  const router = new Hono();

router.post("/" , authMiddleware , createPayment);
router.post("/webhook" ,  razorpayWebhook )
router.post("/:id/refund", authMiddleware, refundPaymet);

export default router;