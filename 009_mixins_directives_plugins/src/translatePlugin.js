export default {
  install(app, options) {
    let current = "ru";

    const changeRuEn = (name) => {
      current = name;
    };

    //Правило плагинов, что должен быть метод install
    app.config.globalProperties.$alert = (text) => {
      window.alert(text);
    };

    app.config.globalProperties.$i18n = (key) => {
      // app.title -> [app, title]
      return key.split(".").reduce((words, k) => {
        return words[k] || "Unknown";
      }, options[current]);
    };
    app.provide("changeI18N", changeRuEn); //Передадим функцию с помощью provide и получим, с inject
  },
};
