import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInComponent from '@/views/unAuth/SignIn'
import HomeComponent from '@/views/home'
import OverviewComponent from '@/views/home/Overview'
import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/ap/sign-in',
      name: 'SignIn',
      component: SignInComponent,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'ControlPanel',
      component: HomeComponent,
      children: [{
        name: 'Home',
        path: '/home',
        component: OverviewComponent
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = store.getters.getAuthorization()

  if (to.path === '/') {
    next({ name: 'Home' })
  }

  if (to.meta.requiresAuth === false) {
    if (token !== '') {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    if (token === '') {
      next({ name: 'SignIn', query: { redirect: to.fullPath } })
    } else {
      next()
    }
  }
})

export default router
