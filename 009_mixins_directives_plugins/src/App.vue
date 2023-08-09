<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>
      <!--То что в скобках, это key-->

      <!-- <button class="btn" @click="$alert('It working')">Alert</button> -->
      <button class="btn" @click="changeLang">
        {{ $i18n("app.changeBtn") }}
      </button>
      <button class="btn primary" @click="modal = true">
        Открыть модальное окно
      </button>

      <teleport to="#modal">
        <app-modal v-if="modal" @close="modal = false"></app-modal
      ></teleport>
      <!--Используем событие, которое заэмитили и выключаем модальное окно, при нажатии на background-->
    </div>
  </div>
</template>

<script>
import AppModal from "./components/AppModal.vue";
export default {
  data() {
    return {
      modal: false,
    };
  },
  inject: ["changeI18N"],
  methods: {
    changeLang() {
      this.changeI18N("en");
      this.$forceUpdate();
    },
  },
  mounted() {
    // Можно использовать this.$alert
  },
  components: { AppModal },
};
</script>
