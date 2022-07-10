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

  <!-- <div>
    <p>Check socket status in Vue devtools... {{ socketas.id }} {{ test }}</p>
    <v-btn @click="message"> NEW MESSAGE </v-btn>
  </div> -->
</template>

<script>
import { mapMutations } from "vuex";
export default {
  head: {
    title: "Welcome",
  },
  layout: "empty",
  computed: {
    socket() {
      console.log("USER SIDE CONNECTED");
      this.$socket.emit("hello", "world", (response) => {
        console.log(response); // "got it"
      });
      return (this.socketas = this.$socket ? this.$socket : { empty });
    },
  },
  data: () => ({
    socketas: "",
    test: "Testas",
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
    ...mapMutations(["setUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room,
        };
        this.setUser(user);
        this.$router.push("/chat");
      }
    },
    message() {
      console.log("mygtukas veikia");
      this.$socket.emit("createMessage", {
        text: "From client ",
      });
    },
  },
};
</script>
