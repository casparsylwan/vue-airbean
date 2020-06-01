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

    initialiseStore(state) {

      if(localStorage.getItem('theCustomer')) {
        let clientJson = localStorage.getItem('theCustomer');
        let client = JSON.parse(clientJson)
        state.clientOrder.name = client.name 
        state.clientOrder.email = client.email
        state.clientOrder.id = client.active
        state.clientOrder.orderHistory = client.orderHistory

      }
    },

    setClient(state, client){
       state.clientOrder.name = client.name 
       state.clientOrder.email = client.email
       state.clientOrder.id = client.active
       state.clientOrder.orderHistory = client.orderHistory 
       localStorage.setItem('theCustomer', JSON.stringify(client));

  },
    newOrder(state, order){
        console.log(order)
       state.orderTemp = order.orderHistory[order.orderHistory.length - 1];
       state.clientOrder.orderHistory = order.orderHistory;
       state.clientOrder.order = []
       localStorage.setItem('theCustomer', JSON.stringify(state.clientOrder));
       
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
    },
    setLocalstorage(state, customer){
      localStorage.setItem('theCustomer', JSON.stringify(customer));
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
      commit('setLocalstorage', response.data)
      console.log(response.data)
    },
    async login({commit}, customer){

      const response = await axios.post('/backendAirBean/webapi/customer/login', {customer});
      commit('setClient', response.data)

      console.log(response.data)

    },
    setLocalStorage({commit}, customer){
      commit('setLocalstorage', customer)
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
