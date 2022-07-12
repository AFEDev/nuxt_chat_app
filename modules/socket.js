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

    const m = (name, text, id) => ({ name, text, id });

    io.on("connection", (socket) => {
      socket.on("joinRoom", (data, cb) => {
        console.log("SERVERIS VEIKIA");
        if (!data.name || !data.room) {
          cb("Данные некорректны");
        }
        socket.join(data.room);
        cb({ userId: socket.id });
        socket.emit("newMessage", m("admin", `Welcome, ${data.name}.`));
        socket.broadcast
          .to(data.room)
          .emit("newMessage", m("admin", `${data.name} connected to chat.`));
      });

      socket.on("createMessage", (data) => {
        setTimeout(() => {
          socket.emit("newMessage", {
            text: data.text + " SERVER",
          });
        }, 500);
      });
    });
  });
}
