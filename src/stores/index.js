import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      windowWidth: 0,
    };
  },
  mutations: {
    recordWindowWidth(state, payload) {
      state.windowWidth = payload;
    },
  },
});