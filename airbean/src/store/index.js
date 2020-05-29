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
      order:[],
      orderHistory:[{id:"#123456", sum: 443, date:'20/12/12'}, {id:"#123457", sum: 443, date:'20/12/12'}]
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

    getClient(state){
      return state.clientOrder;
    },
    getOrder(state){
      return state.clientOrder.order
      
    }

  }
})
