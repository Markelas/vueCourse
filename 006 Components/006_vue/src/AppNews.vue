<template>
  <div>
    <div class="card">
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">
        {{ isNewsOpen ? "Закрыть" : "Открыть" }}
      </button>
      <div v-if="isNewsOpen">
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          repellat recusandae aperiam nihil eaque cumque. Quas provident
          architecto amet suscipit tempore fugiat, autem eius culpa, accusantium
          alias, iure commodi! Fugit.
        </p>
        <button class="btn primary" @click="mark">Прочесть новость</button>
        <!--Связываем кнопку в AppNews с App.vue 1. создаем метод mark, эммитим его $emit 2. При клике вызываем его 3. в App.vue навешиваем при клике на компонент app-news и вызываем новый метод, который будет обновлять счетчик на +1 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["title"],
  props: {
    title: {
      type: String, //Можем еще более тонко настраивать props, можно указать тип и обязательность
      required: true, //Обязательность
    },
    id: {
      type: Number,
      required: true,
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
    "open-news"(num) {
      if (num) {
        return true; //К примеру, можем валидировать, если в метод передается число, то валидация успешна, если нет, то ошибка
      }
      console.warn("Нет числа в методе");
      return false;
    },
    "read-news": null,
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
      this.$emit("read-news");
    },
  },
};
</script>
