<template>
  <v-snackbar v-model="snackbar">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="pink" text v-bind="attrs" @click="hideModal"> close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    text: String,
    showModal: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      snackbar: this.showModal,
    };
  },
  methods: {
    hideModal() {
      this.snackbar = false;
    },
  },
};
</script>
