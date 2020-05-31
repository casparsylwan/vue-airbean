<template>
  <div class="status">
    <MenuComp v-if="openCloseMenu"></MenuComp>
    <h3 v-if="getNewOrder.id !=-1" >ordernummer  <p> #{{ getNewOrder.id }} </p> </h3>
    <Drone/>
    <div class="heading">
      <h2>Din beställning</h2>
      <h2> är på väg !</h2>
    </div>
    <h3 v-if="getNewOrder.id !=-1" >{{ "13" }} minuter </h3>

    <div class="btn">
      ok cool!
    </div>
    
    <div @click="open()" class="click">
      <OpenClose class="openclose" :class="open" ></OpenClose>
    </div> 
      
  </div>
</template>
<script>
import MenuComp from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';
import Drone from '../components/svg/Drone';

export default {
  name: '',
  components: {
    MenuComp,
    OpenClose,
    Drone
  },
  data(){
    return {
    openCloseMenu: false,
    openClass: "open"
    }
  },
  methods: {
    open(){
      this.openCloseMenu = !this.openCloseMenu;
      if(this.open=="open"){
        this.open = "close";
      }else{
        this.open=="close"
      }
    }
  },
  computed:{

    getNewOrder(){
      
        return this.$store.getters.getTempOrder
     
      
    }

  }
}
</script>
<style scoped lang="scss">
  
  .status{
    min-height: 100vh;
    background: #E5674E;
    color:#fff;


    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;


  }

  .heading{
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    line-height: 2.5rem;
    letter-spacing: 3px;
  }

  .btn{
    width: 12rem;
    height: 3rem;
    border-radius: 2rem;
    background-color: #fff;
    color: #000;

    font-weight: bold;
    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
  }

  h3{
    font-style: normal;
    font-weight: 1.2rem;
    display: flex;
    letter-spacing: 1.5px;

    p{
      font-weight: bold;
      margin-left: 0.5rem;
    }
  }

</style>