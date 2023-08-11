import { createRouter, createWebHistory } from "vue-router";
import NewTask from "./views/NewTask.vue";
import OneTask from "./views/OneTask.vue";
import AllTasks from "./views/AllTasks.vue";

const router = createRouter({
  history: createWebHistory(), //Записывать путь в историю
  routes: [
    { path: "/new-task", component: NewTask },
    { path: "/one-task", component: OneTask },
    { path: "/all-tasks", component: AllTasks, alias: "/" },
  ],
  linkActiveClass: "active", //Полписываем отображение активности классов
  linkExactActiveClass: "active",
});

export default router;
