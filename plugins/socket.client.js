import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on("connect", () => {
  console.log("ID ", socket.id); // "G5p5..."
  socket.on("newMessage", (data) => {
    console.log(data);
  });
});

export default ({}, inject) => {
  inject("socket", socket);
};
