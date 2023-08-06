<template>
  <div>
    <h4>{{ title }}</h4>
    <ul>
      <li :key="item" v-for="item in news">
        {{ item.title }} <span v-if="item.wasRead">- - Прочитанно</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ["title", "news"], //Передаем значение с помощью provide и получаем с inject
};
</script>
