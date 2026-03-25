
import  prisma  from "../../../../packages/db/lib/prisma";

export const createLog = async (data: {
  service: string;
  level: string;
  message: string;
}) => {
  return prisma.log.create({
    data: {
      service: data.service,
      level: data.level,
      message: data.message,
    },
  });
};