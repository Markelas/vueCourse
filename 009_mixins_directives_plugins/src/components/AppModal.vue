<template>
  <div class="modal-backdrop" @click="$emit('close')"></div>
  <!--При клике эмитим событие клик и передаем в app.vue-->
  <div class="modal">
    <h3>Заголовок модального окна</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel enim
      voluptate odit, dolor provident aspernatur placeat tenetur velit eligendi,
      corporis cupiditate reprehenderit culpa, praesentium quod obcaecati minima
      inventore molestias.
    </p>
  </div>
</template>

<script>
export default {
  emits: ["close"],
};
</script>

<style scoped></style>
