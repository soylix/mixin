import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode:'history',//去除#号的history模式
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
  },
  {
      path:'/about',
      name:'about',
      component:resolve=>require(['@/components/About'],resolve),
  },
  {
      path:'/nav',
      name:'nav',
      component:resolve=>require(['@/components/Nav'],resolve),
  }
  ]
})
