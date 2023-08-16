import { ref } from "vue";

export function useFetch(url: RequestInfo, options?: RequestInit) {
  //Будем делать запрос
  const response = ref(null);

  const request = async () => {
    //Функция делает асихронный запрос с сервера
    const res = await fetch(url, options);
    response.value = await res.json();
  };

  return { response, request }; //Можем получить данные, которые пришли с сервера и сделать запрос
}
