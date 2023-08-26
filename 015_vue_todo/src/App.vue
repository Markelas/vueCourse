<template>
  <div id="app">
    <app-header></app-header>
    <app-filters
      :activeFilter="activeFilter"
      @setFilter="setFilter"
    ></app-filters>
    <!--Передаём значение, какой фильтр сейчас стоит All, Active или Done-->
    <!--Также при клике на кнопки фильтрации, мы передаем это событие из компонента AppFilters и получаем его здесь, затем меняем значение в activeFilter-->

    <main class="app-main">
      <!--Передаём в компонент list массив todos и далее из компонента получаем toggleTodo, чтобы переключать и removeTodo, для удаления задания-->
      <app-todo-list
        :todos="filteredTodos"
        @toggleTodo="toggleTodo"
        @removeTodo="removeTodo"
      ></app-todo-list>
      <!--Передаем в компонент AppTodoList тот массив, который мы отфильтровали в filterTodos, будет отображаться в зависимости от типа фильтра Все, Активные или Выполненные-->
      <app-add-todo @addTodo="addTodo"></app-add-todo>
      <!--Получаем из компонента addTodo событие addTodo, чтобы добавить в список новую задачу-->
    </main>

    <app-footer :stats="stats"></app-footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import AppTodoList from "./components/AppTodoList.vue";
import AppAddTodo from "./components/AppAddTodo.vue";
import AppFooter from "./components/AppFooter.vue";
import { Stats } from "./types/stats"; //Импортируем Интерфейс Stats, который описывает типы Stats
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
  computed: {
    filteredTodos(): Todo[] {
      //Вызывается метод, который возвращает массив по типу, который мы описали в todo.ts
      switch (
        this.activeFilter //Если переменная activeFilter
      ) {
        case "Active": //Содержит тип Active
          return this.activeTodos; //Отображаем все не выполненные задачи (активные)
        case "Done":
          return this.doneTodos; //Если тип Выполнено, то отображаем их
        case "All": //Иначе, будем показывать все
        default:
          return this.todos;
      } //Затем, передаем в AppTodoList и там, в зависимости от типа фильтрации, будем отображать список Всех, либо Активных, либо выполненных задач
    },
    stats(): Stats {
      //Функция, для статистики, которая отображается в AppFooter
      return {
        active: this.activeTodos.length, //Сюда получаем длину отфильтрованных массивов, сколько активных задач
        done: this.doneTodos.length, //И сколько выполненных задач
      };
    },
    activeTodos(): Todo[] {
      //Чтобы не писать везде длинную конструкцию, мы заменяем ее на activeTodos, чтобы было меньше кода
      return this.todos.filter((todo) => !todo.completed);
    },
    doneTodos(): Todo[] {
      //Также и для выполненных задач
      return this.todos.filter((todo) => todo.completed);
    },
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
    setFilter(filter: Filter) {
      this.activeFilter = filter;
    },
  },
});
</script>

<style></style>
