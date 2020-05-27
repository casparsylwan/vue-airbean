<template>
  <div class="menu">
    <MenuComp></MenuComp>
      
  </div>
</template>
<script>
import MenuComp from '../components/MenuComp';

export default {
  name: 'Menu',
  components:{
      MenuComp

      

  },
  props: {
    msg: String
  }
}
</script>
<style scoped lang="scss">

</style>