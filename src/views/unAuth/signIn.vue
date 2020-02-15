<template>
  <div class="login-box">
    <div class="login-logo">
      Company
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">
        Sign in to start your session
      </p>

      <div id="default-container">
        <form>
          <div class="form-group has-feedback ">
            <input
              v-model="user.username"
              type="email"
              name="email"
              class="form-control"
              value=""
              placeholder="Email"
            >
            <span class="glyphicon glyphicon-envelope form-control-feedback" />
          </div>
          <div class="form-group has-feedback ">
            <input
              v-model="user.password"
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            >
            <span class="glyphicon glyphicon-lock form-control-feedback" />
          </div>
          <div class="row">
            <!--            <div class="col-xs-8">-->
            <!--              <a-->
            <!--                class="text-center"-->
            <!--              >I forgot my password</a>-->
            <!--            </div>-->
            <!-- /.col -->
            <div class="col-xs-4">
              <button
                type="button"
                class="btn btn-primary btn-block btn-flat"
                @click="signIn"
              >
                Sign In
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /.login-box-body -->
</template>

<script>
import { signInApi } from '@/api'
import store from '@/store'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      signInApi(this.user).then(res => {
        store.commit('setAuthorization', res.token)
        this.$router.push({ path: '/' });
      }).catch(e => {
        this.$toasted.error(e.response.data.message)
      })
    }
  }
}
</script>

<style>
    body {
        height: auto;
        background: #d2d6de !important;
    }
</style>
