import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      taskList: [],
      newTask: {},
      status: "",
      id: "",
      loading: false,
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
        if (!data) {
          //Если в базе нет людей, то будет ошибка, которую мы сами написали
          throw new Error("Список людей пуст");
        }
        state.taskList = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key], //С помощью оператора spread Все ключи развернутся в результирующий объект
          };
        }); //Здесь будут криптографические ключи,
        state.loading = false;
      } catch (e) {
        this.loading = false;
        console.log(e.message);
      }
    },
  },
  actions: {},
  getters: {},
});
