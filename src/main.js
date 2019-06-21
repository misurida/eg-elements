import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// we import the global components components
import EgButton from './eg_elements/src/EgButton'
import EgInput from './eg_elements/src/EgInput'
Vue.component('eg-button', EgButton);
Vue.component('eg-input', EgInput);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
