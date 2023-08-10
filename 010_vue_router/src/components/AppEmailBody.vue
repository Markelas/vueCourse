<template>
  <div v-if="email">
    <h2>{{ email.theme }}</h2>
    <!--Из полученного массива писем получаем тему письма-->
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi,
      cumque ea laborum laudantium nostrum odio quis soluta sunt velit?
    </p>
    <button class="btn" @click="$router.push('/mail')">Закрыть</button>
    <!--Переход на главную страницу почты без письма-->
  </div>
  <div v-else>
    <h4>Выберите письмо</h4>
  </div>
</template>

<script>
export default {
  inject: ["emails"],
  props: ["mailId"], //Получаем параметр mailId, который будет информировать, что за id письма
  computed: {
    email() {
      return this.emails.find((e) => e.id === this.mailId);
    },
  },
};
</script>

<style scoped></style>
