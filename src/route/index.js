import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInComponent from '@/views/unAuth/signIn'
import DashboardComponent from '@/views/dashboard'
import store from '@/store'

Vue.use(VueRouter)

const signInPath = '/ap/sign-in'
const router = new VueRouter({
  routes: [
    {
      path: signInPath,
      name: 'signIn',
      component: SignInComponent
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === signInPath) {
    next()
  } else {

    let token = store.getters.getAuthorization()
    if (token === 'null' || token === '') {
      next(signInPath)
    } else {
      next()
    }
  }
})

export default router
