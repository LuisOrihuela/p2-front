<template>
<div class="conteiner container-fluid">
  
  <div class="row content">

    <div class="col-md-3 sidenav">
      
        <img src="../assets/icon.png" class="icon pad" alt="">
        <br>
        <br>
        <h2 class="card-title">{{ name }}</h2>
        <p class="card-text"><strong> Bienvenido a tu perfil </strong>  </p>
        <br>
        <p>
        <b-button @click="toggleView('facturar')" type="submit" variant="primary">Facturar</b-button >
        </p>
        <p>
        <b-button @click="toggleView('nuevo')">Nuevo registro</b-button >
        </p>
        <p>
        <b-button @click="toggleView('lista')">Lista de facturas</b-button >
        </p>
    </div>

  <div class="col-md-9">

    <div class=" row">
                    
      <!-- lista de facturas -->
      <div v-if="verlista" class="col-md-6 pad">
      
      <h3>Tus facturas</h3>
      <p class="card-text"> Revisa y descarga tus facturas</p>
      <div class="event-card" v-if="!isLoading" v-for="(factura, index) in tickets" :key="index" :factura="factura" @click="borrar(index)">
        <span>{{ factura.fecha }} on ${{ factura.total }}</span>
        <h4>{{ factura.empresa }}</h4>        
      </div>
      <p v-else>Loading tickets</p>
      <!-- <EventCard></EventCard>    -->
      
      </div>
                      
    <!-- componente facturación-->
      <div v-if="verFacturar" class="row col-md-12 pad">
          <div class="col-md-4" >
            <h3>Tus Registros</h3>
            <br>
            <div class="custom-control custom-checkbox">
            <input type="" class="custom-control-input" checked="">
            <label class="custom-control-label" for="">RODA 820531 JWA</label>
            </div>

            <div class="custom-control custom-checkbox">
              <input type="" class="custom-control-input" checked="">
              <label class="custom-control-label" for="">GABE 372398 MD1</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="" class="custom-control-input" checked="">
                <label class="custom-control-label" for="">SADE 232235 R24</label>
            </div>
            <br>
            <br>
            <p><strong><h3>Facturar</h3></strong></p>
            <b-form-group id="input-group-3" label="Gasolinerías:" label-for="input-3">
            <b-form-select id="input-3" :options="gas"> </b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Autoservicios:" label-for="input-3">
            <b-form-select id="input-3" :options="autoserv"></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-3" label="Papelierías:" label-for="input-3">
            <b-form-select id="input-3" :options="depots"></b-form-select>
            </b-form-group>

            <b-button type="submit" variant="primary" to="/capture">Facturar</b-button>
            <b-button type="reset" variant="danger">Limpiar</b-button>

          </div>
          <div class="col-md-6" v-if="!isLoading">
            <h3>Escanea el código QR</h3>
            <p> dando click en el botón</p>
            <button @click="newScan = !newScan">Escanear QR</button>
            <qrcode-stream v-if="newScan" @decode="onDecode" @init="onInit"></qrcode-stream>
            <p> {{ successMessage }} </p>
            <!-- <div v-if="!isLoading">
              <EventCard v-for="event in events" :key="event.id" :event="event" />
            </div> -->
            <!-- <div class="event-card" v-if="!isLoading" v-for="(factura, index) in tickets" :key="index" :factura="factura" @click="borrar(index)">
              <span>{{ factura.fecha }} on ${{ factura.total }}</span>
               <h4>{{ factura.empresa }}</h4>        
            </div>
            <p v-else>Loading tickets</p> -->
          </div>
      </div>
    </div>
    <!-- componente nuevos registros -->
    <div v-if="verAlta">
    <Nuevosrec/>
    </div>
  </div>
    
  </div>

</div>
</template>

<script>
import axios from 'axios'
import EventCard from '../components/EventCard'
import imprimirPDF from '../invoice'
import jsPDF from 'jspdf'
import Nuevosrec from '../components/Nuevosrec'

export default {

  components: { EventCard },
  components: { Nuevosrec },
  data() {
    return {
        
        verFacturar:false,
        verlista:true,
        verAlta: false,
        newScan: false,

        isLoading: true,
        events: [],
        decodedContent: {},
        errorMessage: '',
        successMessage: '',

        gas: [{ text: 'Seleccione uno', value: null }, 'Gass 500', 'Bp gass', 'Hidrosina', 'Pemex'],
        show: true,
        autoserv: [{ text: 'Seleccione uno', value: null }, 'Soriana', 'Wallmart', 'Aurrera', 'Superama'],
        show: true,
        depots: [{ text: 'Seleccione uno', value: null }, 'Dabo', 'Office depot', 'Office Max', 'Lumen'],
        show: true,
        regimenes: [{ text: 'Seleccione uno', value: null }, 'Persona física', 'Persona Moral'],
        show: true,

        name: '',
        tickets: [],
        datosFiscales: {},
        userId: ''
        
    }
  },
  created() {      
      const userString = JSON.parse(localStorage.getItem('user'))
      console.log("ID:", userString.id)
      this.userId = userString.id
      axios.get('//localhost:3000/dashboard/'+userString.id).then(({ data }) => {
      // this.events = data.events
      console.log(data);
      this.name = data[0].name;
      this.tickets = data[0].tickets;
      this.datosFiscales = data[0].datosFiscales;      
      this.isLoading = false      
    })
  },
  methods: {
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
      },
    borrar(index) {
      console.log("Imprimir")
      imprimirPDF(this.tickets[index], this.datosFiscales) 
      this.tickets.splice(index,1);
       
    },
    onDecode(content) {
      // this.decodedContent = JSON.parse(`{${content}}`)
      this.decodedContent = content;
      this.successMessage = 'Factura generada! Agradecemos su preferencia.'
      console.log(this.decodedContent)
      axios.get('//localhost:3000/tickets/'+this.decodedContent)
        .then((ticket, err)=>{
          if(err){
            console.log(err)
          }else{
            const newTicket = ticket.data[0]
            this.tickets.push(ticket.data[0])
            console.log(ticket.data[0]) 
            axios.put('//localhost:3000/agregar-factura/'+this.userId, newTicket)
            this.newScan = !this.newScan;
            this.toggleView('lista')           
          }          
        })   
        .catch(err=>console.log(err))
      // imprimirPDF(this.decodedContent)      
    },
    onInit(promise) {
      promise
        .then(() => {
          console.log('Successfully initilized! Ready for scanning now!')
        })
        .catch(error => {
          if (error.name === 'NotAllowedError') {
            this.errorMessage = 'Hey! I need access to your camera'
          } else if (error.name === 'NotFoundError') {
            this.errorMessage = 'Do you even have a camera on your device?'
          } else if (error.name === 'NotSupportedError') {
            this.errorMessage =
              'Seems like this page is served in non-secure context (HTTPS, localhost or file://)'
          } else if (error.name === 'NotReadableError') {
            this.errorMessage =
              "Couldn't access your camera. Is it already in use?"
          } else if (error.name === 'OverconstrainedError') {
            this.errorMessage =
              "Constraints don't match any installed camera. Did you asked for the front camera although there is none?"
          } else {
            this.errorMessage = 'UNKNOWN ERROR: ' + error.message
          }
        })
    }  
  }
}
</script>
<style scoped>
.event-card {
  width: 13em;
  margin: 1em auto 1em auto;
  padding: 1em;
  border: solid 1px #2c3e50;
  cursor: pointer;
  transition: all 0.2s linear;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card h4 {
  font-size: 1.4em;
  margin-top: 0.5em;
  margin-bottom: 0.3em;
}
  
</style>