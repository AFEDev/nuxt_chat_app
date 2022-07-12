<template>
  <v-col cols="12" sm="12">
    <v-text-field
      label="Enter message"
      solo
      dense
      v-model="text"
      @keydown.enter="send"
    ></v-text-field>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    text: "",
    time: new Date().toString().slice(15, 24),
  }),
  methods: {
    send() {
      this.$socket.emit("createMessage", {
        text: this.text,
        id: this.$store.state.user.id,
        time: this.time,
      }),
        (data) => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            this.text = "";
          }
        };
    },
  },
};
</script>
