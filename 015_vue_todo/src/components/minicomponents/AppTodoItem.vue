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
import { Todo } from "../../types/todo";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    //Описываем props, в него входит todo
    todo: {
      // todo это просто объект

      // type: Object as PropType<[id: number, text: string, completed: boolean]>, // Типизируем объект с помощью utility type PropType<>
      type: Object as PropType<Todo>, //Чтобы не использовать несколько раз одну и ту же запись, мы выносим типы в отдельный файл, который называется todo.ts
      required: true,
    },
  },
});
</script>
