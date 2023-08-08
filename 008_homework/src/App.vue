<template>
  <div class="container column">
    <app-form @block-added="blockAdd"></app-form>
    <!--Главная форма для формирования резюме, слушаем событие block-added и вызываем функцию blockAdd-->
    <div class="card card-w70">
      <app-main-resume
        v-if="blocks.length !== 0"
        :blocks="blocks"
      ></app-main-resume>

      <h3 v-if="blocks.length === 0">
        <!-- Если блоков нет, то отображаем сообщение -->
        Добавьте первый блок, чтобы увидеть результат
      </h3>
    </div>
  </div>
  <app-comments></app-comments>
</template>

<script>
import AppComments from "./components/AppComments.vue";
import AppForm from "./components/AppForm.vue";
import AppMainResume from "./components/AppMainResume.vue";
export default {
  data() {
    return {
      blocks: [],
    };
  },
  components: { AppForm, AppMainResume, AppComments },
  methods: {
    blockAdd(item) {
      this.blocks.push(item); //Пушим список блоков, которые выбрали в форме
      console.log(this.blocks);
    },
  },
};
</script>

<style></style>
