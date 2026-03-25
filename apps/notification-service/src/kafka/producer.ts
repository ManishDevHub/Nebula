
import { json } from "node:stream/consumers";
import { kafka } from "../kafka/kafkaClient";
//@ts-ignore
import { NotificationEvent  } from "../types/notification";

const producer = kafka.producer();

export const producerConnect = async () => {

    await producer.connect();

    console.log(" kafka producer connected");

}

export const sendNotificationEvent = async (data: NotificationEvent) => {

    await producer.send({
        topic: "Notification.main",
        messages: [
            {
                key: data.userId,
                value:JSON.stringify(data),
            }
        ]
    })
}