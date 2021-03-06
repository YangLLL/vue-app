import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/index'
import ShoppingCard from '@/pages/cart/ShoppingCard'
import Home from '@/pages/Home'
import NoteList from '@/pages/notes/index'
import Button from '@/pages/components/button'
import Form from '@/pages/components/form'
import Navigation from '@/pages/components/navigation'
import Dialog from '@/pages/components/others/dialog'
import RichText from '@/pages/components/others/rich-text'
import EChart from '@/pages/components/others/echart'

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
          path: '/components/button',
          component: Button
        },
        {
          path: '/components/form',
          component: Form
        },
        {
          path: '/components/nav',
          component: Navigation
        },
        {
          path: '/components/dialog',
          component: Dialog
        },
        {
          path: '/components/rich-text',
          component: RichText
        },
        {
          path: '/components/echart',
          component: EChart
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
