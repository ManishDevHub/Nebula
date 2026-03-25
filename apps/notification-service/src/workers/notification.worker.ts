import {  serve } from "bun";
import { Hono } from "hono";
import { startConsumer } from "../kafka/consumer";
import { producerConnect } from "../kafka/producer";

const app = new Hono();

const startServer = async () => {
  await producerConnect();
  await startConsumer();

  serve({
    fetch: app.fetch,
    port: 3000,
  })

  console.log("Notification Service is running on port 3000");
}

startServer();