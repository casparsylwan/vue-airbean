<template>
  <div class="profile">
      <flowerTop/>
      <noPhoto/>
      <div class="info" >
        <h3>{{ giveName.name  }}</h3>
        <p> {{ giveName.email }} </p>
      </div>
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

export default {
  name: 'Profile',
  components: {
    MenuComp,
    OpenClose,
    flowerTop,
    noPhoto
    
  },  
  data(){
    return {
    openCloseMenu: false,
    openClass: "open"
    }
    
  },
  computed:{

    giveName(){
      return this.$store.getters.giveName
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
    }
  }
}
</script>
<style scoped lang="scss">

  .profile{
    background:#2F2926;
    min-height: 100vh;
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

</style>