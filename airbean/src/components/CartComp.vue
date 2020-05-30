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
            <td class="amount">
              <p>^</p>
              {{ item.amount }}
              <p class="rotated">^</p>
              
            </td>
        </tr>
      </table>
      
      
    </section>  
      <div class="total">
        <h2> Total<span> .............. </span> {{ calcTotalPrice()}} kr <p>inkl moms + drönararleverans</p>  </h2>
        
        <div class="btn">
          <p>
            Take my money!
          </p>
        </div>
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
  // created(){
  //     this.$store.dispatch("fetchClient");
  //   }, 
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

      tr{
        
        display: flex;
      }

     

      td{
              margin-bottom: 1.2rem;
              
        }



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
      
    }

    section{
      min-height: 50vh;
    }

    .total{
    
      
      white-space: nowrap;
      h2{
        font-size: 1.3rem; 
        font-weight: bold;
        line-height: 28px;
        letter-spacing: 3px;

        p{
          text-align: start;
          font-weight: 200;
          font-size: 0.8rem;
          margin-left:2rem;
          letter-spacing: 1px;
        }
      }

      span{
        font-size: 1.2rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        letter-spacing: 1px;
        
      }
    }

    .rotated{
      transform-origin: center;
      transform: rotate(180deg);
    }

    .amount{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    
      margin-top: -0.5rem;
      

        p{
          font-weight: bold;
          font-size: 1.3rem;
        }            
    }

    .btn{

      margin: -0.5rem 1rem 1rem 1rem;
    
      border-radius: 2rem;

      background-color: #2F2926;
      color:#fff;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;

      p{
        padding:0.7rem;
      }

      
      
    }

</style>