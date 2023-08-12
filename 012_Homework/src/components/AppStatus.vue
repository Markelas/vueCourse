<template>
  <span
    class="badge"
    :class="
      type === 'Active' ? 'warning' : type === 'Canceled' ? 'danger' : 'primary'
    "
    >{{ type }}</span
  >
</template>

<script>
export default {
  props: ["type", "st"],
  data() {
    return {};
  },
};
</script>
