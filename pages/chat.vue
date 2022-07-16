<template>
  <v-app>
    <div class="c-wrap">
      <div ref="block" class="c-chat">
        <MessageVue
          v-for="(message, index) in messages"
          :key="index"
          :name="message.name"
          :text="message.text"
          :time="message.time"
          :owner="message.id === user.id"
        />
      </div>
      <div class="c-form">
        <InputField />
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
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
  },
  watch: {
    messages() {
      setTimeout(() => {
        if (this.$refs.block) {
          this.$refs.block.scrollTop = this.$refs.block.scrollHeight;
        }
      }, 0);
    },
  },
  components: { MessageVue, InputField },
};
</script>

<style scoped>
.c-wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
  margin-top: 80px;
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
