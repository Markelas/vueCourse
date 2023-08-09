let interval;
let defaultColor;
const mouseover = (event) => {
  event.target.style.color = "green";
};

const mouseout = (event) => {
  event.target.style.color = defaultColor;
};

export default {
  // mounted(el, binding) {
  //   console.log(el); //Будет показан элемент, на котором мы хотим сделать изменения <h2 style="color: red;">Директивы</h2>
  //   console.log(binding); //Будет показан объект, со значениями, value: 'red'

  //   el.style.color = binding.value; //Меняем цвет элемента, на который мы навесили директиву
  // }, //Если понадобится поменять значения, ничего не изменится, так как выполняется один раз

  // //Для этого есть хук updated()
  // updated(el, binding) {
  //   console.log(el); //Также отобразится <h2 style="color: red;">Директивы</h2>
  //   console.log(binding); //Но здесь будет уже другое значение, value: 'darkblue' и будет показано старое значение oldValue: 'red'

  //   el.style.color = binding.value;
  // },

  mounted(el, binding) {
    console.log(el); //Будет показан элемент, на котором мы хотим сделать изменения <h2 style="color: red;">Директивы</h2>
    console.log(binding); //Будет показан объект, со значениями, value: 'red'

    defaultColor = binding.value;

    el.style[binding.arg] = binding.value; //Меняем цвет элемента, на который мы навесили директиву

    if (binding.modifiers.blink) {
      let flag = true;
      interval = setInterval(() => {
        el.style.color = flag ? "#fff" : binding.value;
        flag = !flag;
      }, 1000);
    }
    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", mouseover);
      el.addEventListener("mouseout", mouseout);
    }
  }, //Если понадобится поменять значения, ничего не изменится, так как выполняется один раз

  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },

  unmounted(el) {
    console.log("unmounted");
    if (interval) {
      clearInterval(interval);
    }
    el.removeEventListener("mouseover", mouseover);
    el.removeEventListener("mouseout", mouseout);
  },
};
