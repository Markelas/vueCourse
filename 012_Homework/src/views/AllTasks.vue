<template>
  <h1 class="text-white center" v-if="taskList.length < 0">Задач пока нет</h1>
  <h3 class="text-white">Всего активных задач: {{ taskList.length }}</h3>
  <div v-for="item in taskList" :key="item">
    <div class="card">
      <h2 class="card-title">
        {{ item.title }}
        <AppStatus :type="'done'" />
      </h2>
      <p>
        <strong>
          <small>
            {{ item.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";

export default {
  components: { AppStatus },
  computed: {
    taskList() {
      return this.$store.state.taskList;
    },
  },
  mounted() {
    this.$store.commit("loadTasks");
    console.log("array", this.$store.state.taskList);
  },
};
</script>
