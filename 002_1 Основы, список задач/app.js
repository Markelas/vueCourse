const App = {
    data() {
        return {
            placeholderString: 'Введите заметку',
            title:"Список заметок",
            inputValue: '',
            notes: ['Заметка', 'Вторая заметка']
        }
    },
    methods: {
        addNewNote() {
            if (this.inputValue != "" && this.inputValue != " "){
                this.notes.push(this.inputValue); //Передаем введенный текст в массив notes
                this.inputValue = ''; //Очищаем массив
            }
        },

        toUpperCaseNote(item){
            return item.toUpperCase()
        },

        removeNote(idx){
            this.notes.splice(idx, 1); //Передали из html, переменную idx, которая соответствует индексу заметки, где нажата кнопка
        }
    },
    computed: {
        doubleCountComputed() { //Если бы мы использовали такую же функцию, но через methods, то при введении текста в input, этот метод вызывался после каждой введеной клавиши, это оптимизирует приложение
            return this.notes.length * 2
        },
    },
    watch: { //С помощью watch мы можем следить, изменились ли какие-либо значения или нет 
        inputValue(value) {
            if (value.length > 10){
                this.inputValue = ""
            }
        }
    }
};


Vue.createApp(App).mount('#app')