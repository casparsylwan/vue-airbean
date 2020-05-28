import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"Caspar",
    clientOrder:{
      id:'1',
      name:'Caspar',
      order:[{"id":1,"title":"Bryggkaffe","desc":"Bryggd på månadens bönor.","price":39, "amount":1}]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{

    giveName(state){
      return state.clientOrder;
    }

  }
})
