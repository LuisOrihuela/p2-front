<template>
  <div id="app">
    <form @submit.prevent="submit">
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
       Debug: {{datosFiscales}} {{step}}
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      datosFiscales: {
        name: null,        
        street: null,
        city: null,
        state: null,
        rfc: null,
        persona: null
      }
    }
  },
  methods: {
    prev() {
      this.step--
    },
    next() {
      if (
        this.datosFiscales.persona &&
        this.datosFiscales.name &&
        this.step === 1
      ) {
        this.step++
      }
      if (
        this.datosFiscales.street &&
        this.datosFiscales.city &&
        this.datosFiscales.state &&
        this.step === 2
      ) {
        this.step++
      }
    },
    submit() {
      alert('Datos enviados!')
    }
  }
}
</script>