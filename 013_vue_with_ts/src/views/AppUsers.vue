<template>
  <div class="card">
    <h1>Пользователи</h1>

    <Suspence>
      <!--Передаём компонент для рендеринга тогда, когда он будет готов-->
      <template #default>
        <user-list></user-list>
      </template>
      <template #fallback>
        <p>loading...</p>
      </template>
    </Suspence>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/UserList.vue";

export default defineComponent({
  components: { UserList },
  setup() {
    return {};
  },
});
</script>
