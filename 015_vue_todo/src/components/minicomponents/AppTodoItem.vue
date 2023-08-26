<template>
  <li
    class="todo-item"
    :class="{ 'todo-item--done': todo.completed }"
    @click="toggleTodo"
  >
    <!--Если completed = true, то добавляется класс done-->
    <div class="todo-item__status">
      <i class="bi bi-check2"></i>
    </div>
    <span class="todo-item__text">{{ todo.text }}</span>
    <button class="todo-item__remove-button" @click.stop="removeTodo">
      <!--Событие удаления элемента, добавили к click модификатор stop, так как было бы всплытие события, так как корзина находится внутри элемента, по которому мы тоже можем кликать-->
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

  methods: {
    toggleTodo() {
      this.$emit("toggleTodo", this.todo.id); //Эмиттим событие переключения и передаём id, передаем его в AppTodoList
    },
    removeTodo() {
      this.$emit("removeTodo", this.todo.id); //Тоже самое делаем и для удаления
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id), // Мы валидируем эмит, указываем, что аргумент будет id и этот id это число
    removeTodo: (id: number) => Number.isInteger(id), //Также и для удаления из списка
  },
});
</script>
