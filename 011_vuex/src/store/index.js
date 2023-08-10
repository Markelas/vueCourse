import { createStore } from "vuex";
// import nameModule from "./modules/NameModule.js";
import mutations from "./modules/mutations.js";
import actions from "./modules/actions.js";

export default createStore({
  //plagins: [createLogger()], //С помощью плагина можем смотреть, что произошло, предыдущее состояниие, какая была мутация, текущее состояние
  // modules: { nameModule },
  state() {
    return {
      counter: 1,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: {
    //Позволяют дополнительно изменять данные, если это нужно
    counter(state) {
      // if (state.counter > 30) {
      //   return 0;
      // }
      return state.counter;
    },
    doubleCounter(_, getters) {
      //state мы не используем, ставим _, а мы обращаемся к getters, чтобы иметь доступ до других getters, которые у нас присутствуют
      return getters.counter * 2;
    },
  },
});
