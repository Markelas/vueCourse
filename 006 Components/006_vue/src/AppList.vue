<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in 5" :key="i">
        <slot :iter="item" :idx="i"></slot
        ><!--Байндим item с iter и затем этот iter передаем в App.vue-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
