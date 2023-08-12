import { createStore } from "vuex";
import axios from "axios";
//import firebase from "firebase";

export default createStore({
  state() {
    return {
      kriptoKey: "",
      taskList: [],
      newTask: {},
      taskStatus: "",
      id: "",
      loading: false,
      activeTask: {},
    };
  },
  mutations: {
    addTaskList(state, payload) {
      state.newTask = {
        title: payload.title,
        date: payload.date,
        description: payload.description,
        id: Math.floor(Math.random() * 10000000), //Формируем случайный id
      };
      state.taskList.push(state.newTask); //Пушим в объект newTask
    },
    check(state) {
      console.log(state.taskList); //Пушим в массив с тасками
    },
    //Добавление тасков
    async addTaskToList(state) {
      axios
        .post(
          "https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks.json",
          {
            title: state.newTask.title,
            date: state.newTask.date,
            description: state.newTask.description,
            id: state.newTask.id,
            taskStatus: "Backlog",
            kriptoKey: "",
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //ЗАГРУЗКА ТАСКОВ
    async loadTasks(state) {
      state.loading = true; //Меняем флаг, на то, что загрузка активна
      try {
        //Пытаемся загрузить данные с сервера
        const { data } = await axios.get(
          //Попробуем сделать запрос с сервера, с помощью библиотеки axios
          "https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks.json"
        );
        state.taskList = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key], //С помощью оператора spread Все ключи развернутся в результирующий объект
            kriptoKey: key, //Присваиваем ключи, чтобы в дальнейшем, отредактировать таск
          };
        }); //Здесь будут криптографические ключи,
        state.loading = false;
      } catch (e) {
        state.loading = false;
        console.log(e.message);
      }
      console.log(state.taskList);
    },
    //Обновление данных
    async pushUpdateTask(state, payload) {
      //console.log("state", state, "payload", payload);
      console.log(payload.stat);
      try {
        await axios.patch(
          `https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks/${payload.key}.json`,
          { taskStatus: `${payload.stat}` }
        );
      } catch (e) {
        console.log(e.message);
      }
    },
    addTaskToLocalStorage(state) {
      let actTask = state.activeTask;
      localStorage.setItem("task", JSON.stringify(actTask));
      actTask = JSON.stringify(actTask);
      console.log(actTask);
      actTask = JSON.parse(actTask);
      console.log(actTask);
      state.activeTask = actTask;
      console.log(state.activeTask);
    },
  },
  actions: {},
  getters: {
    // checkTaskId(state) {
    //   let id = window.location.pathname;
    //   this.activeUrlId = parseInt(window.location.pathname.match(/\d+/)); // id страницы
    //   console.log(this.$store.getters.taskById(id));
    // },
  },
});
