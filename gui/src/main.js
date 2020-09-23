import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCalendar from 'v-calendar'
import VModal from 'vue-js-modal'

Vue.use(VCalendar)
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
