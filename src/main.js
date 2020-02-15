import Vue from 'vue'
import router from '@/route'
import App from '@/App'

// admin lte
import 'vue2-admin-lte/src/lib/css'
import 'vue2-admin-lte/src/lib/script'

// toast
import Toasted from 'vue-toasted';

Vue.use(Toasted, {duration : 3000})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
