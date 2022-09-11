import Vue from 'vue'
import App from './App.vue'
import router from './router'

// vant2
import Vant from 'vant'
// 默认引入 css
// import 'vant/lib/index.css'
// 定制主体使用 less
import 'vant/lib/index.less'

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
