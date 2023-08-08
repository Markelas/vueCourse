<template>
  <div class="container">
    <app-alert :alert="alert" @close="alert = null"></app-alert>
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name">Введите имя</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="name.length === 0">
        Создать человека
      </button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list
      v-else
      :people="people"
      @load="loadPeople"
      @remove="removePersone"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import AppAlert from "./AppAlert.vue";
import AppLoader from "./AppLoader.vue";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      people: [],
      alert: null,
      loading: false,
    };
  },
  mounted() {
    this.loadPeople();
  },
  methods: {
    async createPerson() {
      //Создаем метод и делаем его асинхронным
      const response = await fetch(
        //Делаем запрос и ждем (await), пока он выполнится
        "https://vue-with-database-24c32-default-rtdb.firebaseio.com/people.json",
        {
          method: "POST", //Метод отправка
          headers: {
            "Content-Type": "application/json", //В виде json
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
        }
      );
      const firebaseData = await response.json(); //Далее ожидаем выполнения и переменную response в виде json сохраняем в переменную firebaseData

      this.people.push({
        //Добавляем в массив новый объект
        firstName: this.name,
        id: firebaseData.name,
      });
      this.name = "";
    },
    async loadPeople() {
      this.loading = true; //Меняем флаг, на то, что загрузка активна
      try {
        //Пытаемся загрузить данные с сервера
        const { data } = await axios.get(
          //Попробуем сделать запрос с сервера, с помощью библиотеки axios
          "https://vue-with-database-24c32-default-rtdb.firebaseio.com/people.json"
        );
        if (!data) {
          //Если в базе нет людей, то будет ошибка, которую мы сами написали
          throw new Error("Список людей пуст");
        }
        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key], //С помощью оператора spread Все ключи развернутся в результирующий объект
          };
        }); //Здесь будут криптографические ключи,
        this.loading = false;
      } catch (e) {
        //Если не удается, будет ошибка
        this.alert = {
          type: "danger",
          title: "Ошибка!",
          text: e.message,
        };
        this.loading = false;
        console.log(e.message);
      }
    },
    async removePersone(id) {
      try {
        const name = this.people.find((person) => person.id === id).firstName;
        //Чтобы удалить из списка и с сервера, мы используем delete и пишем принимаем id этой строчки и передаём запрос на удаление
        await axios.delete(
          `https://vue-with-database-24c32-default-rtdb.firebaseio.com/people/${id}.json`
        ); //После нажатия на кнопку удалить, строка удаляется, но все еще отображается, исчезает она только после обновления страницы
        this.people = this.people.filter((person) => person.id !== id); //Чтобы этого избежать, мы делаем фильтр, который будет отображать списки, которые не были удалены и не совпадают с id удаленной строки
        this.alert = {
          //Можем вывести в alert, что пользователь успешно удален
          type: "primary",
          title: "Успешно",
          text: `Пользователь с именем "${name}" был удален`,
        };
      } catch (e) {
        this.alert = {
          type: "danger",
          title: "Ошибка!",
          text: e.message,
        };
      }
    },
  },
  components: { AppPeopleList, AppAlert, AppLoader },
};
</script>

<style></style>
