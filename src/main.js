import Vue from 'vue'
import router from '@/route'
import App from '@/App'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
