<template>
  <div class="landing">
    
    <imgHeader class="img-left"></imgHeader>
    <landingImage class="img-center"></landingImage>
    
    <imgBottom class="img-right"></imgBottom>

    
  </div>
</template>
<script>

import landingImage from '../components/svg/airbean-landing';
import imgHeader from '../components/svg/graphics-header';
import imgBottom from '../components/svg/graphics-footer';
export default {
  name: 'Landing',
  components: {
    landingImage,
    imgHeader,
    imgBottom,
  },

  created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 3000);

    }
  }

</script>
<style scoped lang="scss">

.landing {
    min-height: 100vh;
    background-color: rgb(35, 145, 103);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

   
    
}

.img-left{
  position: relative;
  margin-left: -50vh;
   min-width: 100vh;
   
  transform: rotate(270deg);
}
.img-right{
  position: relative; 
  min-width: 100vh;
 margin-left: -60vh;
  
  transform:  rotate(-90deg);
}

.img-center{
  position: absolute;
  top: 40vh;
  left: 7vh;

}

</style>