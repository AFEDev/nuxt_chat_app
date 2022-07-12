<template>
  <div>
    <div v-if="name === 'admin'">
      <p class="text-sm-center">{{ text }}</p>
      <hr />
    </div>
    <div v-else class="wrap">
      <div class="message" :class="{ owner }">
        <p>{{ time }}</p>
        <small
          ><strong>{{ name }}</strong></small
        >
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    text: String,
    time: String,
    owner: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.system {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 0rem;
  color: #fff;
}

.wrap {
  display: flex;
  flex-direction: column;
}
.message {
  padding: 1rem;
  width: 60%;
  margin: 0 1rem 1rem 1rem;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 4px;
  position: relative;
}

.owner {
  background: #fff;
  color: #000;
  align-self: flex-end;
}
</style>
