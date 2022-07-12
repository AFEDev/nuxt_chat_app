<template>
  <v-app>
    <div class="c-wrap">
      <div class="c-chat">
        <MessageVue
          v-for="message in messages"
          :key="message.text"
          :name="message.name"
          :text="message.text"
          owner
        />
      </div>
      <div class="c-form">
        <InputField />
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MessageVue from "../components/Message.vue";
import InputField from "../components/InputField.vue";
export default {
  data: () => ({
    socketa: "",
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
    },
  },
  components: { MessageVue, InputField },
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
