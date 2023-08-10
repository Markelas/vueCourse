<template>
  <the-navbar :visible="isAuth"></the-navbar>
  <div class="container with-nav">
    <router-view></router-view>
    <!--Указываем место, где хотим разместить страницу, теперь она будет доступна по адресу .../login-->
  </div>
</template>

<script>
import TheNavbar from "./components/TheNavbar";
//import Login from "./views/AppLogin";

export default {
  data() {
    return {
      isAuth: true, //Это аунтификация пользователя, по умолчанию, он не зарегестрирован
    };
  },
  methods: {
    login() {
      this.isAuth = true; //Когда пользователь залогирован, переходит на главную страницу
      if (this.$route.query.page) {
        //Если мы вышли с какой-то страницы и сохранился параметр page, то входим на него
        this.$router.push(this.$route.query.page);
      } else {
        this.$router.push("/dashboard"); //Если такого параметра нет, то на главную страницу
      }
    },
    logout() {
      this.isAuth = false; //Когда разлогинился, то выходит на страницу логина
      this.$router.push({
        path: "/login",
        query: {
          //Можем устанавливать параметры
          page: this.$route.path, //$route Отвечает за текующую страницу, но мы берем из этой информации, инфо о текущей странице
        }, //Находясь на странице mail, нажав на кнопку выйти, мы получаем http://localhost:8080/login?page=/mail, т.е. отображает страницу, откуда выходили, далее можем это обработать
      }); // и спользовать, если выходили со страницы mail, то при логине, возвращаться на нее
    },
  },
  components: { TheNavbar },
  provide() {
    return {
      login: this.login,
      logout: this.logout,
      emails: [
        { id: "1", theme: "Купил себе PlayStation 5" },
        { id: "2", theme: "Выучил Vue Router" },
        { id: "3", theme: "Хочу изучить весь Vue" },
        { id: "4", theme: "А следующий блок про Vuex!" },
        { id: "5", theme: "А что там на счет Vue Hooks?" },
      ],
    };
  },
};
</script>

<style></style>
