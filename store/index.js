export const state = () => ({
  user: {},
  messages: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
  },
};

export const actions = {
  newMessage(contex, data) {
    console.log("Message received", data);
  },
};
