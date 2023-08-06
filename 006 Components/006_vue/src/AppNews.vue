<template>
  <div>
    <div class="card">
      <h3>{{ title }}</h3>
      <app-button @action="open">
        {{ isNewsOpen ? "Закрыть" : "Открыть" }}
      </app-button>
      <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)"
        >Отметить непрочитанной
      </app-button>
      <div v-if="isNewsOpen">
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          repellat recusandae aperiam nihil eaque cumque. Quas provident
          architecto amet suscipit tempore fugiat, autem eius culpa, accusantium
          alias, iure commodi! Fugit.
        </p>
        <app-button v-if="!wasRead" color="primary" @action="mark">
          <!--Чтобы после прочтения новости, кнопка исчезала, мы передаем id новости в methods-->
          Прочесть новость</app-button
        >
        <!--Связываем кнопку в AppNews с App.vue 1. создаем метод mark, эммитим его $emit 2. При клике вызываем его 3. в App.vue навешиваем при клике на компонент app-news и вызываем новый метод, который будет обновлять счетчик на +1 -->
        <app-news-list :news="news"></app-news-list
        ><!--Этот компонент промежуточный, просто для того, чтобы передавать данные-->
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppNewsList from "./AppNewsList.vue";
export default {
  // props: ["title"],
  props: {
    news: Array,
    wasRead: Boolean,
    title: {
      type: String, //Можем еще более тонко настраивать props, можно указать тип и обязательность
      required: true, //Обязательность
    },
    id: {
      type: Number,
      required: false,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false, //Если isOpen не передаем, то по умолчанию будет false
      validator(value) {
        console.log(value);
        return true;
      },
    },
  },
  // emits: ["open-news"],

  emits: {
    "open-news": null,
    "read-news"(id) {
      if (id) {
        return true;
      }
      console.warn("Нет параметра id для emit read-news");
      return false;
    },
    unmark: null,
    //Если валидатор не нужен, то просто можно указать "open-news": null
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news", 42, 1);
      }
    },
    mark() {
      this.isNewsOpen = false;
      this.$emit("read-news", this.id);
    },
    // unmark() {
    //   this.$emit("unmark", this.id);
    // }, Можно не создавать новую функцию, а просто указать его в событии клик
  },
  components: { AppButton, AppNewsList },
};
</script>
