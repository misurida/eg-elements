import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;

// we import the global components components
import EgButton from './elements/button/EgButton'
import EgInput from './elements/input/EgInput'
import Popover from './elements/popover/Popover'
import SvgIcon from './elements/toolbox/SvgIcon'
import Sidemenu from './elements/sidemenu/Sidemenu'
import Modal from './elements/modal/Modal'
Vue.component('eg-btn', EgButton);
Vue.component('eg-input', EgInput);
Vue.component('eg-icon', SvgIcon);
Vue.component('popover', Popover);
Vue.component('modal', Modal);
Vue.component('sidemenu', Sidemenu);

// v-tooltip
import tooltip from './elements/tooltip/tooltip'
Vue.directive('tooltip', tooltip);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
