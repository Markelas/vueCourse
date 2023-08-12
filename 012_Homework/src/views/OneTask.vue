<template>
  <div class="card">
    <h2>{{ activeTask.title }}</h2>
    <p>
      <strong>Статус</strong>:
      <AppStatus :type="classBtn" />
    </p>
    <p><strong>Дэдлайн</strong>: {{ activeTask.date }}</p>
    <p><strong>Описание</strong>: {{ activeTask.description }}</p>
    <div>
      <button class="btn" @click="updateTask('Active')">Взять в работу</button>
      <button class="btn primary" @click="updateTask('Done')">Завершить</button>
      <button class="btn danger" @click="updateTask('Canceled')">
        Отменить
      </button>
    </div>
  </div>
  <!-- <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ activeTask.id }}</strong> нет.
  </h3> -->
</template>

<script>
import AppStatus from "../components/AppStatus";

export default {
  data() {
    return {
      activeUrlId: 0,
      findUrlId: {},
      classBtn: this.$store.state.activeTask.taskStatus,
    };
  },
  props: ["taskOne"],
  components: { AppStatus },
  computed: {
    taskList() {
      return this.$store.state.taskList;
    },
    activeTask() {
      return this.$store.state.activeTask;
    },
  },
  mounted() {},
  methods: {
    // checkRealId() {
    //   let id = window.location.pathname;
    //   this.activeUrlId = parseInt(window.location.pathname.match(/\d+/)); // id страницы
    //   console.log(this.$store.getters.taskById(id));
    // },
    updateTask(stat) {
      this.classBtn = stat;
      let key = this.activeTask.kriptoKey;
      console.log(this.activeTask.kriptoKey);
      this.$store.commit("pushUpdateTask", { key, stat });
      //console.log(stat);
    },
  },
};
</script>

<style scoped></style>
