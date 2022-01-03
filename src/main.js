import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'

import router from '@/router'
import { dollarFilter, presentFilter, marketCapFilter } from '../src/filter';

Vue.config.productionTip = false;
Vue.filter('dollar', dollarFilter);
Vue.filter('percent', presentFilter);
Vue.filter('marketCap', marketCapFilter);

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount('#app')
