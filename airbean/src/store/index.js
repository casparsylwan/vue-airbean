import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    customerTemp:{
      name:'',
      email:''
    },
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

    setClient(state, client){
       state.clientOrder.name = client.name 
       state.clientOrder.email = client.email
       state.clientOrder.id = client.active
       state.clientOrder.orderHistory = client.orderHistory 
  },
    newOrder(state, order){
        console.log(order)
       state.orderTemp = order.orderHistory[order.orderHistory.length - 1];
       state.clientOrder.orderHistory = order.orderHistory;
       state.clientOrder.order = []
       
      },

    newCustomer(state, customer){
      state.clientOrder.name = customer.name 
      state.clientOrder.email = customer.email
      state.clientOrder.id = customer.active
      state.clientOrder.orderHistory = customer.orderHistory
       },
    getCustomer(state, customer){
      state.customerTemp = customer
    },
    checkLocalStorage(state){

      state.subscribe()
    } 
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
      const response = await axios.post('/backendAirBean/webapi/customer/order/new', {order});
      commit('newOrder', response.data)
      console.log(response.data)
      
    },

    async newCustomer({commit}, customer){

      const response = await axios.post('/backendAirBean/webapi/customer/new', {customer});
      commit('newCustomer', response.data)
      console.log(response.data)
    },
    async login({commit}, customer){

      const response = await axios.post('/backendAirBean/webapi/customer/login', {customer});
      commit('setClient', response.data)
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
