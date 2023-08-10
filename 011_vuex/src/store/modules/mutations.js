export default {
  //Описываем, какие мутации совершаем, например, чтобы не писать длинную строчку this.$store.state.counter++, можем здесь описать это действие
  increment(state) {
    state.counter++;
  },
  add(state, payload) {
    state.counter += payload.value; //Можем получать какие-либо значения и обращаться к ним, для совершения каких-либо действий
  },
};
