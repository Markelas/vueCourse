Vue.createApp({
    data() {
        return{
            myHtml: '<h1>Vue 3 App</h1>',
            title: 'Какой-то текст',
            person: {
                firstName: 'Mark',
                lastName: 'G',
                age: '23'
            },
            items: ['apple', 'pineapple', 'orange', 'banan', 'water'],
            numbers: [1, 2, 3, 4, 5, 6]
        }
    },
    methods: {
        addItem() {
            this.numbers.unshift(this.$refs.myInput.value); //Передаем введеный текст в начало массива numbers
            console.log(this.$refs.myInput.value); //В консоль получаем значение из большого input
            this.$refs.myInput.value = ''; //Очищаем input
        }
    },
    computed: {
        evenItems() {
            return this.numbers.filter( i => i % 2 === 0) //Фильтрация по четному числу
        }
    }
}).mount('#app')