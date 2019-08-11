// 
<!-- //   <div class="container col-sm-4" style="@media (max-width: 575px)">
//     <form @submit.prevent="register">
//       <img src="../assets/icon.png" class="icon">
//         <div class="card-body">
//         <h5 class="card-title">Hola, bien venido a Facturatron</h5>
//         <p class="card-text">Por favor ingresa tus datos para darte de alta</p>
//       </div> -->
//       <!-- primera forma de alta -->
<!-- //       <div v-if="step === 1">
//         <b-form>
//        <b-form-group id="input-group-1" label="Nombre de usuario" label-for="input-2"> -->
<!-- //         <b-form-input id="input-1" v-model="name" required placeholder="Nombre de usuario" name="name"></b-form-input>
//       </b-form-group>
//         <b-form-group id="input-group-1" label="Ingrese su mail" label-for="input-1">
//         <b-form-input id="input-2" v-model="email" type="mail" required placeholder="Mail" name="email"></b-form-input>
//       </b-form-group>
//       <b-form-group id="input-group-1" label="Cree su contraseña" for="password">
//         <b-form-input id="input-3" type="password" v-model="password" required placeholder="Contraseña"></b-form-input>
<!-- //       </b-form-group> -->
<!-- //       </b-form>
//       </div> -->
//       <!-- end primera forma de alta -->
      
//       <!-- segunda forma -->
//       <div v-if="step === 2">
//         <b-form v-if="show">
//           <h2>Datos fiscales</h2>

//           <b-form-group id="input-group-2" label="Seleccione su régimen" label-for="input-3">
//           <b-form-select v-model="datosFiscales.persona" :options="regimenes" name="persona" id="persona" required></b-form-select>
//           </b-form-group>
//           <!-- fisica -->
//           <div v-if="datosFiscales.persona === 'Fisica'">
//             <b-form-group id="input-group-2" label="Nombre" label-for="input-1">
//             <b-form-input id="name" name="name" v-model="datosFiscales.razonSocial" required placeholder="Nombre" ></b-form-input>
//             </b-form-group>
//           </div>
//           <!-- moral -->
//           <div v-if="datosFiscales.persona === 'Moral'">
//             <b-form-group id="input-group-2" label="Razón social" for="razonSocial">
//             <b-form-input type="name" id="razonSocial" name="razonSocial" v-model="datosFiscales.razonSocial" required placeholder="Razón social" ></b-form-input>
//             </b-form-group>
//           </div>
//           <b-form-group id="input-group-2" label="RFC" for="rfc">
//             <b-form-input id="rfc" name="rfc" v-model="datosFiscales.rfc" type="text" required placeholder="RFC" ></b-form-input>
//           </b-form-group>
//         </b-form> -->
<!-- //       </div>
//       <!-- end segunda forma -->
//       <!-- tercera forma -->
//       <div v-if="step === 3">
//         <b-form>
//           <h2>Domicilio</h2>
//        <b-form-group id="input-group-1" label="Calle" for="street">
//         <b-form-input id="street" name="street" v-model="datosFiscales.street" required placeholder="Calle"></b-form-input>
//       </b-form-group>
//         <b-form-group id="input-group-1" label="Ciudad" for="city">
//         <b-form-input id="city" name="city" v-model="datosFiscales.city" required placeholder="Ciudad"></b-form-input>
//       </b-form-group>
//       <b-form-group id="input-group-1" label="Código postal" for="state">
//         <b-form-input id="state" name="state" v-model="datosFiscales.cp" required placeholder="Código postal"></b-form-input>
//       </b-form-group>
//       </b-form>
//       </div> -->
//       <!-- end tercera forma -->
     

<!-- //       <div class="justify-content-around"> 
//         <button class="btn btn-secondary disabled" role="button" v-if="step > 1" @click.prevent="prev()">Atras</button>
//         <button class="btn btn-primary  disabled" role="button" id="next" v-if="step !==3" @click.prevent="next()">Siguiente</button>
//         <button class="btn btn-success disabled" v-if="step === 3" type="submit">Enviar</button>
//       </div>
//       <div>
//         <br>
//           <router-link to="/login">¿Ya tienes una cuenta? Acceder</router-link>
//       </div>
//     </form> -->
    
    
<!-- //   </div>
// </template> -->


// <script>
// export default {
//   data() {
//     return {
//       disableButton: true,
//       name: '',
//       email: '',
//       password: '',
//       step: 1,
//       datosFiscales: {
//         persona: null,
//         razonSocial: null,        
//         street: null,
//         cp: null,
//         city: null,
//         state: null,
//         rfc: null,        
//       },
//       regimenes: [{ text: 'Seleccione uno', value: null }, 'Fisica', 'Moral'],
//         show: true
      
//     }
//   },
//   computed: {
//     isDisabled(){
//       return !false;
//     }
//   },
//   methods: {
//     // Sends all the users datosFiscales info to the
//     register() {
//       alert('Datos enviados!')
//       this.$store
//         .dispatch('register', {
//           name: this.name,
//           email: this.email,
//           password: this.password,
//           datosFiscales: this.datosFiscales
//         })
//         .then(() => {
//           this.$router.push({ name: 'dashboard' })
//         })
//     },
//     prev() {
//       this.step--
//     },
//     next() {
//       if(this.name &&
//         this.email &&
//         this.password &&
//         this.step === 1){
//           this.step++
//       }
//       if (
//         this.datosFiscales.persona &&
//         this.datosFiscales.razonSocial &&
//         this.datosFiscales.rfc &&
//         this.step === 2
//       ) {
//         this.step++
//       }
//       if (
//         this.datosFiscales.street &&
//         this.datosFiscales.city &&
//         this.datosFiscales.state &&
//         this.step === 3
//       ) {
//         this.step++
//       }
//     }
//   }
// }

// </script>