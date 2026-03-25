import prisma from "../../../../packages/db/lib/prisma.ts";
import { getIO } from "../websocket/socket";

export const createMetric = async (data: {
  service: string;
  name: string;
  value: number;
}) => {
  const metric = await prisma.metric.create({
    data: {
      service: data.service,
      name: data.name,
      value: data.value,
    },
  });

  
  try {
    const io = getIO();

    io.emit("metric_update", {
      service: data.service,
      name: data.name,
      value: data.value,
      timestamp: Date.now(),
    });

  } catch (err) {
    console.log(" Socket not initialized yet");
  }

  return metric;
};