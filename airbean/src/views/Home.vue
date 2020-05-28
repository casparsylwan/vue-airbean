<template>
  <div class="home">
    <MenuComp v-if="openCloseMenu"></MenuComp>
    <div @click="open()" class="click">
      <OpenClose class="openclose" :class="open" ></OpenClose>
    </div> 
    
  </div>
</template>

<script>
import MenuComp from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';

export default {
  name: 'Home',
  components: {
    MenuComp,
    OpenClose,
  },
  data(){
    return {
    openCloseMenu: true,
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
}
</script>
