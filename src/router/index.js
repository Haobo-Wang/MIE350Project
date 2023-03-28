import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Teams from '@/components/Teams'
import Players from '@/components/Players'
import Userposts from '@/components/Userposts'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Teams',
      name: 'Teams',
      component: Teams
    },
    {
      path: '/Players',
      name: 'Players',
      component: Players
    },

    {
      path: '/Userposts',
      name: 'Userposts',
      component: Userposts
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
  ]
})