import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  //Можно создавать новые модули и соединять с главным файлом
  state() {
    return {
      appTitle: "Vuex Work",
    };
  },
  getters: {
    uppercaseTitle(state) {
      return state.appTitle.toUppercase();
    },
  },
});
