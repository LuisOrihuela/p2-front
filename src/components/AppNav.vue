<template>
  <div id="app">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Facturatron</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link"  v-if="!loggedIn" to="/login">Entrar<span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/" v-if="loggedIn" type="button" class="nav-link logoutButton" @click="logout">Salir<span class="sr-only">(current)</span></router-link>
      </li>
    </ul>
  </div>
</nav>  
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.logoutButton {
  cursor: pointer;
}
</style>





<script>
import { authComputed } from '../vuex/helpers'
export default {
  computed: {
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

