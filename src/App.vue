<template>
  <div id="app">
    <app-nav />
    <router-view />
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  components: { AppNav }
}
</script>

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
/* my css */

* {
    color: gray;
  }

div.container {
    padding: 30px;
  } 

  div.conteiner.container-fluid{
    padding: 20px;
  }

  .iconwelcome {
    height: 200px;
    width: 200px;
  }

  .icon {
    height: 150px;
    width: 150px;
  }


  .row.content {height: 750px}
    
  .sidenav {
    height: 100%;
  }
    
  @media screen and (max-width: 575px) {
    .sidenav {
      height: auto;
      padding: 15px;
    }
    
    .row.content {height: auto;} 
  }
  .pad {
    padding: 10px;
  }
  

</style>