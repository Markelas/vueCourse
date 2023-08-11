import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router"; //Импортируем роутер
import "./theme.css";

createApp(App).use(store).use(router).mount("#app");
