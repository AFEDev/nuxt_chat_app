import http from "http";
import socketIO from "socket.io";

export default function () {
  this.nuxt.hook("render:before", () => {
    const server = http.createServer(this.nuxt.renderer.app);
    const io = socketIO(server);

    this.nuxt.server.listen = (port, host) =>
      new Promise((resolve) =>
        server.listen(port || 3000, host || "localhost", resolve)
      );
    this.nuxt.hook("close", () => new Promise(server.close));

    io.on("connection", (socket) => {
      socket.on("createMessage", (data) => {
        setTimeout(() => {
          socket.emit("newMessage", {
            text: data.text + " SERVER",
          });
        }, 500);
      });
      socket.on("hello", (arg, callback) => {
        console.log(arg); // "world"
        callback("got it");
      });
    });
  });
}
