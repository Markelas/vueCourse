<template>
  <div v-if="!loading">
    <h1 class="text-white center" v-if="taskList.length < 0">Задач пока нет</h1>
    <h3 class="text-white">Всего активных задач: {{ taskList.length }}</h3>
    <div v-for="item in taskList" :key="item.id">
      <div class="card">
        <h2 class="card-title">
          {{ item.title }}
          <AppStatus :type="item.taskStatus" />
        </h2>
        <p>
          <strong>
            <small>
              {{ item.date }}
            </small>
          </strong>
        </p>
        <button class="btn primary" @click="openTask(item.id, item)">
          <!--Открываем таск-->
          Посмотреть
        </button>
      </div>
    </div>
  </div>
  <app-loading v-else></app-loading>
</template>

<script>
import AppStatus from "../components/AppStatus";
import AppLoading from "../components/AppLoading.vue";

export default {
  data() {
    return {};
  },

  emits: ["openTask"],
  methods: {
    openTask(id, item) {
      this.$router.push(`/one-task/${id}`); //Переотправляем на другую страницу,
      console.log(id);
      this.$store.state.activeTask = item;
      console.log(this.taskList);
      this.$store.commit("addTaskToLocalStorage");
    },
  },
  components: { AppStatus, AppLoading },
  computed: {
    taskList() {
      return this.$store.state.taskList;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.commit("loadTasks");
    this.$store.state.loading = true;
  },
};
</script>
