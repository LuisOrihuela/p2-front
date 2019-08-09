<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input v-model="email" type="email" name="email" value required/>

      <label for="password" >Contraseña:</label>
      <input v-model="password" type="password" name="password" value required/>

      <button type="submit" name="button">Entrar</button>
      <p>{{ error }}</p>
      <router-link to="/register">
        ¿No tienes cuenta? Regístrate.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    login () {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(()=>{
          this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>