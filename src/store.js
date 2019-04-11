import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personName: ''
  },
  mutations: {
    changePersonName (state, payload) {
      state.personName = payload.personName
    }
  },
  actions: {},
  plugins: [vuexLocal.plugin]
});
