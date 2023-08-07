<template>
  <div>
    <div class="form-control" :class="{ invalid: error }">
      <!--Передаётся класс Invalid, если у ошибки статус true-->
      <label :for="id">{{ label }}</label>
      <input
        type="text"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="change"
      />
      <!--можно получить значение через ref или v-model, модификатор trim удаляет пробелы в строке-->
      <small v-if="errors.name"> {{ error }}</small>
      <!--Выводим ошибку, если ничего не написано в поле name-->
    </div>
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    placeholder: String,
    lablel: String,
    error: String,
  },
  methods: {
    change(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
  data() {
    return {
      id: "input-" + Math.random(),
    };
  },
};
</script>

<style scoped></style>
