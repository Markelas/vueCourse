import { ref } from "vue";
import { useFetch } from "./fetch";

export async function useUsers(): Promise<any> {
  const loading = ref(false);
  //Можем один хук использовать внутри другого хука
  const { response: users, request } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!loading.value) {
    await request();
    loading.value = true;
  }

  return { users };
}
