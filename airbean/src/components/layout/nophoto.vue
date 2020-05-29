<template>
  <div class="pro-photo">
      
    
    <div class="main head">

    </div>
    <div class="main body"></div>
      
  </div>
</template>
<script>


export default {
  name: 'ProfileImg',
  components: {
   
    
  } 
  
}
</script>
<style scoped lang="scss">
    .pro-photo{

        position:relative;
       
        height: 6rem;
        width: 6rem;
        background: #F3E4E1;
        border-radius: 100%;
        

        border: white;
        overflow: hidden;
    }

    .main{
        position: absolute;

        background: #E5674E;
        
        border-radius: 100%;

        &.head{
            height: 3rem;
            width: 3rem;
            top:1rem;
            left:26%;
            
        }

        &.body{
            height: 6rem;
            width: 6rem;
            top:3.7rem;
        }
    }

  

</style>