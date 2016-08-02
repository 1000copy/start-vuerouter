import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
// import VueResource from 'vue-resource'
Vue.use(VueRouter)

const router = new VueRouter()



import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Api from './components/Api.vue'

var Foo = Vue.extend({
    template: '<p>This is foo!</p>'
})
import Bar from './components/Bar.vue'
// var Bar = Vue.extend({
//     template: '<p>This is Bar!</p>'
// })

router.map({
    '/home': {
        component: Home,
        subRoutes: {
          '/bar/:id': {
            component: Bar
          },
          '/foo': {
            component: Foo
          },
          '/': {
            component: Foo
          }
        },
    },
    '/login': {
        component: Login
    },
    '/api': {
        component: Api
    }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home/foo'
})

router.start(App, '#app')




