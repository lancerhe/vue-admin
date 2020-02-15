<template>
  <div class="wrapper skin-blue sidebar-mini pace-done">
<!-- Main Header -->
    <header class="main-header">
      <!-- Logo -->
      <a href="/" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">C</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">Company</b></span>
      </a>

      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <!-- Notifications: style can be found in dropdown.less -->
            <li class="dropdown notifications-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">1</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">You have 1 notifications</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <a href="/profile/edit">
                        <i class="fa fa-user text-red"></i> You can setup your password.
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="http://cn.gravatar.com/avatar/79f92247e46b21715f6c3c9f2682008b?s=25" class="user-image" alt="User Image">
                <span class="hidden-xs">Lancer He</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="http://cn.gravatar.com/avatar/79f92247e46b21715f6c3c9f2682008b?s=90" class="img-circle" alt="Lancer He">

                  <p>
                    Lancer He
                    <small>Member since 2018-03-13 13:57</small>
                  </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="/profile"
                       class="btn btn-default btn-flat"
                    >Profile</a>
                  </div>
                  <div class="pull-right">
                    <a class="btn btn-default btn-flat" @click="signOut()">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav">
            <li />
          </ul>
        </div>
      </nav>
    </header>

    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <section class="sidebar">
        <div class="user-panel">
          <div class="pull-left image">
            <img src="http://cn.gravatar.com/avatar/79f92247e46b21715f6c3c9f2682008b?s=45" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Lancer He</p>
            <i class="fa fa-circle text-success"/> Online
          </div>
        </div>
        <!-- Sidebar Menu -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="">
            <router-link :to="{ name: 'Home' }">
              <i class="fa fa-fw fa-dashboard "/>
              <span>Home</span>
            </router-link>
          </li>
          <li class="header">ADMIN SYSTEM</li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-fw fa-gears "/>
              <span>Users &amp; Permissions</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"/>
              </span>
            </a>
            <ul class="treeview-menu">
              <li class="">
                <a href="/admin/users"
                >
                  <i class="fa fa-fw fa-users "/>
                  <span>Users</span>
                </a>
              </li>
              <li class="">
                <a href="/admin/roles"
                >
                  <i class="fa fa-fw fa-user "/>
                  <span>Roles</span>
                </a>
              </li>
              <li class="">
                <a href="/admin/permissions"
                >
                  <i class="fa fa-fw fa-street-view "/>
                  <span>Permissions</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <router-view />
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
  </div>
  <!-- ./wrapper -->
</template>

<script>
import store from '@/store'
import {signInPath} from '@/route'

export default {
  methods: {
    signOut() {
      store.commit('clearAuthorization')
      this.$router.push({ name: 'SignIn' });
    }
  }
}
</script>
