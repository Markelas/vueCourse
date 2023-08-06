<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-button :color="oneColor" @action="active = 'one'">One</app-button>
      <!--Присваиваем при клике другое значение в active-->
      <app-button ref="myBtn" :color="twoColor" @action="active = 'two'"
        >Two</app-button
      >
    </div>

    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppTextOne from "./AppText.vue";
import AppTextTwo from "./AppTextTwo.vue";
export default {
  data() {
    return {
      active: "one",
    };
  },
  mounted() {
    setTimeout(() => {
      this.componentName = "new comp name";
    }, 1500);
    console.log(this.$refs.myBtn);
  },
  components: { AppButton, AppTextOne, AppTextTwo },
  methods: {},
  computed: {
    // componentName() {
    //   if (this.active === "one") {
    //     return "app-text-vue";
    //   } else {
    //     return "pp-text-two-vue";
    //   }
    componentName: {
      get() {
        return "app-text-" + this.active;
      },
      set(value) {
        console.log("componentName", value);
      },
    },
    oneColor() {
      return this.active === "one" ? "primary" : "";
    },
    twoColor() {
      return this.active === "two" ? "primary" : "";
    },
  },
};
</script>

<style scoped></style>
