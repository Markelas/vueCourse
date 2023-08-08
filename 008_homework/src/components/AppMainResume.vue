<template>
  <div v-for="item in blocks" :key="item" :id="item.id" :type="item.type">
    <!--Делаем цикл по массиву с объектами, проверяем, есть ли совпадение по типу, если да, то добавляем этот блок-->
    <app-title
      v-if="item.type === 'title'"
      :valueBlock="item.value"
    ></app-title>
    <app-avatar
      v-else-if="item.type === 'avatar'"
      :valueBlock="item.value"
    ></app-avatar>
    <app-subtitle
      v-else-if="item.type === 'subtitle'"
      :valueBlock="item.value"
    ></app-subtitle>
    <app-text
      v-else-if="item.type === 'text'"
      :valueBlock="item.value"
    ></app-text>
  </div>
</template>

<script>
import AppAvatar from "././AppMiniComponents/AppAvatar.vue";
import AppSubtitle from "./AppMiniComponents/AppSubtitle.vue";
import AppText from "./AppMiniComponents/AppText.vue";
import AppTitle from "./AppMiniComponents/AppTitle.vue";
export default {
  props: ["blocks"], //Передаем сюда информацию о блоках
  data() {
    return {
      valueBlock: "",
    };
  },
  methods: {
    check() {
      console.log(this.blocks);
    },
  },
  components: { AppAvatar, AppSubtitle, AppText, AppTitle },
};
</script>

<style scoped></style>
