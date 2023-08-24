<template>
  <ul class="todo-list">
    <app-todo-item></app-todo-item>
    <li class="todo-item">
      <div class="todo-item__status">
        <i class="bi bi-check2"></i>
      </div>
      <span class="todo-item__text">Learn the basics of Typescript</span>
      <button class="todo-item__remove-button">
        <i class="bi bi-trash3"></i>
      </button>
    </li>
    <li class="todo-item">
      <div class="todo-item__status">
        <i class="bi bi-check2"></i>
      </div>
      <span class="todo-item__text">Subscribe to the channel</span>
      <button class="todo-item__remove-button">
        <i class="bi bi-trash3"></i>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppTodoItem from "./minicomponents/AppTodoItem.vue";

export default defineComponent({
  components: {
    AppTodoItem,
  },
});
</script>
