<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.text">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["user", "messages"]),
  middleware: ["chat"],
  head() {
    return {
      title: `Room ${this.user.room}`,
    };
  },
};
</script>
