<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Очень важное сообщение"
      title="Внимание"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Скрыть" : "Показать" }} сообщение
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert.vue";
import alertMixin from "../AlertMixin";
export default {
  mixins: [alertMixin],
  components: { AppAlert },
};
</script>
