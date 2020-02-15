import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInComponent from '@/views/unAuth/signIn'
import DashboardComponent from '@/views/dashboard'
import store from '@/store'

Vue.use(VueRouter)

export const signInPath = '/ap/sign-in'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: signInPath,
      name: 'signIn',
      component: SignInComponent,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/',
      name: 'dashboard',
      component: DashboardComponent
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = store.getters.getAuthorization()

  if (to.meta.requireAuth === false) {
    if (token !== '') {
      next('/')
    } else {
      next()
    }
  } else {
    if (token === '') {
      next(signInPath)
    } else {
      next()
    }
  }
})

export default router
