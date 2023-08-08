<template>
  <div class="avatar">
    <img :src="this.avatarUrl" />
  </div>
</template>

<script>
export default {
  props: {
    valueBlock: String,
  },
  data() {
    return {
      avatarUrl: this.valueBlock,
    };
  },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
