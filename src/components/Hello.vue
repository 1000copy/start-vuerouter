<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  props :['id'],
  data () {
    console.log(this)
    return {
      msg: 'Hello World!'
    }
  },
  // route: {
  //   data: function(transition) {
  //       transition.next({msg: this.$route.params.id });    
  //   }
  // },
  events: {
    'bar-change': function (value) {
        console.log(value)
        value = parseInt(value)
        if (value === 1){
           this.$set('msg', 'one')
        }else if (value === 2){
           this.$set('msg', 'two')
        }else if (value === 3){
           this.$set('msg', 'three')
        }else {
           this.$set('msg', 'Foo')
        }
    }
  }//,
  // watch:{
  //   id:function(value){
  //     value = parseInt(value)
  //     if (value === 1){
  //        this.$set('msg', 'one')
  //     }else if (value === 2){
  //        this.$set('msg', 'two')
  //     }else if (value === 3){
  //        this.$set('msg', 'three')
  //     }else {
  //        this.$set('msg', 'Foo')
  //     }
  //   }
  // }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
