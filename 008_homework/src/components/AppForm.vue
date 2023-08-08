<template>
  <form class="card card-w30" @submit.prevent="submitHandler">
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

    <button class="btn primary">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      type: "title",
      id: 0,
    };
  },
  methods: {
    submitHandler() {
      //При нажатии на кнопку эмитим событие добавления блока на страницу резюме
      this.$emit("block-added", {
        type: this.type,
        value: this.value,
        id: Math.random(1, 1000),
      });
      console.log(this.id);
      this.value = "";
      this.type = "title";
    },
  },
};
</script>

<style scoped></style>
