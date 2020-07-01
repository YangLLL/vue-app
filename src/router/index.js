import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/index'
import ShoppingCard from '@/pages/cart/ShoppingCard'
import Home from '@/pages/Home'
import NoteList from '@/pages/notes/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // '/' 开头的嵌套路径是根路径
      name: 'Main',
      component: Main,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/notes',
          component: NoteList
        },
        {
          path: '/demo/cart',
          name: 'ShoppingCard',
          component: ShoppingCard
        }
      ]
    }
  ]
})
