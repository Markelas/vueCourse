<template>
  <div class="card">
    <slot name="header"></slot>
    <!--Можем передавать и изменять расположение именованных слотов-->
    <slot> Текста нет</slot>
    <!--У обычного slot тоже есть название, это default-->
    <slot name="footer"></slot>
    <div v-if="$slots.attention">
      <slot name="attention"></slot>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$slots); //Здесь хранятся все slots и можно сделать условие с v-if, чтобы не создавались пустые div
  },
};
</script>

<style scoped></style>
