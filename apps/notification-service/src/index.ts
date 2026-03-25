
import {Hono} from "hono";
import { sendNotificationEvent} from "./kafka/producer";

//@ts-ignore
import { NotificationEvent } from "./types/notification";


const app = new Hono();

app.post("/notify", async (c) =>{
  const body = await c.req.json()

  const event: NotificationEvent={
    id: crypto.randomUUID(),
    userId: body.userId,
    message: body.message,
    channels: ["EMAIL", "SMS", "PUSH", "IN_APP"],
    timestamp: Date.now(),
  }


  await sendNotificationEvent(event);

  return c.json({
    success: true,
    message: "Notification queued successfully",
  })
})

