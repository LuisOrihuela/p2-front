import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import VueQrcodeReader from 'vue-qrcode-reader'

Vue.config.productionTip = false
Vue.use(VueQrcodeReader)

new Vue({
  router,
  store,
  created () {
    const userString = localStorage.getItem('user')
    if (userString) {
      const userData = JSON.parse(userString)
      this.$store.commit('SET_USER_DATA', userData)
    }
  },
  render: h => h(App)
}).$mount('#app')
