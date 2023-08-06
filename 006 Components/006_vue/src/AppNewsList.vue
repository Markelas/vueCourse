<template>
  <div>
    <ul>
      <li :key="item" v-for="item in news">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["news"],
};
</script>
