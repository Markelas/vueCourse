<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input
          type="text"
          id="name"
          placeholder="Введи имя"
          v-model.trim="name"
          ref="nameInput"
        />
        <!-- можно получить значение через ref или v-model, модификатор trim удаляет пробелы в строке -->
        <small v-if="errors.name"> {{ errors.name }}</small>
        <!-- Выводим ошибку, если ничего не написано в поле name -->
      </div>
      <!-- <app-input
        placeholder="Введите имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model:modelValue="name"
      ></app-input> -->

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          max="70"
          v-model.number="age"
        /><!--v-model.number превращает строку в число-->
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" v-model="relocate" name="trip" value="no" />
            Нет</label
          >
          <!--Правило радиобаттонов, что у них должен быть одинаковый атрибут name, чтобы добавить их в одну группу и чтобы нельзя было выбрать сразу две кнопки-->
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="vuex"
            />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="vueCLI"
            />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              v-model="skills"
              name="skills"
              value="vueRouter"
            />
            Vue Router</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Соглашение с правилами компании</span>
        <div class="checkbox">
          <label
            ><input type="checkbox" v-model="agree" /> Согласен на обработку
            данных, с правилами согласен</label
          ><!--Создан новый чекбокс без группы, он единичный, передаем значение true или false-->
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
//import AppInput from "./AppInput.vue";
export default {
  data() {
    return {
      name: "", //Создаём модель, которая будет изменяться, благодаря событию
      age: 23, //Дефолтное значение
      city: "nsk", //Значение по умолчанию
      relocate: null, //Вначале выбираем null, а затем будет передаваться значение yes или no
      skills: [], //Мы создаём массив с выбранными значениями
      agree: null, //Передаем true или false значение, например, согласен ли пользователь с правилами
      errors: {
        name: null,
      },
    };
  },
  // components: { AppInput },
  methods: {
    // submitHandler(event) {
    //   event.preventDefault(); //Чтобы отменить стандартное поведение браузера с обновлением страницы, использьуем preventDefault и навешиваем на событие отправки
    //   console.log("submit"); Но во vue есть модификатор событий и необязательно писать новый метод
    // },
    fromIsValid() {
      //Создаём валидацию, если в поле name ничего не написали, форма не отправляется
      let isValid = true; //По умолчанию ошибок нет

      if (this.name.length === 0) {
        this.errors.name = "Введите ваше имя в поле"; //Пишем ошибку, что в поле ничего нет
        isValid = false; //Меняем значение переменной
      } else {
        this.errors.name = null; //Переключаем переменную с ошибкой, если все корректно
      }
      return isValid;
    },
    submitHandler() {
      if (this.fromIsValid()) {
        //Если метод вернет нам true, то отображаем
        console.group("Form Data");
        console.log("Name", this.name); //Получим благодаря v-model значение введенное в input
        console.log("Name ref", this.$refs.nameInput.value); //Можно получить тоже самое, с помощью ref, $refs.nameInput - ссылка на input и value - это значение
        console.log("Age", this.age);
        console.log("City", this.city);
        console.log("Relocate to Tokyo", this.relocate);
        console.log("Skills", this.skills);
        console.log("Agree", this.agree);
        console.groupEnd();
      }
    },
  },
};
</script>

<style>
.form-control small {
  color: red;
}
.form-control.invalid input {
  border-color: red;
}
</style>
