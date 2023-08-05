<template>
  <div>
    <the-header></the-header>
    <div class="container pt-1">
      <div class="card">
        <h2>Актуальные новости {{ now }}</h2>
        <span
          >Открыто: <strong>{{ openRate }}</strong> | Прочитано:
          <strong>{{ readRate }}</strong></span
        >
      </div>
      <!--
      <app-news title="Это блок новостей"></app-news
      > Помещаем сюда этот компонент, из AppNews.vue и можем исопльзовать много раз и будет везде открываться разные кнопки, а не все сразу при нажатии-->
      <!--<app-news title="Это блок новостей номер 2"></app-news>-->
      <!--Передаем title в AppNews, там он принимает через props, какие данные мы передаём и меняет значение в переменной titl-->
      <app-news
        v-for="item in news"
        :key="item.id"
        v-bind:title="item.title"
        v-bind:id="item.id"
        v-bind:is-open="item.isOpen"
        v-bind:was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
        @unmark="unreadNews"
      ></app-news>
      <!--мы обращаемся к событию, которое создали в AppNews (open-news), с помощью $emit-->
    </div>
  </div>
</template>

<script>
import AppNews from "./AppNews.vue"; //Зарегестрировали локально, так, чтобы App.vue только знал о нем
export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: "Сегодня солнечная погода",
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: "Vue 3 работает",
          id: 2,
          isOpen: false,
          wasRead: false,
        },
      ],
    };
  },
  methods: {
    openNews(data, data2) {
      this.openRate++;
      console.log(data, data2);
    },
    readNews(id) {
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = true;
      console.log(id); //Передаём id новости
      this.readRate++;
    },
    unreadNews(id) {
      const news = this.news.find((news) => news.id === id);
      news.wasRead = false;
      this.readRate--;
    },
  },
  components: {
    "app-news": AppNews,
  },
};
</script>

<style></style>
