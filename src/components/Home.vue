<template>
<div>
  <p>
    <a class="v-link-active" v-link="{ path: '/home/foo' }">Foo</a>
    <a v-link="{ path: '/home/bar/1' }">Bar</a>
    <a v-link="{ path: '/home/bar/2' }">Bar2</a>
    <a v-link="{ path: '/home/bar/3' }">Bar3</a>
  </p>
  <router-view keep-alive></router-view>  
</div>
</template>

<script>

import Vue from 'vue'



export default {
  // components:{
  //    'foo':Foo,
  //    'bar':Bar
  // },
  data () {
    // console.log(this)
    return {
      msg: 'Hello World!'
    }
  },
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
  }
}
</script>
