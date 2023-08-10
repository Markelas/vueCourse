import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //Импортируем роутер
import "./theme.css";

createApp(App).use(router).mount("#app"); //Используем use(router)
