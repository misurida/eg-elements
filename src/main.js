import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;

// we import the global components components
import eg from "../index"
Vue.use(eg);


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
