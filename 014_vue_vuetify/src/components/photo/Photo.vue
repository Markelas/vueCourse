<template>
  <v-col cols="4">
    <!--Колонки на странице-->
    <v-card @click="openPhoto">
      <!--Сама карточка-->
      <v-card-title>{{ photo.title }}</v-card-title>
      <!--Название-->
      <v-card-text>
        <v-img width="200" height="200" :src="photo.url"></v-img>
        <!--Ссылка на фото-->
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["photo"],
  methods: {
    openPhoto() {
      this.$emit("openPhoto", this.photo);
    },
  },
};
</script>

<style scoped></style>
