<template>
  <div class="container">
    <app-loading
      v-if="loading"
      :comments="comments"
      @load="loadComments"
    ></app-loading>
    <div v-else>
      <p>
        <button class="btn primary" @click="loadComments">
          Загрузить комментарии
        </button>
      </p>
      <!--Если загрузка идет, показывается кружочек-->
      <div class="card" v-if="comments != 0">
        <h2>Комментарии</h2>
        <!--Если загрузки нет, то отображаются комментарии-->
        <app-comment-list
          v-for="item in comments"
          :key="item"
          :name="item.name"
          :email="item.email"
        ></app-comment-list>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoading from "././AppMiniComponents/AppLoading.vue";
import AppCommentList from "./AppMiniComponents/AppCommentList.vue";
import axios from "axios";
export default {
  data() {
    return {
      comments: [],
      loading: false,
    };
  },
  components: { AppLoading, AppCommentList },
  methods: {
    async loadComments() {
      this.loading = true; //Меняем флаг, на то, что загрузка активна
      try {
        //Пытаемся загрузить данные с сервера
        const { data } = await axios.get(
          //Попробуем сделать запрос с сервера, с помощью библиотеки axios
          "https://jsonplaceholder.typicode.com/comments?_limit=42"
        );
        this.comments = Object.keys(data).map((key) => {
          return {
            id: key,
            ...data[key], //С помощью оператора spread Все ключи развернутся в результирующий объект
          };
        }); //Здесь будут криптографические ключи,
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped></style>
