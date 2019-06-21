import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// we import the global components components
import EgButton from './elements/EgButton'
import EgInput from './elements/EgInput'
Vue.component('eg-button', EgButton);
Vue.component('eg-input', EgInput);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
