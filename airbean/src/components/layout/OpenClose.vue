<template>
  <div @click="spinTheLines()" class="open-close"  >
      <div class="circle" v-bind:class="open" >
          <p class="turn1"></p>
          <p></p>
          <p></p>
      </div>     
  </div>
</template>
<script>


export default {
  name: 'OpenClose',
  components: {
    
    
  },  
//  props: ["openCloseMenu"],
  data(){
      return{
          open:"open"
      }
  },
  methods:{

      spinTheLines(){

          if(this.open==="open"){
              this.open = "close";
              
          }
          else{
              this.open="open";
          }

      }

  }
}
</script>
<style scoped lang="scss">

    .open-close{
        position: fixed;
        z-index: 10;
        top:1rem;
        left: 1rem;
    }

    .circle{
        height: 3rem;
        width: 3rem;
        border-radius: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
       

        p{
            transform-origin: center center;
            transition: transform 0.5s ease-in, opacity 0.5s ease;
            height: 3px;
            width: 70%;
            background-color: #000;
            border-radius: 6px;
        }

        &.open{
            
            p{

                margin: 5px 0 0 0;
                
                &:nth-last-child(1){
                    margin-bottom: 3px;
                }  
            }        

        }

        &.close{

            p:nth-child(3){
                opacity: 0;
                transform: rotate(415deg) translate(1px);
            }

          p:nth-child(2){
              transform: rotate(315deg) translate(1px);
              
          }

            p:nth-child(1){
                transform: rotate(225deg) translate(-2px, -1px);
                
                
            }

            
        }            

    }
    
    

</style>