import prisma from "../../../../packages/db/lib/prisma.ts";

export const createMetric = async (data: {
  service: string;
  name: string;
  value: number;
}) => {
  return prisma.metric.create({
    data: {
      service: data.service,
      name: data.name,
      value: data.value,
    },
  });
};