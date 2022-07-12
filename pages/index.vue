<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card class="mx-auto" max-width="600" outlined>
          <v-card-title><h2>Nuxt chat 1.0 beta</h2></v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="name"
                :counter="14"
                :rules="nameRules"
                label="Your name"
                required
              ></v-text-field>

              <v-text-field
                v-model="room"
                :rules="roomRules"
                label="Enter room"
                required
              ></v-text-field>

              <v-checkbox
                v-model="checkbox"
                label="Generate random room"
              ></v-checkbox>

              <v-btn
                :disabled="!valid"
                color="primary"
                class="mr-4 mb-3"
                @click="submit"
              >
                Enter
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  head: {
    title: "Welcome",
  },
  layout: "empty",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 14) || "Name must be less than 14 characters",
    ],
    room: "",
    roomRules: [(v) => !!v || "Enter chat room"],
    checkbox: false,
  }),

  methods: {
    ...mapMutations(["setUser", "newMessage"]),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room,
          time: new Date().toString().slice(15, 24),
        };
        this.$socket.emit("joinRoom", user, (data) => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$router.push("/chat");
          }
        });
        this.$socket.on("newMessage", (data) => {
          this.newMessage(data);
        });
      }
    },
  },
};
</script>
