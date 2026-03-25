
const userSocketMap = new Map<string, string>();

export const registerUserSocket = (userId: string, socketId: string) => {
  userSocketMap.set(userId, socketId);
};

export const removeUserSocket = (socketId: string) => {
  for (const [userId, id] of userSocketMap.entries()) {
    if (id === socketId) {
      userSocketMap.delete(userId);
      break;
    }
  }
};

export const getUserSocket = (userId: string) => {
  return userSocketMap.get(userId);
};