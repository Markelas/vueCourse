<template>
  <footer class="app-footer">
    {{ stats.active }} задачи ожидают выполнения, {{ stats.done }} выполнена
  </footer>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Stats } from "./../types/stats";

export default defineComponent({
  props: {
    //Получаем пропс со статистикой
    stats: {
      type: Object as PropType<Stats>,
      required: true, //Обязательный параметр
    },
  },
});
</script>
