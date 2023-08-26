<template>
  <div id="app">
    <app-header></app-header>
    <app-filters :activeFilter="activeFilter"></app-filters> <!--Передаём значение, какой фильтр сейчас стоит All, Active или Done-->

    <main class="app-main">
      <!--Передаём в компонент list массив todos и далее из компонента получаем toggleTodo, чтобы переключать и removeTodo, для удаления задания-->
      <app-todo-list
        :todos="todos"
        @toggleTodo="toggleTodo"
        @removeTodo="removeTodo"
      ></app-todo-list>
      <app-add-todo @addTodo="addTodo"></app-add-todo>
      <!--Получаем из компонента addTodo событие addTodo, чтобы добавить в список новую задачу-->
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppTodoList from "./components/AppTodoList.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";
import { Todo } from "./types/todo"; //Импортируем тип Todo из todo.ts
import { Filter } from "./types/filter";

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
  activeFilter: Filter; //Обозначаем тип activeFilter как тип из файла filter.ts, Union types All | Active | Done
}

export default defineComponent({
  components: {
    AppHeader,
    AppFilters,
    AppTodoList,
    AppAddTodo,
    AppFooter,
  },
  data(): State {
    //data будет возвращать данные, по тому шаблону, который мы указали в interface State
    return {
      todos: [
        { id: 0, text: "Изучить основы Vue", completed: true },
        { id: 1, text: "Изучить основы Typescript", completed: false },
        { id: 2, text: "Начать новый проект", completed: false },
        //{ id: '', tsf: 143} Теперь нельзя передавать данные, которые не соответствуют интерфейсу
      ],
      activeFilter: "All",
    };
  },
  methods: {
    addTodo(todo: Todo) {
      //Переданное из компонента AddTodo событие вызывает функцию addTodo
      //и затем добавляет в массив новый элемент, который ввели в форме добавления, также перерисовываем список
      this.todos.push(todo);
    },
    toggleTodo(id: number) {
      //Мы получили id, по этому id мы ищем задачу в массиве todos, если ее нашли, то меняем поле completed
      const targetTodo = this.todos.find((todo: Todo) => todo.id === id); // todo обозначаем тип из интерфейса Todo

      if (targetTodo) {
        targetTodo.completed = !targetTodo.completed;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo: Todo) => todo.id !== id); //Записываем в массив todos, новый отфильтрованный массив, в нем не будет задачи, которую мы удалили
    },
  },
});
</script>

<style></style>
