
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.middleware";
import { createPayment } from "../controllers/create-payment";
import { razorpayWebhook } from "../controllers/webhook";


  const router = new Hono();

router.post("/" , authMiddleware , createPayment);
router.post("/webhook" ,  razorpayWebhook )

export default router;