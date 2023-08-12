<template>
  <span class="badge" :class="this.taskStatus">{{
    this.$store.state.activeTask.taskStatus
  }}</span>
</template>

<script>
export default {
  data() {
    return {
      taskStatus: "Активно",
    };
  },
};
</script>
