<template>
  <div class="profile">
      <flowerTop/>
      <noPhoto/>
      <div class="info" >
        <h3>{{ getClient.name  }}</h3>
        <p> {{ getClient.email }} </p>
      </div>
      <div class="table">
        <h2>Orderhistorik</h2>
        <div class="box" :key="order.id" v-for="order in getClient.orderHistory">
            <div class="box1">
              <div class="key">
                {{ order.id }}
              </div>
              <div class="total">
                total summa
              </div>
            </div>
            <div class="box2">
              <div class="date">
                {{ order.date }}
              </div>
              <div class="sum">
                  {{ order.sum }} kr
              </div>
            </div>            
        </div>
        <div class="box">
            <div class="box1">
              <div class="key">
                Totalt spenderat
              </div>
              
            </div>
            <div class="box2">
              <div class="date">
                {{ totalSent() }}
              </div>
              
            </div>            
        </div>

      </div>
      <signup v-if="getClient.id === -1"></signup>
      <MenuComp v-if="openCloseMenu"></MenuComp>
      <div @click="open()" class="click">
      <OpenClose class="openclose" :class="open" ></OpenClose>
    </div> 

    
      
  </div>
</template>
<script>
import MenuComp from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';
import flowerTop from '../components/svg/graphics-header';
import noPhoto from '../components/layout/nophoto';
import signup from '../components/signup';

export default {
  name: 'Profile',
  components: {
    MenuComp,
    OpenClose,
    flowerTop,
    noPhoto,
    signup
    
  },  
  data(){
    return {
    openCloseMenu: false,
    openClass: "open"
    }
    
  },
  computed:{

    getClient(){
      return this.$store.getters.getClient
    },
    
    
  },
  methods: {

    open(){
      this.openCloseMenu = !this.openCloseMenu;
      if(this.open=="open"){
        this.open = "close";
      }else{
        this.open=="close"
      }
    },

    totalSent(){
      let sum = 0;
      for(let i= 0; i<this.getClient.orderHistory.length; i++ ){

          sum += this.getClient.orderHistory[i].sum;
      }

      return sum;
    }
  },
  created(){
      this.$store.dispatch("fetchClient");
    }
}
</script>
<style scoped lang="scss">

  .profile{
    background:#2F2926;
    min-height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .info{
    margin-top: 1.5rem;
    color: #fff;
    letter-spacing: 3px;
    text-align: center;
    line-height: 1.7rem;
    h3{
      font-weight: bold;
      font-size: 1.5rem;
    }

    p{
       font-size: 1.2rem;
       font-weight: 300;
    }
  }

  .table{
    width: 90%;
    color:#fff;
    margin-top:3rem;
    

    h2{
      font-weight: bold;
      font-size: 1.5rem;
      letter-spacing: 2px;
      margin-bottom: 1.5rem;
    }

    .box{
      display: flex;
      margin-bottom: 1rem;
      letter-spacing: 2px;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);

      &:nth-last-child(2){
        border-bottom: 2px solid rgba(255, 255, 255, 1);
      }

      &:nth-last-child(1){
        border-bottom: 0px solid rgba(255, 255, 255, 1);
      }
    }

    .box1{
      width: 80%;
      border-bottom: 1px rgba(55, 55, 55, 0.5);
    }

    .key, .date{
      margin-bottom: 0.4rem;
      font-weight: bold;
    }
  }

  .key{
      font-weight: bold;
     
    }

  .small{
          font-weight: 300;
          font-style: normal;
          
        }

  .big{
        font-weight: bold;
        letter-spacing: 2px;
  }
</style>