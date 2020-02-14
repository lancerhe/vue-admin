import Vue from 'vue'
import router from '@/route'
import App from '@/App'

import 'vue2-admin-lte/src/lib/css'
import 'vue2-admin-lte/src/lib/script'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
