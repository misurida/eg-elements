import Vue from 'vue'
import Router from 'vue-router'
import ButtonsView from './views/ButtonsView'
import TextInputView from './views/TextInputView'
import SelectView from './views/SelectView'
import CheckboxesView from './views/CheckboxesView'
import NumberInputView from './views/NumberInputView'
import ModalView from './views/ModalView'
import PopoverView from './views/PopoverView'
import HomeView from './views/HomeView'
import IconsView from './views/IconsView'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [{
        path: '/inputs/text',
        name: 'text',
        component: TextInputView
    },{
        path: '/inputs/select',
        name: 'select',
        component: SelectView
    },{
        path: '/inputs/checkbox',
        name: 'checkbox',
        component: CheckboxesView
    },{
        path: '/inputs/number',
        name: 'number',
        component: NumberInputView
    },{
        path: '/icons',
        name: 'icons',
        component: IconsView
    },{
        path: '/buttons',
        name: 'buttons',
        component: ButtonsView
    },{
        path: '/popover',
        name: 'popover',
        component: PopoverView
    },{
        path: '/modal',
        name: 'modal',
        component: ModalView
    },{
        path: '/',
        name: 'home',
        component: HomeView
    }]
})
