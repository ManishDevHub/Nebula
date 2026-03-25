
import { kafka } from "../kafka/kafkaClient";
import { processNotification } from "../services/notification.service";
//@ts-ignore
import { NotificationEvent  } from "../types/notification";
import { isDuplicate } from "../utils/idempotency";
import { retry } from "../utils/retry";

const consumer = kafka.consumer({
    groupId: "notification-group",
})

export const startConsumer = async() => {
    await consumer.connect(); 
    await consumer.subscribe({ topic: "Notification.main"}),

    console.log("kafka consumer started");

     await consumer.run({
    eachMessage: async ({ message }) => {
      const data: NotificationEvent = JSON.parse(
        message.value?.toString() || "{}"
      );

      console.log("Received Event:", data);

        //  Idempotency check

      if (isDuplicate(data.id)) {
        console.log(" Duplicate event skipped");
        return;
      }

      // Process notification
           try {
       
        await retry(() => processNotification(data), 3);

      } catch (error) {
        console.error(" Failed after retries:", error);

    

        console.log("☠️ Sent to DLQ");
      }

    
    },
  });
}