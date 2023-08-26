<template>
  <section class="add-todo">
    <form v-if="isFormVisible" class="add-todo__form" @submit.prevent="addTodo">
      <!--Отменяем перезагрузку формы при нажатии на кнопку и при отправке вызываем функцию addTodo-->
      <button class="close-button" type="button" @click="closeForm">
        <i class="bi bi-x"></i>
      </button>
      <div class="text-input text-input--focus">
        <input v-model="todoText" class="input" />
      </div>
      <button class="button button--filled">Добавить задание</button>
    </form>
    <button v-else class="add-todo__show-form-button" @click="showForm">
      <!--Если форма добавления таска показывается, то кнопки добавления нет и наоборот-->
      <i class="bi bi-plus-lg"></i>
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Todo } from "../types/todo";

interface State {
  isFormVisible: boolean;
  todoText: string;
}

export default defineComponent({
  data(): State {
    return {
      isFormVisible: false,
      todoText: "",
    };
  },
  methods: {
    showForm() {
      //При вызове функции (нажатии на кнопку + на странице) показываем форму добавления задачи
      this.isFormVisible = true;
    },
    closeForm() {
      //При нажатии на кнопку крестика, закрываем форму добавления задачи
      this.isFormVisible = false;
    },
    addTodo() {
      //Эмиттим событие и передаем в виде аргумента объект с данными о задаче
      this.$emit("addTodo", {
        id: Date.now(), //Будет генерироваться случайное ID
        text: this.todoText, //Текст берем из v-model todoText и передаем текущее значение
        completed: false, //Статус задачи, по умолчанию он не выполнен
      });
      this.todoText = "";
    },
  },
  emits: {
    //Эмитим событие добавления задачи, при нажатии на кнопку "Добавить задачу" и затем, передаем это событие в основной компонент App, там мы его слушаем
    addTodo: (todo: Todo) => todo,
  },
});
</script>
