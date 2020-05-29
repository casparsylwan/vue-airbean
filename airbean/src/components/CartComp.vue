<template>
  <div class="cart-comp">
    <section>
      <h2> Din beställning</h2>
      <table>
        <tr :key="item.id" v-for="item in getClient.order">
           
            <td>
              <div>
                {{ menuNameLine(item.title) }}
              </div>
              <div>
                {{ item.price * item.amount }} kr
              </div>
               </td>
            <td>{{ item.amount }}</td>
        </tr>
      </table>
      
      
    </section>  
      <div class="total">
        <h2> Total<span> ...................... </span> {{ calcTotalPrice()}} kr </h2>
        
      </div>
  </div>
</template>
<script>
export default {
  name: 'CartComp',
  computed:{

    getClient(){
      return this.$store.getters.getClient
    },
    
    
  },
  created(){
      this.$store.dispatch("fetchClient");
    }, 
  methods:{
     menuNameLine(name){
        let title = [".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."] 
        let len = name.split("").length;

        for(let i=0; i<len; i++){
            title[i] = name[i];
        }
        return title.join("")
    },
    calcTotalPrice(){
      let sum = 0;
      for(let i = 0; i< this.getClient.order.length; i++)
      {
          sum += this.getClient.order[i].price * this.getClient.order[i].amount;
      }

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

        min-height: 80vh;

        background-color: #fff;
        border-radius: 0.5rem;

        display: flex;
        flex-direction: column;
        justify-content: stretch;

        overflow-y: scroll;
    }

    h2{
      font-weight: bold;
      font-size: 2rem;
      text-align: center;
      margin: 1.5rem 0 1.5rem 0;
    }

    table{
     
      margin: auto;
      width: 90%;
      min-height: 70%;

      td:nth-child(1){
        display:flex;
        flex-direction: column;

        div:nth-child(1){
            font-size: 1.3rem; 
            font-weight: bold;
            line-height: 28px;
            letter-spacing: 3px;
            white-space: nowrap;
            overflow: hidden;
            width: 15rem;
        }

      }

      td{
        margin-bottom: 1.5rem;
      }

      
    }

    section{
      min-height: 70vh;
    }

    .total{
      width: 70%;
      margin: 0 1rem 0 1rem;
      
      white-space: nowrap;
      h2{
        font-size: 1.3rem; 
        font-weight: bold;
        line-height: 28px;
        letter-spacing: 3px;
      }

      span{
        font-size: 1.2rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        letter-spacing: 1px;
        
      }
    }

</style>