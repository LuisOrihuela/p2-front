<template>
  <div class="home">
    <h1>Bienvenido a facturatron</h1>
    <div v-if="!loggedIn">
      Para usar la app necesitas
      <router-link to="/login">Acceder</router-link>
      o
      <router-link to="/register">Registrate</router-link>
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
