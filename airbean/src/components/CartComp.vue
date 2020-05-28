<template>
  <div class="cart-comp">
    <section>
      <h2> Din beställning</h2>
      <table>
        <tr :key="item.id" v-for="item in giveName.order">
           
            <td>
              <div>
                {{ menuNameLine(item.title) }}
              </div>
              <div>
                {{ "96" }} kr
              </div>
               </td>
            <td>{{ item.amount }}</td>
        </tr>


      </table>
    </section>
    {{ giveName.id }} 
      
  </div>
</template>
<script>
export default {
  name: 'CartComp',
  computed:{

    giveName(){
      return this.$store.getters.giveName
    } 
    
  },
  methods:{
     menuNameLine(name){
        let title = [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."] 
        let len = name.split("").length;

        for(let i=0; i<len; i++){
            title[i] = name[i];
        }
        return title.join("")
    },
    calcTotalPrice(order){

      let sum =  order.reduce((sum, value) => sum += value.price)

      return sum;
    }
  }
}
</script>
<style scoped lang="scss">
    .cart-comp{
        position: fixed;
        top:4rem;
        left: 1.5rem;
        right: 1.5rem;

        min-height: 90vh;

        background-color: #fff;
        border-radius: 0.5rem;
    }

    h2{
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
      margin: 2rem 0 2rem 0;
    }

    table{
      border: solid black 1px;
      margin: auto;
      width: 90%;

      td:nth-child(1){
        display:flex;
        flex-direction: column;

        div:nth-child(1){
            font-size: 1.3rem; 
            font-weight: bold;
            line-height: 28px;
            letter-spacing: 3px;
        }

      }
    }

</style>