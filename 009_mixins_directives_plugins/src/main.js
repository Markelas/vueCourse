import { createApp } from "vue";
import App from "./App.vue";
//import AlertMixin from "./AlertMixin"; Объявление глобально
import translatePlugin from "./translatePlugin"; //Ипорт плагина
import "./theme.css";

//createApp(App).mixin(alertMixin).mount("#app"); //Объявили миксин alertMixin глобально
// createApp(App)
//   .directive("focus", {
//     mounted(el) {
//       el.focus();
//     },
//   })
//   .mount("#app"); //Можно объявлять и директивы
const app = createApp(App);

const ru = {
  app: {
    title: "Как работают плагины во Vue",
    changeBtn: "Переключить язык",
  },
};

const en = {
  app: {
    title: "How plugins work in Vue?",
    changeBtn: "Toggle language",
  },
};
app.use(translatePlugin, { ru, en });

app.mount("#app");

// createApp(App).mount("#app");
