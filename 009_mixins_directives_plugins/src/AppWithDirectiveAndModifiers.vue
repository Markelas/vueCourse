<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink.hover="myColor">Директивы</h2>
      <!--Можно динамически менять параметр-->

      <div class="form-control">
        <label for="inp">Активный</label>
        <input v-focus type="text" id="inp" />
      </div>
      <button class="btn" @click="myColor = 'darkblue'">Сделать синим</button>
      <button
        class="btn"
        @click="type = type === 'color' ? 'backgroundColor' : 'color'"
      >
        <!--Меняем тип заливки, что будем менять, цвет текста или цвет фона-->
        Переключить тип
      </button>
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  // directives: {
  //   focus: {
  //     mounted(el) {
  //       el.focus();
  //     },
  //   },
  // }, Можно реализовать в самом компоненте

  data() {
    return {
      myColor: "red",
      type: "color",
      show: true,
    };
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.show = false;
  //   }, 2000);
  // },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  },
};
</script>
