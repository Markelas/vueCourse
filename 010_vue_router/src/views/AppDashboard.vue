<template>
  <div class="card">
    <h1>Привет на главной</h1>

    <p>
      Тут ты можешь перейти на любую страницу и почитать заранее заготовленные
      письма
    </p>

    <router-link :to="{ name: 'email' }">To Mail</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter() {
    console.log("beforeRouteEnter");
  },
  beforeRouteLeave(to, from, next) {
    //Можем останавливать переход на другую страницу у пользователя, например, чтобы задать какой-либо вопрос
    const answer = confirm("Вы уверены, что хотите покинуть страницу?");
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
};
</script>

<style scoped></style>
