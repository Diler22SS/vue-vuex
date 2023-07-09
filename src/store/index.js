import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
    number: "1",
    degree: "1",
  },
  getters: {
    counterPow(state) {
      return state.counter ** state.degree;
    },
  },
  mutations: {
    increaseCounter(state, number) {
      state.counter += number;
    },
    decreaseCounter(state, number) {
      state.counter -= number;
    },
  },
  actions: {
    increaseCounter({ commit }) {
      commit("increaseCounter", 10);
    },
    decreaseCounter({ commit }) {
      commit("decreaseCounter", 10);
    },
  },
  modules: {},
});
