const socketMap = new Map<string, string>();

export const registerSocket = (id: string, socketId: string) => {
  socketMap.set(id, socketId);
};

export const removeSocket = (socketId: string) => {
  for (const [id, sId] of socketMap.entries()) {
    if (sId === socketId) {
      socketMap.delete(id);
      break;
    }
  }
};

export const getSocket = (id: string) => {
  return socketMap.get(id);
};