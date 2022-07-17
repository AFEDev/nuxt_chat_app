<template>
  <v-snackbar v-model="snackbar">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="hideModal"> close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      message: "",
    };
  },
  mounted() {
    const { message } = this.$route.query;
    if (message === "noUser") {
      this.message = "Enter name";
    } else if (message === "leftChat") {
      this.message = "You left chat room";
    }
    this.snackbar = !!this.message;
  },
  methods: {
    hideModal() {
      this.snackbar = false;
    },
  },
};
</script>
