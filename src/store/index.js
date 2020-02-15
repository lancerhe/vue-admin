import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },

  mutations: {
    setAuthorization (state, authorization) {
      state.authorization = authorization
      localStorage.setItem('Authorization', authorization)
    },
    clearAuthorization(state) {
      state.authorization = ''
      localStorage.removeItem('Authorization')
    }
  },

  getters: {
    getAuthorization: (state) => () => {
      return state.authorization
    }
  }
})

export default store
