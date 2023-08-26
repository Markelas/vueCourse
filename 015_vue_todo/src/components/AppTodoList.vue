<template>
  <ul class="todo-list">
    <app-todo-item
      v-for="item in todos"
      :key="item.id"
      :todo="item"
      @toggleTodo="toggleTodo"
      @removeTodo="removeTodo"
    ></app-todo-item>
    <!--Проходимся по циклу в массиве todos (В зависимости от настроек фильтрации, Все, Активные или Выполненные) и с помощью props передаем содержимое таска :todo="item" -->
    <!--Также получаем заэмиченное событие toggleTodo и описываем логику, что сделаем-->
  </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { Todo } from "./../types/todo";
import AppTodoItem from "./minicomponents/AppTodoItem.vue";

export default defineComponent({
  components: {
    AppTodoItem,
  },
  props: {
    todos: {
      //Получаем массив Array, с типом Todo и затем с помощью v-for отображаем их, когда с ними происходят какие-либо события,
      //переключение или удаление, вызывается события и затем они с помощью emit передаются в App-->
      type: Array as PropType<Todo[]>,
    },
  },
  methods: {
    toggleTodo(id: number) {
      this.$emit("toggleTodo", id); //Созданные события мы передаем дальше в компонент App
    },
    removeTodo(id: number) {
      this.$emit("removeTodo", id);
    },
  },
  emits: {
    toggleTodo: (id: number) => Number.isInteger(id),
    removeTodo: (id: number) => Number.isInteger(id),
  },
});
</script>
