import Vue from 'vue'
import Router from 'vue-router'
import ButtonsView from './views/ButtonsView'
import InputView from './views/InputView'
import ModalView from './views/ModalView'
import PopoverView from './views/PopoverView'
import Home from './views/Home'

Vue.use(Router);

export default new Router({
    mode: 'hash',
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
            path: '/popover',
            name: 'popover',
            component: PopoverView
        },
        {
            path: '/modal',
            name: 'modal',
            component: ModalView
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
    ]
})
