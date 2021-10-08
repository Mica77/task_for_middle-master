import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    flats: []
  },
  mutations: {
    setFlats(state, value) {
      state.flats = value
    },
    addLike(state, flat) {
      flat.like = true;
    },
    removeLike(state, flat) {
      flat.like = false;
    }
  },
  actions: {
    async fetchFlats({ commit }) {

      const response = await axios.get('entities.json')
      commit('setFlats', response.data.response)
    }
  }
})
