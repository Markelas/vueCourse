<template>
  <div class="container column">
    <app-form></app-form>
    <!--Главная форма для формирования резюме-->
    <div class="card card-w70">
      <app-main-resume></app-main-resume>
      <h3 v-if="blocks.length === 0">
        <!--Если блоков нет, то отображаем сообщение-->
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
      blocks: [], //Здесь хранится информация о блоках на странице с резюме
    };
  },
  components: { AppForm, AppMainResume, AppComments },
};
</script>

<style></style>
