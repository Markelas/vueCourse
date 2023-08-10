<template>
  <form class="card" @submit.prevent="submit">
    <h2>Мини клон Gmail</h2>
    <div class="form-control">
      <label for="email">Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>

    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>

    <button class="btn primary" type="submit">Войти</button>
    <router-link to="/forget" v-slot="{ navigate }"
      ><!--Создали ссылку- обёртку над кнопкной, можно даже добавить слот, при нажатии на кнопку, можно даже получать функцию navigate, сюда мы получаем объект slot props и забираем navigate-->
      <!--Таким образом, можно при клике вызывать метод navigate-->
      <button class="btn warning" @click="navigate">Забыл пароль?</button>
    </router-link>

    <!-- <button class="btn warning">Забыл пароль?</button> Обычная кнопка -->
    <!-- <router-link to="/forget">Забыл пароль?</router-link> Просто ссылка, без класса -->
    <!--Если использовать тег a, то страница будет перезагружаться, поэтому используем router-link to=""-->
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.email !== "" && this.password !== ""; //Проверка на валидность
    },
  },
  inject: ["login"],
  methods: {
    submit() {
      // При сабмите страницы, вызывается функция submit (страница не перезагружается) @submit.prevent="submit"
      if (this.isValid) {
        //Проверка валидности пароля
        this.login(); //Также можно использовать созданный метод из другого компонента
        //this.$router.push("/dashboard"); //Переход на страницу
        //Также можно использовать вместо метода push(), метод replace(), пуш сохраняет историю перехода, а реплейс нет
      }
    },
  },
};
</script>

<style scoped></style>
