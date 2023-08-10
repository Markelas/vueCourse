import { createRouter, createWebHistory } from "vue-router";
import AppLogin from "./views/AppLogin.vue";
import AppForget from "./views/AppForget.vue"; //Импортируем компоненты
import AppDashboard from "./views/AppDashboard.vue";
// import AppMail from "./views/AppMail.vue";
import AppEmailBody from "./components/AppEmailBody.vue";
import notFound from "./views/NotFound.vue";

const AppMail = () => import("./views/AppMail.vue"); // Lazy loading, функция возвращает динамический импорт страницы, автоматически страница не загрузится, она будет помещена в отдельный чанк

const router = createRouter({
  history: createWebHistory(), //Записывать путь в историю
  routes: [
    { path: "/login", component: AppLogin, alias: "/" }, // alias: указывает на какую еще страницу можно привести пользователя, чтобы по http://localhost:8080/, можно было перейти на login
    {
      path: "/forget",
      component: AppForget,
      meta: {
        cantEnter: true,
      }, //Данный параметр доступен на route to
    }, // http://localhost:8080/forget
    {
      path: "/dashboard",
      component: AppDashboard,
      name: "home",
      beforeEnter() {
        console.log("before");
      },
    },
    {
      path: "/mail/", //Можно добавить динамический параметр, будет считывать в компоненте AppMail, например, "/mail/:mailId?", Вопросительный знак означает, что id необязательный и можно просто зайти на mail
      component: AppMail,
      name: "email",
      children: [
        //Также можно определить дочерние элементы
        { path: ":mailId?", component: AppEmailBody, props: true },
      ],
    },
    { path: "/:notFound(.*)", component: notFound }, //Если попадаем на не существующую страницу, то попадаем на страницу логина
  ], //localhost:port/login
  linkActiveClass: "active", //Полписываем отображение активности классов
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  if (to.meta.cantEnter) {
    next({ name: "home" }); //Не обязательно использовать ссылку /dashboad, можно использовать название
  } else {
    next();
  }
});

//afterEach принимает те же параметры, но этот метод вызывается тогда, когда перешли на какую-то страницу, можем собирать например, аналитику
router.afterEach(() => {});

export default router;
