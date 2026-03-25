import { updateNotificationstatus } from "../db/notification.model";
import { getIO } from "../websocket/socket";
import { getUserSocket } from "../websocket/socketManager";
import { sendEmail } from "./email.service";
import { sendPush } from "./push.service";
import { sendSMS } from "./sms.service";



export const processNotification = async (data: any) => {
  try {
    console.log(" Processing Notification:", data);

     const { userId, message, channels } = data;

    //  Dummy data (later replace with real user info)
    const email = "test@example.com";
    const phone = "+91XXXXXXXXXX";
    const pushToken = "DEVICE_TOKEN";

    if (channels.includes("EMAIL")) {
      await sendEmail(email, message);
    }

    if (channels.includes("SMS")) {
      await sendSMS(phone, message);
    }

    if (channels.includes("PUSH")) {
      await sendPush(pushToken, message);
    }

      //  REAL-TIME (WebSocket)

    if (channels.includes("IN_APP")) {
      const socketId = getUserSocket(userId);

      if (socketId) {
        const io = getIO();

        io.to(socketId).emit("notification", {
          message,
          timestamp: Date.now(),
        });

        console.log(" Real-time notification sent");
      }
    }


   
    await updateNotificationstatus(data.id, "SENT");

  } catch (error) {
    console.error(" Error processing:", error);

    await updateNotificationstatus(data.id, "FAILED");
  }
};