<template>

  <div class="container col-md-6" style="@media (max-width: 575px)">

    <div>
      <img src="../assets/icon.png" class="iconwelcome">
      <br>
      <h1 class="card-title"> <strong> Bienvenido a Facturatron </strong></h1>
      <p class="card-text"><strong> La primera plataforma </strong>para facutrar todos tus servicios, en un solo lugar.</p>
      <br>
      Para usar la app necesitas
      <br> 
    </div>
          
    <div class="justify-content-around" v-if="!loggedIn">

       
      <router-link to="/login">
      <a class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Acceder</a>
    </router-link>
      o
    <router-link to="/register">
      <a class="btn btn-secondary disabled" tabindex="-1" role="button"> Registrate </a>
    </router-link>
    </div>

    

  </div>
</template>




<script>
import { authComputed } from '../vuex/helpers'
export default {
  computed: {
    ...authComputed
  }
}
</script>
