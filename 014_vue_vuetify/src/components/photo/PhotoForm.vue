<template>
  <v-container>
    <v-row class="d-flex">
      <!--Класс d-fkex, обозначает столбец как флексовый-->
      <v-text-field v-model="title"></v-text-field>
      <!--Заголовок фото, текстовый инпут текст-->
      <v-file-input v-model="img"></v-file-input>
      <!--Инпут для файлов-->
      <v-btn @click="addPhoto">Добавить</v-btn>
      <!--Кнопка для добавления-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
    img: null,
  }),
  methods: {
    addPhoto() {
      const reader = new FileReader(); //Читаем файл, с помощью функции
      reader.onload = () => {
        //Будет отрабатывать в тот момент, когда изображение было прочитано
        let photo = {
          id: Date.now(), //Для id исопльзуется текущее время
          title: this.title,
          url: reader.result, //Передаем результат прочтения функции
        };
        this.$emit("addPhoto", photo) //Эмитим и передаем функцию
      };
      reader.readAsDataURL(this.img); //Читаем это изображение
    },
  },
};
</script>
