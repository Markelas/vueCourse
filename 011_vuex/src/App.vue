<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <!-- <h2>{{ $store.state.counter }}</h2> Можем обращаться напрямую к state, а можно через getters, изменяя там какие-либо данные и выводить в шаблоне, сам state не изменен -->
      <h2>
        {{ counter }}
        (двойное значение {{ doubleCounter }})
        <!--Чтобы не вызывать несколько раз $store.getters, можем разложить все getters с помощью ...mapGetters, который вызывает объект-->
      </h2>
      <button class="btn primary" @click="add">Добавить</button>
      <button
        class="btn primary"
        @click="
          incrementAsync({
            value: 10, //Можем передавать значения, которые будем использовать в store, функции action
            delay: 150,
          })
        "
      >
        Добавить 10
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import TheNavbar from "./TheNavbar";
export default {
  components: { TheNavbar },
  computed: {
    ...mapGetters(["counter", "doubleCounter"]), //Передаем здесь объект с getters, из  store.js, затем можем обращаться к методам
  },

  // data() {
  //   return {
  //     counter: 0,
  //   };
  // },
  methods: {
    ...mapMutations({
      add: "increment",
    }),
    // increment() {
    //   // this.$store.commit("increment");
    //   // this.increment(); //Там способом, меньше кода
    // },
    ...mapActions(["incrementAsync"]), //Можем уменьшить и оптимизировать код, используя такой способ
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync", {
    //     value: 10, //Можем передавать значения, которые будем использовать в store, функции action
    //     delay: 150,
    //   });
    // },
  },
};
</script>
