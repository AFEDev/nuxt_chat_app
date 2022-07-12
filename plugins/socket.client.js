import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

socket.on("newMessage", (data) => {
  console.log("CLIENT socketas prisijunge?", data); // true
});

export default ({}, inject) => {
  inject("socket", socket);
};
