<template>
<div>
  <div class="container col-sm-4" style="@media (max-width: 575px)"> 

    <form @submit.prevent="login">
          <img src="../assets/icon.png" class="icon">
      <div class="card-body">
            <h5 class="card-title">Hola, bienvenido a Facturatron</h5>
            <p class="card-text">Por favor ingresa tus datos de usuario o crea una cuenta</p>
            
            <div class="form-group ">
                <label for="email">Ingresa tu correo</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mail" v-model="email" value required>
                <small id="emailHelp" class="form-text text-muted">No compartas tu información a terceros.</small>
            </div>

            <div class="form-group">
                <label for="password">Ingresa tu contraseña</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" value required>
            </div>
          <div class="d-flex justify-content-center">

            
      <button class="btn btn-primary disabled" type="submit" name="button">Entrar</button>
      <p>{{ error }}</p>
      
      <router-link to="/register">
      <a class="btn btn-secondary disabled" tabindex="-1" role="button">Regístrate.</a>
      </router-link>

          </div>

      </div>
    </form>
  </div>
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

