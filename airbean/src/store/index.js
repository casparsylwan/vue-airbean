import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"Caspar",
    clientOrder:{
      id:'1',
      name:'Caspar Sylwan',
      email:'casparsylwan@gmail.com',
      order:[]
    }
  },
  mutations: {
  },
  actions: {
    async fetchClient(){
      console.log("hej på dig!");
      const response = await axios.get('/backendAirBean/webapi/customer/all');
      console.log(response.data);
    }
  },
  modules: {
  },
  getters:{

    giveName(state){
      return state.clientOrder;
    },
    getOrder(state){
      return state.clientOrder.order
      
    }

  }
})
