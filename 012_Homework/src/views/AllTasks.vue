<template>
  <div v-if="!loading">
    <h1 class="text-white center" v-if="taskList.length < 0">Задач пока нет</h1>
    <h3 class="text-white">Всего активных задач: {{ taskList.length }}</h3>
    <div v-if="taskList.length > 1">
      <!--Добавляем фильтр, если есть задачи-->
      <button class="btn" @click="reverseTask">
        Отфильтровать по дате создания
      </button>
      <h3 class="text-white" style="margin-bottom: 15px">
        {{
          filterStatus
            ? "От новых - к старым задачам"
            : "От старых - к новым задачам"
        }}
      </h3>
    </div>
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
    return {
      filterStatus: false,
    };
  },

  emits: ["openTask"],
  methods: {
    openTask(id, item) {
      this.$router.push(`/one-task/${id}`); //Переотправляем на другую страницу,
      console.log(id);
      this.$store.state.activeTask = item;
      console.log(this.taskList);
    },
    reverseTask() {
      //Меняем список на странице от свежесозданных, к старым
      this.filterStatus = !this.filterStatus; //Для отображения, как настроенна фильтрация
      console.log("Обновили список");
      this.$store.state.taskList = this.$store.state.taskList.reverse();
    },
  },
  components: { AppStatus, AppLoading },
  computed: {
    taskList() {
      return this.$store.state.taskList; // Создаем функцию, чтобы удобно было вызывать
    },
    loading() {
      return this.$store.state.loading;
    },
  },
  mounted() {
    this.$store.dispatch("loadTasks"); //При загрузке страницы формируем список задач
    this.$store.state.loading = true; //Меняем флаг загрузки, что сейчас загружается список, затем после загрузки, он снова меняется
  },
};
</script>
