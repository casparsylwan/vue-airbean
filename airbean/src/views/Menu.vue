<template>
  <div class="menu">
    <MenuComp v-if="openCloseMenu"></MenuComp>
    <imgHeader class="img-top"></imgHeader>
    <section>
        <div class="menu">
            <h2>Meny</h2>
            <table>
                <tr :key="item.id" v-for="item in menu">
                    <td>
                        <div @click="addOrder(item)" class="plus">+</div>
                    </td>
                    <td>
                        <span class="name">{{ menuNameLine(item.title)  }}</span>
                        <span class="desc">{{ item.desc }}</span> 
                    </td>
                    <td>
                        <span class="price">{{ item.price }} kr</span>  
                    </td>
                </tr>                
            </table>

            

        </div>
    </section>
    <div @click="overLayOpenClose()" class="clicker">
      <bag></bag>
    </div>
    <div v-if="overlay" class="overlay">
        
    </div>

    <imgBottom class="img-bottom"></imgBottom>
    <div @click="open()" class="click">
      <OpenClose class="openclose" :class="open" ></OpenClose>
    </div>     
  </div>
</template>
<script>
import MenuComp from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';
import imgHeader from '../components/svg/graphics-header';
import imgBottom from '../components/svg/graphics-footer';
import bag from '../components/svg/bag';
import json from '../assets/data/menu.json';

export default {
  name: 'Menu',
  components:{
      MenuComp,
      imgHeader,
      imgBottom,
      OpenClose,
      bag
      

  },
  data(){
      return{
      openCloseMenu: false,
      menu : json.menu,
      overlay:false

      }
  },
   methods: {

     overLayOpenClose(){
       this.overlay = !this.overlay;
       this.$router.push('/cart');
     },

    open(){
      this.openCloseMenu = !this.openCloseMenu;
      if(this.open=="open"){
        this.open = "close";
      }else{
        this.open=="close"
      }
    },
    menuNameLine(name){
        let title = [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."] 
        let len = name.split("").length;

        for(let i=0; i<len; i++){
            title[i] = name[i];
        }
        return title.join("")
    },
    addOrder(item){
      
      let index = this.addOrderToStore.findIndex(orderItem => orderItem.id == item.id );
      
      if(index == -1){
        item.amount = 1;
        this.addOrderToStore.push(item);
      }
      else
      {
        this.addOrderToStore[index].amount += 1;        
      }
    }

  },
  computed:{

    addOrderToStore(){
      
      return this.$store.getters.getOrder
    },    
  }
}
</script>
<style scoped lang="scss">

.menu{
    background-color: #F3E4E1;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    

    h2{
      font-size: 42px;
      font-weight: bold;
      margin-bottom: 2rem;
      text-align: center;
    }

}

table{

    width: 90vw;
    margin: auto;

    tr{
        height: 100%;
        
        
    }

    td:nth-child(1){
        width: 2rem;
        vertical-align: bottom;
        
        
       
        
    }

    td:nth-child(2){
        
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;
        margin-top: 2rem;
    }

    .name{
       
       font-size: 1.3rem; 
       font-weight: bold;
       line-height: 28px;
       letter-spacing: 3px;
       
    }

    .price{
        font-weight: bold;
    }
}





.plus{
    grid-area: plus;
    border-radius: 100%;
    background-color: #2F2926;
    color:#fff;

    font-size: 1.5rem;
    text-align: center;

    width: 1.5rem;
    height: 1.5rem;

    padding: 0.3rem;

    vertical-align: bottom;

}


.img-top{
    order: -1;
  }

.img-bottom{
    order:1;
}

.overlay{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 300;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }

</style>