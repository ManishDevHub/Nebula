
import amqp from "amqplib";

import { env } from "../config/env";
import { PAYMENT_EXCHANGE } from "./exchanges";

import { get } from "node:http";

let channel: any;

async function getChannel() {
    if (channel) return channel;


    const connection = await amqp.connect(env.RABBIT_URL);
    channel = await connection.createChannel();
    await  channel.assertExchange(PAYMENT_EXCHANGE, "topic", { durable: true });

    return channel;
}

export async function publishEvent(routingKey: string, data: any) {
    const ch = await getChannel();

    ch.publish(PAYMENT_EXCHANGE, routingKey, Buffer.from(JSON.stringify(data)), {
        persistent: true,
    });
}