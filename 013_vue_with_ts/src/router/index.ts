import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AppHome from "../views/AppHome.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/AppUsers.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: "active",
  linkActiveClass: "active",
});

export default router;
