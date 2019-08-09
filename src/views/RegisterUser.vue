    <template>
  <div>
    <form @submit.prevent="register">
      <div v-if="step === 1">
        <h1>Crear usuario:</h1>
        <label for="name">Nombre:</label>
        <input v-model="name" type="text" name="name" value required />

        <label for="email">Email:</label>
        <input v-model="email" type="email" name="email" value required />

        <label for="password">Contraseña:</label>
        <input v-model="password" type="password" name value required />
      </div>

      <div v-if="step === 2">
        <div>
          <h1>Datos fiscales</h1>
          <legend for="persona">Tipo de persona:</legend>
          <select v-model="datosFiscales.persona" name="persona" id="persona">
            <option value="Fisica">Fisica</option>
            <option value="Moral">Moral</option>
          </select>
        </div>
        <div v-if="datosFiscales.persona === 'Fisica'">
          <label for="name">Nombre:</label>
          <input id="name" name="name" v-model="datosFiscales.razonSocial" required />
        </div>

        <div v-if="datosFiscales.persona === 'Moral'">
          <label for="razonSocial">Razon Social:</label>
          <input type="name" id="razonSocial" name="razonSocial" v-model="datosFiscales.razonSocial" />
        </div>
        <label for="rfc">RFC:</label>
        <input id="rfc" name="rfc" v-model="datosFiscales.rfc" type="text" required/> 
      </div>

      <div v-if="step === 3">
        <div>
          <label for="street">Direccion:</label>
          <input id="street" name="street" v-model="datosFiscales.street" required/>
        </div>

        <div>
          <label for="city">Ciudad:</label>
          <input id="city" name="city" v-model="datosFiscales.city" />
        </div>

        <div>
          <label for="state">Estado:</label>
          <input id="state" name="state" v-model="datosFiscales.state" required/>
        </div>

        <div>
          <label for="state">Codigo Postal:</label>
          <input id="state" name="state" v-model="datosFiscales.cp" required/>
        </div>


      </div>

      <button v-if="step > 1" @click.prevent="prev()">Atras</button>
      <button id="next" v-if="step !==3" @click.prevent="next()">Siguiente</button>
      <button v-if="step === 3" type="submit">Enviar</button>
      <router-link to="/login">¿Ya tienes una cuenta? Acceder</router-link>
    </form>
    Debug: {{datosFiscales}} {{step}}
  </div>
</template>
    <script>
export default {
  data() {
    return {
      disableButton: true,
      name: '',
      email: '',
      password: '',
      step: 1,
      datosFiscales: {
        persona: null,
        razonSocial: null,        
        street: null,
        cp: null,
        city: null,
        state: null,
        rfc: null,        
      }
    }
  },
  computed: {
    isDisabled(){
      return !false;
    }
  },
  methods: {
    // Sends all the users datosFiscales info to the
    register() {
      alert('Datos enviados!')
      this.$store
        .dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password,
          datosFiscales: this.datosFiscales
        })
        .then(() => {
          this.$router.push({ name: 'dashboard' })
        })
    },
    prev() {
      this.step--
    },
    next() {
      if(this.name &&
        this.email &&
        this.password &&
        this.step === 1){
          this.step++
      }
      if (
        this.datosFiscales.persona &&
        this.datosFiscales.razonSocial &&
        this.datosFiscales.rfc &&
        this.step === 2
      ) {
        this.step++
      }
      if (
        this.datosFiscales.street &&
        this.datosFiscales.city &&
        this.datosFiscales.state &&
        this.step === 3
      ) {
        this.step++
      }
    }
  }
}

</script>
    