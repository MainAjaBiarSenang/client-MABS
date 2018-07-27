import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Tes from './views/tes.vue'
import Listroom from './views/Listroom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },{
      path : '/tes',
      name : 'tes',
      component : Tes
    }, {
      path : '/listroom',
      name : 'listroom',
      component : Listroom
    }
  ]
})
