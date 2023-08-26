<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        class="button"
        :class="{ 'button--primary': activeFilter === 'All' }"
      >
        <!--Меняем активный фильтр, в зависимости от типа All, Active или Done-->
        Все
      </button>
      <button
        class="button"
        :class="{ 'button--primary': activeFilter === 'Active' }"
      >
        Активные
      </button>
      <button
        class="button"
        :class="{ 'button--primary': activeFilter === 'Done' }"
      >
        Выполненные
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Filter } from "../types/filter"

export default defineComponent({
  props: {
    activeFilter: {
      type: String as PropType<Filter>, //Строка которую получаем, может быть только в одном из значений
      required: true,
    },
  },
});
</script>
