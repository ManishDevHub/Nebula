 import prisma from '../../../../packages/db/lib/prisma';

 export const createNotification = async (
    id: string,
    userId: string,
    message: string,
    
 )  => {

    return await prisma.notification.create({
        data:{ 
            id,
            userId,
            message,
            status: "PENDING",
            
        }
    })
 }

 export const updateNotificationstatus = async (
    id: string,
    status: "SENT" | "FAILED",

 ) => {

  return await  prisma.notification.update({
    where: { id},
    data: { status }
  })
 }