import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import Login from '@/view/login'
import Register from '@/view/register'
import Newdetails from '@/view/newdetails'
import Starlist from '@/view/starlist'
import Stardetail from '@/view/stardetail'
import Playdetail from '@/view/playdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/login',
    	name:'login',
    	component:Login
    },
    {
    	path:'/register',
    	name:'register',
    	component:Register
    },
    {
    	path:'/newdetails',
    	name:'newdetails',
    	component:Newdetails
    },
    {
    	path:'/starlist',
    	name:'starlist',
    	component:Starlist
    },
    {
    	path:'/stardetail',
    	name:'stardetail',
    	component:Stardetail
    },
    {
    	path:'/playdetail',
    	name:'playdetail',
    	component:Playdetail
    }
  ]
})
