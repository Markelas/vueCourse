<template>
  <ul class="list">
    <li class="list-item">
      <div>
        <p>
          <strong>{{ email }}</strong>
        </p>
        <small>{{ name }}</small>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["name", "email"],
};
</script>

<style scoped></style>
