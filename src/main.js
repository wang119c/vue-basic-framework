import Vue from 'vue'

// 初始化样式
import 'normalize.css/normalize.css'
// 加载全局样式
import '@/assets/css/index.scss'

import App from './App.vue'
import router from './router'
import store from './store'

// 加载ui组件
import './plugins/element.js'

// 加载错误上报日志
import './utils/errors-log'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
