<template>
  <div class="nav-menu">
    <ul>
      <router-link to="/Menu">
        <li>Meny</li>
      </router-link>
      <li></li>
      <router-link to="/about">
        <li>Vårt kaffe</li>
      </router-link>
      <li></li>
      <router-link to="/profile">
        <li>Min profil</li>
      </router-link>
      <li></li>
      <router-link to="/status">
        <li>Orderstatus</li>
      </router-link>
      <li></li>
    </ul>      
  </div>
</template>
<script>
export default {
  name: 'Nav',
  props: {
    
  }
}
</script>
<style scoped lang="scss">

  .nav-menu{
    position: absolute;
    top:0;
    bottom: 0;
    left:0vw;
    right:0vw;
    z-index: 10;
    background-color: #2F2926 ;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    

    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

  }

  li{
    font-family: 'PT Serif', serif;
    font-style: bold;
    font-size: 32px;
    line-height: 38px;
    color:#fff;
    text-align: center;

    &:nth-child(2n){
    
    background: #fff;
    width: 3rem;
    height: 1px;
    text-align: center;
    margin: 1rem 0 1rem 0;
    
  
  }
  }



</style>
