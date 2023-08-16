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
    loadTasksMutation(state, postArr) {
      state.taskList = postArr;
      state.loading = false;
    },
  },
  actions: {
    //Добавление тасков
    async addTaskToList(state, payload) {
      console.log("payload", payload);
      axios
        .post(
          "https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks.json",
          {
            title: payload.title,
            date: payload.date,
            description: payload.description,
            id: payload.id,
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
    async loadTasks(context) {
      //Так как код асинхронный, помещаем в actions
      //Меняем флаг, на то, что загрузка активна
      try {
        //Пытаемся загрузить данные с сервера
        const { data } = await axios.get(
          //Попробуем сделать запрос с сервера, с помощью библиотеки axios
          "https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks.json"
        );
        let loadArr = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key], //С помощью оператора spread Все ключи развернутся в результирующий объект
            kriptoKey: key, //Присваиваем ключи, чтобы в дальнейшем, отредактировать таск
          };
        }); //Здесь будут криптографические ключи,
        context.commit("loadTasksMutation", loadArr); //Вызываем мутацию для того, чтобы изменить значения в state
      } catch (e) {
        console.log(e.message);
      }
    },
    //Обновление статуса поста
    async pushUpdateTask(state, payload) {
      try {
        await axios.patch(
          `https://vue-freelance-mark-default-rtdb.firebaseio.com/tasks/${payload.key}.json`,
          { taskStatus: `${payload.stat}` } //Передаем статус поста и отправляем на сервер
        );
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  getters: {},
});
