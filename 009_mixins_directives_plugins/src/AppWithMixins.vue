<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Очень важное сообщение"
      title="Внимание"
      type="danger"
      :closeable="true"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";
import alertMixin from "./AlertMixin.js"; //Подключаем mixin локально
export default {
  mixins: [alertMixin],
  components: { AppAlert, AppBlock },
};
</script>
