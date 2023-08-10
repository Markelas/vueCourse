<template>
  <header class="navbar" v-if="visible">
    <h3>GMail</h3>
    <ul class="navbar-menu">
      <li><router-link to="/dashboard">Главная</router-link></li>
      <li>
        <router-link to="/mail" custom v-slot="{ navigate, href }"
          ><a
            href="#"
            @click="navigate"
            :class="{
              active: $route.path.indexOf(href) !== -1,
            }"
            >Почта</a
          ></router-link
        ><!--Добавляем параметры к v-slot, оттуда получаем информацию о навигации и ссылки, при клике на ссылку, 
        добавляем класс active, если текущая страница, на которой находится, содержит ссылку /mail, если это так, то ставим класс active-->
      </li>
      <li>
        <router-link to="/login" @click.prevent="logout">Выйти</router-link>
      </li>
      <!--Теперь можно динамически переходить по nav-бару-->
    </ul>
  </header>
</template>

<script>
export default {
  inject: ["logout"], //Получаем созданный метод из App.vue
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
