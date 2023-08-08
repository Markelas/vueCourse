<template>
  <form class="card card-w30" @submit.prevent="submitHandler(value, type, id)">
    <!--Отменяем стандартное поведение перезагрузки-->
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea v-model="value" id="value" rows="3"></textarea>
      <!--Создаём модель введенного значения-->
    </div>
    <button class="btn" :disabled="value.length < 3">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      type: "title",
      id: 0,
      valid: false,
    };
  },
  // props: ["blocks"],
  emits: ["block-added"], //Событие на добавление блоков
  methods: {
    submitHandler() {
      //При нажатии на кнопку эмитим событие добавления блока на страницу резюме
      if (this.validTextArea()) {
        // Если форма прошла валидацию, то будет совершаться действие
        this.$emit("block-added", {
          type: this.type,
          value: this.value,
          id: Math.random(1, 1000),
        });
        this.value = "";
        this.type = "title";
        console.log("submit");
      }
    },
    validTextArea() {
      //Если в textarea написано меньше 3 символов, то форма не валидна
      if (this.value.length < 3) {
        this.valid = false;
      } else {
        this.valid = true;
      }
      return this.valid;
    },
  },
};
</script>

<style scoped></style>
