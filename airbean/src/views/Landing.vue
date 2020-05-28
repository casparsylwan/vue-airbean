<template>
  <div class="landing">
    
      
  </div>
</template>
<script>
export default {
  name: 'Landing',

  created(){
      setTimeout( () => this.$router.push({ path: '/home'}), 4000);

    }
  }

</script>
<style scoped lang="scss">

</style>