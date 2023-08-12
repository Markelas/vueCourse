<template>
  <form class="card" @submit.prevent="submitHandler()">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>
    <button
      class="btn primary"
      :disabled="!(title !== '' && date && description !== '')"
    >
      Создать
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      title: "",
      date: "",
      description: "",
    };
  },
  methods: {
    isValid() {
      return;
    },
    submitHandler() {
      this.$store.commit({
        //Пользуемся мутацией addTaskList в store.js и передаём объекты в массив taskList
        type: "addTaskList",
        title: this.title,
        date: this.date,
        description: this.description,
      });
      console.log("submit");
      this.$store.commit("check");
      this.title = "";
      this.date = "";
      this.description = ""; //Очищаем форму
      this.$store.commit("addTaskToList"); //Отправляем запрос
      this.$store.commit("loadTasks"); //Загружаем
      this.$router.push("/"); //Автоматически переходит на главную страницу
    },
  },
};
</script>
