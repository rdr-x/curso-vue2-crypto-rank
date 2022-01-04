import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import Chartick from 'vue-chartkick'
import Chart from 'chart.js'
import { VueSpinners } from '@saeris/vue-spinners'

import router from '@/router'
import { dollarFilter, presentFilter, marketCapFilter } from '../src/filter'

Vue.use(VueSpinners)
Vue.use(Chartick.use(Chart))
Vue.config.productionTip = false
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', presentFilter)
Vue.filter('marketCap', marketCapFilter)

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
