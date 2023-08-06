<template>
  <div>
    <the-header></the-header>
    <div class="container pt-1">
      <div class="card">
        <h2>Slots</h2>
      </div>

      <app-list>
        <template #default="{ idx, iter }">
          <span style="color: orange">
            <strong style="color: purple">{{ idx + 1 }} </strong>
            Item: {{ iter }}</span
          ><!-- чтобы применить стили к циклу, мы связываем slot, байндим и передаем в App.vue-->
        </template>
      </app-list>

      <app-block>
        <p>Это текст для app vue</p>
        <!--Если сюда ничего не передавать, то появится текст из дочернего элемента в slot-->
        <template v-slot:header>
          <h3>Заголовок</h3>
        </template>

        <template v-slot:footer>
          <hr />
          <h4>Какой-либо текст в футере</h4>
        </template>
      </app-block>
    </div>
  </div>
</template>

<script>
import AppBlock from "./AppBlock";
import AppList from "./AppList";
export default {
  components: { AppBlock, AppList },
};
</script>

<style scoped></style>
