export const state = () => ({
  user: {},
  messages: [],
  users: [],
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
    state.users = [];
  },
  newMessage(state, message) {
    state.messages.push(message);
    console.log("message atejo i store?");
  },
  updateUsers(state, users) {
    state.users = users;
    console.log("storo useriai:", users);
  },
};
