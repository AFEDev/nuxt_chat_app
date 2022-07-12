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

    const m = (name, text, id, time) => ({ name, text, id, time });

    io.on("connection", (socket) => {
      socket.on("joinRoom", (data, cb) => {
        console.log("SERVERIS VEIKIA");
        if (!data.name || !data.room) {
          cb("Incorrect data");
        }
        socket.join(data.room);
        cb({ userId: socket.id });
        socket.emit("newMessage", m("admin", `Welcome, ${data.name}.`));
        socket.emit("newMessage", m("TEST", `Welcome`));
        socket.broadcast
          .to(data.room)
          .emit("newMessage", m("admin", `${data.name} connected to chat.`));
      });

      socket.on("createMessage", (data) => {
        setTimeout(() => {
          socket.emit("newMessage", {
            text: data.text + " SERVER",
            time: data.time,
          });
        }, 500);
      });
    });
  });
}
