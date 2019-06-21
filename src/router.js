import Vue from 'vue'
import Router from 'vue-router'
import ButtonsView from './views/ButtonsView.vue'
import InputView from './views/InputView.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/inputs',
            name: 'inputs',
            component: InputView
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: ButtonsView
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})
