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
  props: ["type"],
  data() {
    return {
      taskStatus: "Активно",
      class: "primary",
    };
  },
  methods: {
    changeBadgeClass(type) {
      let status =
        type === "Active"
          ? "warning"
          : type === "Canceled"
          ? "danger"
          : "primary";
      console.log("stat", status, "type", type);
      return status;
    },
  },
};
</script>
