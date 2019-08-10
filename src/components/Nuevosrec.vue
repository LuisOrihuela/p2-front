<template>
    <div class="row">
        <div class="col-sm-4 text-center">
              <div class="card-body">
                  <h5 class="card-title">Nuevos registros</h5>
                  <p class="card-text">Ingresa los datos para dar de alta un nuevo registros y poder facturar con el.</p>
              </div>
            </div>
            <div class="col-sm-4 text-center">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" >
                <b-form-group
                  id="input-group-1"
                  label="Ingrese su RFC"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.rfc"
                    type="rfc"
                    required
                    placeholder="Ingrese su RFC con homoclave"
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Nombre completo/Razón social" label-for="input-2">
                
                <b-form-input
                    id="input-2"
                    v-model="form.razonsocial"
                    required
                    placeholder="Nombre/Razón"
                  ></b-form-input>
                </b-form-group>
              </b-form>

            <b-form-group id="input-group-2" label="Calle" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.calle"
              required
              placeholder="Introdusca Calle"
            ></b-form-input>
            </b-form-group>
        
            <b-form-group id="input-group-2" label="Colonia" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.col"
                  required
                  placeholder="Introdusca su colonia"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Número interior" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.noInt"
                  required
                  placeholder="Numero interior"
                ></b-form-input>
            </b-form-group>

            </div>

            <div class="col-sm-4 text-center">
              
            <b-form-group id="input-group-2" label="Número exterior" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.numext"
                  required
                  placeholder="Numero exterior"
                ></b-form-input>
            </b-form-group>
              <b-form-group id="input-group-2" label="Código postal" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.cp"
                  required
                  placeholder="Codigo postal"
                ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Estado" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.state"
                      required
                      placeholder="Estado"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Teléfono" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.tel"
                      required
                      placeholder="Telefono con lada"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Seleccione su régimen" label-for="input-3">
                    <b-form-select
                      id="input-3"
                      v-model="form.regimen"
                      :options="regimenes"
                      required
                    ></b-form-select>
                  </b-form-group>
              <div class="justify-content-around">
                <router-link to="">
                  <b-button type="submit" variant="primary">Guardar</b-button >
                    </router-link>  
                  <b-button type="reset" variant="danger">Limpiar campos</b-button>
              </div>
                  
            </div>
    </div>
</template>


<script>



  export default {

    name: 'Nuevosrec',
    props: {
    event: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
    data() {
      return {
        facturas: [
          
        ],
        verFacturar:false,
        verlista:true,
        verAlta: false,
        form: {
           
          gas: null, 
          autoserv: null,
          depots: null,
        },
        gas: [{ text: 'Seleccione uno', value: null }, 'Gass 500', 'Bp gass', 'Hidrosina', 'Pemex'],
        show: true,
        autoserv: [{ text: 'Seleccione uno', value: null }, 'Soriana', 'Wallmart', 'Aurrera', 'Superama'],
        show: true,
        depots: [{ text: 'Seleccione uno', value: null }, 'Dabo', 'Office depot', 'Office Max', 'Lumen'],
        show: true,
        regimenes: [{ text: 'Seleccione uno', value: null }, 'Persona física', 'Persona Moral'],
        show: true,

      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.gas = null
        this.form.autoserv = null
        this.form.depots
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }, 
      toggleView (button) {
        if(button === 'facturar'){
          this.verFacturar = true
          this.verlista    = false
          this.verAlta     = false
        }else if(button === 'nuevo'){
          this.verAlta     = true
          this.verFacturar = false
          this.verlista    = false
        }else if(button === 'lista'){
          this.verlista    = true
          this.verAlta     = false
          this.verFacturar = false
          
        }
      }
    }
  }
</script>