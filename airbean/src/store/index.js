import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"Caspar",
    orderTemp :{ id:-1},
    clientOrder:{
      id: -1,
      name:'',
      email:'',
      order:[],
      orderHistory:[]
    }
    //{id:"#123456", sum: 443, date:'20/12/12'}, {id:"#123457", sum: 443, date:'20/12/12'}
  },
  mutations: {

    setClient : (state, client) => ( state.clientOrder = client  ),
    newOrder :  (state, order) =>  ( state.orderTemp = order)
    
  },
  actions: {
    async fetchClient({commit}){
      console.log("hej på dig!");
      const response = await axios.get('/backendAirBean/webapi/customer/all');
      commit( 'setClient', response.data);
     console.log(response)
    },
    async sendOrder({ commit }, order){

    //  console.log(order)
      const response = await axios.post('/backendAirBean/webapi/customer/new', {order});
      commit('newOrder', response.data)
      console.log(response.data)
      
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
      
    },
    getTempOrder(state){
      return state.orderTemp;
    }

  }
})
