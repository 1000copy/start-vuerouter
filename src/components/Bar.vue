<template>
  <p>This is bar! Params is ${{oute.params.id}} </p>
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
        this.$broadcast("bar-change",this.$route.params.id)
        transition.next({message: this.$route.params.id });    
      }
    }
  }
</script>

<style scoped>

</style>
