import { createApp } from "vue";
import App from "./App.vue";
import TheHeader from "./TheHeader.vue";
import "./theme.css";

//createApp(App).mount("#app");

// App -> AppNews -> AppNewsList

const app = createApp(App);

//global registration
app.component("the-header", TheHeader);

app.mount("#app");
