import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Bar from './components/Bar.vue'
// import VueResource from 'vue-resource'
Vue.use(VueRouter)

const router = new VueRouter()


// Define some components
var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})

router.map({
    '/foo': {
        component: Foo
    },
    '/bar/:id': {
        component: Bar
    }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/foo'
})

router.start(App, '#app')




