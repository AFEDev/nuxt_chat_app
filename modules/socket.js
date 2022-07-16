import http from "http";
import socketIO from "socket.io";
import Users from "../utils/users";

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
    const users = Users();

    io.on("connection", (socket) => {
      socket.on("joinRoom", (data, cb) => {
        if (!data.name || !data.room) {
          cb("Incorrect data");
        }
        socket.join(data.room);
        users.remove(socket.id);
        users.add({
          id: socket.id,
          name: data.name,
          room: data.room,
        });
        cb({ userId: socket.id });
        io.to(data.room).emit("updateUsers", users.getByRoom(data.room));
        socket.emit(
          "newMessage",
          m(
            "admin",
            `${new Date().toString().slice(15, 24)}  Welcome, ${data.name}.`
          )
        );
        socket.broadcast
          .to(data.room)
          .emit("newMessage", m("admin", `${data.name} connected to chat.`));
      });

      socket.on("createMessage", (data, cb) => {
        if (!data.text) {
          return cb("Please enter text");
        }
        const user = users.get(data.id);
        if (user) {
          io.to(user.room).emit(
            "newMessage",
            m(user.name, data.text, data.id, data.time)
          );
        }
        cb();
      });

      socket.on("userLeft", (id, cb) => {
        const user = users.remove(id);
        if (user) {
          io.to(user.room).emit("updateUsers", users.getByRoom(user.room));
          io.to(user.room).emit(
            "newMessage",
            m("admin", `${user.name} left chat`)
          );
        }
        cb();
      });

      socket.on("disconnect", () => {
        const user = users.remove(socket.id);
        if (user) {
          io.to(user.room).emit("updateUsers", users.getByRoom(user.room));
          io.to(user.room).emit(
            "newMessage",
            m("admin", `${user.name} left chat`)
          );
        }
      });
    });
  });
}
