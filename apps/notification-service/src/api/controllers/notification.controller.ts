import { v4 as uuidv4 } from 'uuid';
import { sendNotificationEvent } from '../../kafka/producer';
import { createNotification } from '../../db/notification.model';

//@ts-ignore
import { NotificationEvent } from '../../types/notification';
import { use } from 'hono/jsx';

export const sendNotification = async (c:any) => {

    const body = await c.req.json();
    const id = uuidv4();

    const event:NotificationEvent ={
        id: id,
        userId:body.userId,
        message: body.message,
        channels: ["EMAIL", "SMS", "PUSH", "IN_APP"],
        timestamp: Date.now(),
    }

    await createNotification( id , body.userId, body.message);

    await sendNotificationEvent({
        ...event,
        id,
})


return c.json({
    success: true,
    id,
    message: "Notification sent successfully",
})
}

