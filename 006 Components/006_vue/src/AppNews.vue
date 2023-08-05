<template>
  <div>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">
        {{ isNewsOpen ? "Закрыть" : "Открыть" }}
      </button>
      <button class="btn danger" v-if="wasRead" @click="unmark">
        Отметить непрочитанной
      </button>
      <div v-if="isNewsOpen">
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          repellat recusandae aperiam nihil eaque cumque. Quas provident
          architecto amet suscipit tempore fugiat, autem eius culpa, accusantium
          alias, iure commodi! Fugit.
        </p>
        <button v-if="!wasRead" class="btn primary" @click="mark">
          <!--Чтобы после прочтения новости, кнопка исчезала, мы передаем id новости в methods-->
          Прочесть новость
        </button>
        <!--Связываем кнопку в AppNews с App.vue 1. создаем метод mark, эммитим его $emit 2. При клике вызываем его 3. в App.vue навешиваем при клике на компонент app-news и вызываем новый метод, который будет обновлять счетчик на +1 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["title"],
  props: {
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
    unmark() {
      this.$emit("unmark", this.id);
    },
  },
};
</script>
