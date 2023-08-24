<template>
  <li class="todo-item" :class="{ 'todo-item--done': todo.completed }">
    <!--Если completed = true, то добавляется класс done-->
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button">
      <i class="bi bi-trash3"></i>
    </button>
  </li>
</template>
<!--Перенесли сюда один элемент строки-->

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: { //Описываем props, в него входит todo
    todo: {
      // todo это просто объект
      type: Object as PropType<[id: number, text: string, completed: boolean]>, // Типизируем объект с помощью utility type PropType<>
      required: true,
    },
  },
});
</script>
