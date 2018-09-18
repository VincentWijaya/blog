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
    <router-view/>
  </div>
</template>

<script>
</script>

<style>

</style>
