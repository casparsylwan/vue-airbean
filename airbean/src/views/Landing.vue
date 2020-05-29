<template>
  <div class="landing">
    
    <FlowerLeft class="left"></FlowerLeft>
    
    <landingImage class="img-center"></landingImage>
    
    <FlowerRight class="right"></FlowerRight>

    
  </div>
</template>
<script>

import landingImage from '../components/svg/airbean-landing';
import FlowerLeft from '../components/svg/flowerleft';
import FlowerRight from '../components/svg/FlowerRight';


export default {
  name: 'Landing',
  components: {
    landingImage,
    FlowerLeft,
    FlowerRight
    
  },

  created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 3000);

    }
  }

</script>
<style scoped lang="scss">

.landing {
    
    background-color: rgb(35, 145, 103);
    
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    grid-template-areas: 
    "left . right"
    "left center right"
    "left . right";
    
         
}

.img-center{
  grid-area: center;
  justify-self: center;
  align-self: center;
  padding-left: 3rem;
 
}


.left{
 grid-area: left;
 justify-self: start;
 
}

.right{
 grid-area: right;
 justify-self: end;
 
 
}


// .img-left{
//   position: relative;
//   margin-left: -50vh;
//    min-width: 100vh;
   
//   transform: rotate(270deg);
// }
// .img-right{
//   position: relative; 
//   min-width: 100vh;
//  margin-left: -60vh;
  
//   transform:  rotate(-90deg);
// }

// .img-center{
//   position: absolute;
//   top: 40vh;
//   left: 7vh;

// }

</style>