import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import test1 from '@/components/test1'
import home from '@/components/home'
import like from '@/components/like'
import vip from '@/components/vip'
import me from '@/components/me'
import test2 from '@/components/test2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index/home'
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/index/like',
          component: like
        },
        {
          path: '/index/vip',
          component: vip
        },
        {
          path: '/index/home',
          component: home
        },
        {
          path: '/index/me',
          component: me
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: test1
    },
    {
      path: '/test2',
      name: 'test',
      component: test2
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: test
    }
  ]
})
