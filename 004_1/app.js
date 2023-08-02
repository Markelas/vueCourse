const h = Vue.h

const app = Vue.createApp({
    data() {
        return {
            title: 'Свойство template'
        }
    },
    // template: `
    //     <div class="card center">
    //         <h1>{{ title }}</h1>
    //         <button class="btn" @click="title = 'Поменяли название'">Нажми, чтобы поменять</button>
    //     </div>
    // ` //С помощью template можно выстраивать структуру




    // methods: { 
    //     changeTitle() {
    //         this.title = 'Готово, поменяли'
    //     }
    // },

    // Рассмотрим render

    // render() {                     //Можно рендерить виртуальный DOM, так работает Vue, с виртуальным DOM, 
    //     return h('div', {         // Это тоже самое, что написано в template, за кулисами Vue парсит шаблон, превращая
    //         class: 'card center' // Код в подобный код JS
    //     }, [
    //         h('h1', {}, this.title),
    //         h('button', {
    //             class: 'btn',
    //             onclick: this.changeTitle
    //         }, "Поменять")
    //     ])
    // }


    template: `
        <div class="card center">
            <h1>{{ title }}</h1>
            <button class="btn" @click="title = 'Поменяли название'">Нажми, чтобы поменять</button>
        </div>
    ` 


})


app.mount('#app')


// Рассмотрим пример, как работает Proxy

const data = {
    title: 'Vue 3',
    message: 'Я изучаю: '
}

console.log(data.title) // Здесь будет показываться Vue 3

const proxy = new Proxy(data, {
    get(target, p) {
        console.log('Запрос get, target =', target);
        console.log('Запрос get, p =', p);
    },
    set(target, key, value) {
        console.log('set, target =', target); // Будет объект
        console.log('set, key =', key); // Ключ title 
        console.log('set, value =', value); // Значение Vue 3
        if (key === 'message') {
            target.message = 'Фреймворк: ' + value
        }
        target[key] = value
    }
})
proxy.title = 'Angular 10' // Значение поменялось извне, обратились к proxy, затем уже к title и поменяли значение


//СОЗДАНИЕ ВТОРОГО ПРИЛОЖЕНИЯ

Vue.createApp({
    data() {
        return {
            title: 'New Title from App2'
        }
    }
}).mount('#app2')