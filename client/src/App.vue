<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container flex-grow-1">
          <a class="navbar-brand" href="http://localhost:8080">Blog</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">

              <li class="nav-item">
              <a class="nav-link" id="logout" v-on:click="logout" v-if="token">Logout</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#loginModal" v-if="!token">Login</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#registerModal" v-if="!token">Register</a>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <!-- Modal Login -->
      <div class="modal fade" id="loginModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title"><i class="fas fa-user"></i> Login</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">

              <div class="container">
                <form>
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="emailLogin" required>
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" v-model="passwordLogin" required>
                  </div>
                </form>

              </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="login">Login</button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>

      <!-- Modal Register -->
      <div class="modal fade" id="registerModal">
        <div class="modal-dialog">
          <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title"><i class="fas fa-user"></i> Register</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">

              <div class="container">
                <form>
                  <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="name" class="form-control" v-model="registerData.name" required autocomplete="off">
                  </div>
                  <div class="form-group">
                    <label for="email">Email address:</label>
                    <input type="email" class="form-control" v-model="registerData.email" required>
                  </div>
                  <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" v-model="registerData.password" @keyup.enter="register" required>
                  </div>

                </form>
              </div>

              <!-- Modal footer -->
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" v-on:click="register" data-dismiss="modal">Register</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      token: '',
      registerData: {
        name: '',
        email: '',
        password: ''
      },
      emailLogin: '',
      passwordLogin: ''
    }
  },
  methods: {
    login () {
      // let self = this
      // 
      // axios({
      //   method: 'post',
      //   data: {
      //     email: this.emailLogin,
      //     password: this.passwordLogin
      //   }
      // })
    },
    register () {
      console.log('Masuk register')
    }
  }
}

</script>
