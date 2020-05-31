<template>
  <div class="login">
      <div class="welcome">
            <div class="circle">
                <svg class="svg" width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">            
                    <path d="M0.124365 14.2012C1.76225 9.7738 3.42461 5.35558 5.08509 0.93553C5.32606 0.298093 5.78354 -0.0124061 6.52153 0.000379196C8.18201 0.0296027 9.84437 0.0241233 11.5048 0.00220566C12.2391 -0.00692667 12.6702 0.316358 12.913 0.96658C14.5585 5.3574 16.2189 9.74092 17.8549 14.1354C18.2804 15.2769 17.7533 15.971 16.4919 15.9856C15.0178 16.0039 13.5456 15.9893 12.0715 15.9893C11.6291 15.9893 11.1754 16.0094 10.9401 15.5308C10.7198 15.0888 11.0172 14.782 11.245 14.4587C12.111 13.2331 12.6344 11.8888 12.7719 10.4021C12.8321 9.7391 12.5384 9.42677 11.8701 9.42494C10.9306 9.42129 9.98933 9.42494 9.0499 9.42494C9.0499 9.42312 9.0499 9.42129 9.0499 9.42129C8.14059 9.42129 7.23128 9.40851 6.32385 9.42494C5.34677 9.44138 5.10203 9.72266 5.24511 10.6761C5.45596 12.0806 5.98686 13.3646 6.81145 14.5409C7.4026 15.3865 7.12021 15.9655 6.09606 15.9801C4.52971 16.0057 2.96148 16.0094 1.39514 15.9747C0.261797 15.9491 -0.257809 15.2331 0.124365 14.2012ZM7.91467 5.24416C8.36274 5.76288 8.72044 6.29255 8.88046 6.972C9.02919 7.60578 9.44337 7.6204 9.90461 7.193C10.7066 6.44598 10.8007 5.06517 10.059 4.11358C9.64293 3.58025 9.25511 3.07432 9.11579 2.37844C9.00283 1.82137 8.55665 1.7684 8.14059 2.17753C7.68311 2.62318 7.43084 3.16564 7.44025 3.8597C7.40072 4.34737 7.56639 4.84417 7.91467 5.24416Z" fill="black" fill-opacity="0.6"/>
                </svg>
            </div>
          <h1>Välkommen till AirBean-familjen!</h1>
          <h2>Skriv ditt e-post</h2>
      </div>
      <div class="input-box">
          <div class="input name">
              <label>Name</label>
              <input type="text" placeholder="Ditt namn" v-model="customer.name" >
              {{ customer.name }}
          </div>
          <div class="input email">
              <label>E-post</label>
              <input type="text" placeholder="Din e-post" v-model="customer.email">
              {{ customer.email }}
          </div>
      </div>
    
      <div class="btn" @click="login()">
          Sign in
      </div>
     
    <navMenu v-if="openCloseMenu" />
     <div @click="open()" class="click">
        <OpenClose> </OpenClose>
    </div>    
  </div>
</template>
<script>
import navMenu from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';

export default {

  name: 'Login',
  components: {
      navMenu,
      OpenClose

    
  },
  data(){
      return {
          openCloseMenu: false,
          customer: {
              name:'',
              email:''
          }
      }
  },
  methods:{
      open(){
      this.openCloseMenu = !this.openCloseMenu;
        
    },
    login(){
        this.$store.dispatch("login", this.customer);
        this.$router.push({ path: '/profile'})
    }
  }  
  
}
</script>
<style scoped lang="scss">

    .login{
        background-color: #F3E4E1;
        border-radius:5px;

        

        min-height: 100vh;
        padding: 2rem;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .circle{
        border:solid black 1px;
        border-radius: 100%;
        background-color: rgba(0,0,0,0.3);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
        margin: 1rem 0 1rem 0;

    }

    .svg{
        stroke:#000;
        fill: rgba(0,0,0,0.6);        
    }

    .welcome{
        margin: 2rem 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        text-align: center;

        h1{
            font-size: 2rem;
            font-weight: bold;
            line-height: 2.5rem;
            margin-bottom:1rem;
        }

        h2{
            line-height: 1.3rem;
        }

    }

    .input-box{
        margin:1.5rem 0 0 0;
        display: flex;
        flex-direction: column;

        .input{

            display: flex;
            flex-direction: column;

            margin: 1rem;

            &.checkbox{
                flex-direction: row;
                justify-content: flex-start;
                width: 9rem;
                white-space: nowrap;
                

                label{
                    margin-top:0.5rem;
                    margin-left:1rem;
                }
                
              

                input{
                    border-radius: 100%;
                    height: 1.5rem;
                }
            }

            label{
                margin-bottom:0.5rem;
            }

            input{
                height: 2.5rem;
                border-radius:6px;
                width: 100%;

                &[type="text"]{
                    font-size: 1.5rem;
                    text-align: center;
                    background-color : transparent;
                    border: solid 1px black;
                }
            }

        }
    }

    .btn{
        background-color: #2F2926;
        padding: 0.8rem 3rem 0.8rem 3rem;

        font-size: 1.5rem;
        font-weight: bold;
        color:#fff;
        border-radius:2rem;
    }

    

</style>