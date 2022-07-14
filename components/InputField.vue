<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        prepend-icon="mdi-emoticon"
        label="Message"
        clear-icon="mdi-close-circle"
        clearable
        outlined
        v-model="text"
        @keydown.enter="send"
        @click:clear="clearMessage"
        @click:prepend="pickEmoji = !pickEmoji"
      ></v-text-field>
      <!-- <emoji-picker v-if="pickEmoji" /> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    text: "",
    time: "",
    label: "Enter message",
    input: "",
    search: "",
    pickEmoji: false,
  }),
  methods: {
    send() {
      this.$socket.emit(
        "createMessage",
        {
          text: this.text,
          id: this.$store.state.user.id,
          time: new Date().toString().slice(15, 24),
        },
        (data) => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            this.text = "";
          }
        }
      );
    },
    clearMessage() {
      this.label = "";
    },
    insert(emoji) {
      this.text += emoji;
    },
  },
};
</script>
