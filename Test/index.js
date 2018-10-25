var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
app.message = 'Hello Vue and JS';

var app2 = new Vue({
    el: '#app-2',
    data: {
        message2: '页面加载于' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript'},
            { text: 'Learn Vue'},
            { text: 'Build something awesome'}
        ]
    }
});

app4.todos.push({ text: 'New item'});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message5: 'Hello Vue.js'
    },
    methods: {
        reverseMessage: function () {
            this.message5 = this.message5.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message6: 'Hello Vue!'
    }
});

Vue.component('todo-item',{
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜'},
            { id: 1, text: '奶酪'},
            { id: 2, text: '随便其他什么人吃的东西'}
        ]
    }
});
