import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    // We save the data on the user variable inside of state to preserve it
    SET_USER_DATA (state, userData) {
      state.user = userData
      // We pass in a string with the users data to local storage
      localStorage.setItem('user', JSON.stringify(userData))
      // Sets the header of the axios instance to the token for this user
      axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
    },
    CLEAR_USER_DATA (state) {
      state.user = null
      // localStorage.removeItem('user')
      // axios.defaults.headers.commit['Authorization'] = null
      localStorage.removeItem('user')
      // Forces refresh of the page
      // The header settings will be cleared on refresh
      location.reload()
    }

  },
  actions: {
    // @param credentials = users credentials passed in from RegisterUser.vue
    register ({ commit }, credentials) {
      return axios.post('//localhost:3000/register', credentials)
        .then(({ data }) => {
          // Commits the SET_USER_DATA mutation and pass in the response
          // and pass in the response data
          commit('SET_USER_DATA', data)
        })
    },
    login ({ commit }, credentials) {
      return axios.post('//localhost:3000/login', credentials)
        .then(({ data }) => {
          // Commits the SET_USER_DATA mutation and pass in the response
          // and pass in the response data
          commit('SET_USER_DATA', data)
        })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    }
  },
  // Returns the truthiness or falsiness of the value
  // No user? = false, Active user? = true
  getters: {
    loggedIn (state) {
      return !!state.user
    }
  }
})
