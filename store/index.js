export const state = () => ({
  user: {},
  messages: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
    console.log("store user suveike", user);
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
  },
  newMessage(state, message) {
    state.messages.push(message);
    console.log("message from store", message);
  },
};
