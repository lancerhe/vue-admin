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
        <form
          action="/login"
          method="post"
        >
          <div class="form-group has-feedback ">
            <input
              v-model="form.username"
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
              v-model="form.password"
              type="password"
              name="password"
              class="form-control"
              placeholder="Password"
            >
            <span class="glyphicon glyphicon-lock form-control-feedback" />
          </div>
          <div class="row">
            <div class="col-xs-8">
              <a
                href="/password/reset"
                class="text-center"
              >I forgot my password</a>
            </div>
            <!-- /.col -->
            <div class="col-xs-4">
              <button
                type="submit"
                class="btn btn-primary btn-block btn-flat"
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
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('submit!')
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
