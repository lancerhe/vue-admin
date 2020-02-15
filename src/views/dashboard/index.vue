<template>
  <div>
    <p>dashboard page</p>
    <a @click="signOut">Sign Out</a>
  </div>
</template>

<script>
import store from '@/store'
import {signInPath} from '@/route'

export default {
  methods: {
    signOut() {
      store.commit('clearAuthorization')
      this.$router.push({ path: signInPath });
    }
  }
}
</script>
