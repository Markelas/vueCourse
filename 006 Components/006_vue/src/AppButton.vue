<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <!--Создаём новый компонент, который будет отвечать за кнопки, в зависимости от назначения, будет применяться один из массива классов, эмитим новое событие action -->
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    color: {
      type: String,
      default: "",
      validator(value) {
        return ["", "primary", "danger"].includes(value);
      },
    },
  },
};
</script>
