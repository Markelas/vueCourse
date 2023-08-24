<template>
  <ul class="todo-list">
    <app-todo-item
      v-for="item in todos"
      :key="item.id"
      :todo="item"
      @toggleTodo="toggleTodo"
    ></app-todo-item>
    <!--Проходимся по циклу в массиве todos и с помощью props передаем содержимое таска :todo="item" -->
    <!--Также получаем заэмиченное событие toggleTodo и описываем логику, что сделаем-->
  </ul>
</template>

<script lang="ts">
import { Todo } from "./../types/todo";
import { defineComponent } from "vue";
import AppTodoItem from "./minicomponents/AppTodoItem.vue";

interface State {
  //Создаём интерфейс State, в нем есть массив todos, обозначили, какие в нем будут поля
  // todos: {
  //   id: number;
  //   text: string;
  //   completed: boolean;
  // }[];
  //Чтобы не использовать несколько раз одну и ту же запись, мы выносим типы в отдельный файл,
  // который называется todo.ts, теперь, мы можем использовать этот тип в нескольких компонентах
  todos: Todo[];
}

export default defineComponent({
  components: {
    AppTodoItem,
  },
  data(): State {
    //data будет возвращать данные, по тому шаблону, который мы указали в interface State
    return {
      todos: [
        { id: 0, text: "Learn the basics of Vue", completed: true },
        { id: 1, text: "Learn the basics of Typescript", completed: false },
        { id: 2, text: "Start new project", completed: false },
        //{ id: '', tsf: 143} Теперь нельзя передавать данные, которые не соответствуют интерфейсу
      ],
    };
  },
  methods: {
    toggleTodo(id: number) { 
      console.log(id)
    }
  }
});
</script>
