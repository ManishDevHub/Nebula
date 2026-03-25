
import { Server } from "socket.io";
import http from "http";
import { registerUserSocket, removeUserSocket } from "./socketManager";

let io: Server;

export const initSocket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);
     socket.on("register", (userId: string) => {
    registerUserSocket(userId, socket.id);
  });


    socket.on("disconnect", () => {
         removeUserSocket(socket.id);
      console.log("Client disconnected:", socket.id);
    });
  });
};

export const getIO = () => {
  if (!io) throw new Error("Socket not initialized");
  return io;
};