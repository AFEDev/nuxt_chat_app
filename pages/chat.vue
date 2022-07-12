<template>
  <div class="c-wrap">
    <div class="c-chat">
      <li v-for="message in messages" :key="message.text">
        {{ message.text }}
      </li>
    </div>

    <div class="c-form">
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    socketas: "",
    cal: "",
  }),
  middleware: ["chat"],
  head() {
    return {
      title: `Room ${this.user.room}`,
    };
  },
  computed: {
    ...mapState(["user", "messages"]),
    socket() {
      console.log(this.$socket);

      this.$socket.on("error", (error) => {
        console.log("chat.vue errer", error);
      });

      this.$socket.on("newMessage", (data) => {
        console.log("message chat", data);
      });
      // console.log("chat socketas suveikineja?", this.$socket);
      // this.$socket.on("userJoined", (cb) => {
      //   console.log("chat socket", this.socket);
      //   console.log("cb is puslapio index.vue", cb);
      //   this.cal = cb;
      // });
    },
  },
  methods: {
    ...mapMutations(["newMessage"]),
  },
};
</script>

<style scoped>
.c-wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;
}

.c-chat {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}
</style>
