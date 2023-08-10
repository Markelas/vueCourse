<template>
  <header class="navbar">
    <strong>Счетчик {{ counter }}</strong>

    <button class="btn" @click="addFive">Добавить 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    // counter() {
    //   //return this.$store.state.counter; //Также можем вернуть значение и использовать просто counter
    //   return this.$store.getters.counter;
    // },
    ...mapGetters(["counter"]), //Та же самая строка, что и выше с state или getters
  },
  methods: {
    // add() {
    //   this.$store.commit("add", { //Можно, передавать значения, объекты из компонента в store.js, чтобы там сделать какие-либо действия с ними
    //     value: 5,
    //   });
    // },
    ...mapMutations(["add"]),
    addFive() {
      this.add({ value: 5 });
      // this.$store.commit({
      //   type: "add", //Название мутации
      //   value: 5, //Значение, которое пойдет в payload
      // });
    },
  },
};
</script>
