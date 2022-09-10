import Vue from 'vue'
import App from './App.vue'
import router from './router'

// vant2
import Vant from 'vant'
import 'vant/lib/index.css'

// axios
import axios from '@/util/axios.js'

Vue.use(Vant)
// user axios --> this.$http
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
