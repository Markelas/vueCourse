<template>
  <h1>Резюме Nickname</h1>
  <app-avatar></app-avatar>
  <app-subtitle></app-subtitle>
  <app-text></app-text>
</template>

<script>
import AppAvatar from "././AppMiniComponents/AppAvatar.vue";
import AppSubtitle from "./AppMiniComponents/AppSubtitle.vue";
import AppText from "./AppMiniComponents/AppText.vue";
export default {
  props: ["blocks"], //Передаем сюда информацию о блоках
  data() {
    return {};
  },
  methods: {},
  components: { AppAvatar, AppSubtitle, AppText },
};
</script>

<style scoped></style>
