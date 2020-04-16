import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/index'
import ShoppingCard from '@/pages/cart/ShoppingCard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // '/' 开头的嵌套路径是根路径
      name: 'Main',
      component: Main
    },
    {
      path: '/cart',
      name: 'ShoppingCard',
      component: ShoppingCard
    }
  ]
})
