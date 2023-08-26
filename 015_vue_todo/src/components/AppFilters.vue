<template>
  <aside class="app-filters">
    <section class="toggle-group">
      <button
        v-for="filter in filters"
        :key="filter"
        class="button"
        :class="{ 'button--primary': activeFilter === filter }"
        @click="setFilter(filter)"
      >
        <!--Меняем активный фильтр, в зависимости от типа All, Active или Done и передаём этот ключ в событие setFilter-->
        {{ filter }}
      </button>
    </section>
  </aside>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Filter } from "../types/filter";
interface State {
  //Описываем интерфейс с фильтром
  filters: Filter[]; //У массива будут типы из Filter, который мы взяли из filter.ts и обозначили, что это массив со значениями All либо Active, либо Done
}

export default defineComponent({
  props: {
    activeFilter: {
      type: String as PropType<Filter>, //Строка которую получаем, может быть только в одном из значений
      required: true,
    },
  },
  data(): State {
    return {
      filters: ["All", "Active", "Done"], //Другие типы уже добавить нельзя
    };
  },
  methods: {
    setFilter(filter: Filter) {
      //Здесь мы ожидаем All, Active или Done
      this.$emit("setFilter", filter);
    },
  },
  emits: {
    setFilter: (filter: Filter) => filter //Описываем, что событие setfilter может получить только значение filter с типом Filter (union type) из файла filter.ts
  }
});
</script>
