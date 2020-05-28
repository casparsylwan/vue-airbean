import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"Caspar",
    clientOrder:{
      id:'1',
      name:'Caspar',
      order:[{id:1,
              name:"kaffe",
              amount:2
              }]
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
