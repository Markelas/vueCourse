import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      taskList: [],
      newTask: {},
      status: "",
      id: "",
    };
  },
  mutations: {
    addTaskList(state, payload) {
      state.newTask = {
        title: payload.title,
        date: payload.date,
        description: payload.description,
        id: Math.random(1, 1000),
      };
      state.taskList.push(state.newTask);
    },
    check(state) {
      console.log(state.taskList);
    },
  },
  actions: {},
  getters: {},
});
