<template>
  <v-container fluid>
    <v-app-bar :elevation="2" color="gray">
      <v-spacer />
      <v-btn outlined class="ml-3">
        <router-link to="/">Главная</router-link>
      </v-btn>
      <v-btn outlined class="ml-3"
        ><router-link to="/photo">Фото</router-link></v-btn
      >
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
