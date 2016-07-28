<template>
  <p>This is bar! Params is {{message}}</p>
  <hello :id="$route.params.id"></hello>
</template>

<script>
  import Hello from './hello.vue'
  export default {
    components:{
      'hello':Hello
    },
    data () {
      return {
        message: ''
      }
    },
    route: {
      data: function(transition) {
          transition.next({message: this.$route.params.id });    
      }
    }
  }
</script>

<style scoped>

</style>
