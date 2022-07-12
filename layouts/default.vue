<template>
  <v-app app>
    <v-navigation-drawer app v-model="drawer" mobile-breakpoint="650">
      <v-sheet color="blue-grey lighten-4" class="pa-1">
        <v-avatar class="mb-4" color="grey darken-1" size="40"></v-avatar>
        <div>{{ user.name }}</div>
      </v-sheet>
      <v-list subheader>
        <v-subheader>Users list: </v-subheader>

        <v-list-item v-for="user in users" :key="user.id">
          <!-- <v-list-item-avatar>
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar> -->

          <v-list-item-content>
            <v-list-item-title v-text="user.name"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon> mdi-message-outline </v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn @click="exit">
        <v-icon>mdi-arrow-left-bold-circle-outline</v-icon>
      </v-btn>
      <v-toolbar-title> Chat room: {{ user.room }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <div style="height: 100%">
          <Nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data: () => ({
    drawer: true,
    users: [
      { id: 1, name: "user 1" },
      { id: 2, name: "user 2" },
      { id: 3, name: "user 3" },
    ],
  }),
  computed: mapState(["user"]),
  methods: {
    ...mapMutations(["clearData", "newMessage"]),
    exit() {
      this.$router.push("/?message=leftChat");
      this.clearData();
    },
  },
};
</script>
