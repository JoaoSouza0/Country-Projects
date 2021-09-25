<template>
  <div class="home">
      <Inputs/>
  </div>
</template>

<script>
// @ is an alias to /src
  import Inputs from '@/components/Inputs.vue'
export default {
  name: "Home",
  components:{
    Inputs
  }
};
</script>

<style>
.home {
  max-width: 1200px;
  padding: 40px 0;
  margin: auto;
}


</style>
