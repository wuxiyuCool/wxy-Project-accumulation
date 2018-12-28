import playground from './modules/playground'
import frame from './modules/frame'
import d2Crud from './modules/d2-crud'
import test from './modules/test'
//权限测试
import test1 from './modules/test1'
import plugins from './modules/plugins'
import charts from './modules/charts'
import components from './modules/components'
import element from './modules/element'
import filters from './modules/filters'
import business from './modules/business'

import layoutHeaderAside from '@/layout/header-aside'

const meta = { auth: true }

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页 必须 name:index
      {
        path: 'index',
        name: 'index',
        meta,
        component: () => import('@/pages/index')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: {
          beforeRouteEnter (to, from, next) {
            next(vm => vm.$router.replace(from.fullPath))
          },
          render: h => h()
        }
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: {
          beforeRouteEnter (to, from, next) {
            next(vm => vm.$router.replace(JSON.parse(from.params.route)))
          },
          render: h => h()
        }
      }
    ]
  },
  playground,
  frame,
  d2Crud,
  plugins,
  charts,
  components,
  element,
  filters,
  business,
  test,
  test1
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]
const framehome = [
  // 首页
  {
    path: '/home/index',
    name: 'home-index',
    meta,
    component: () => import('@/pages/home')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  // 404
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/error-page-404')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/pages/error-page-401/401')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...framehome,
  ...errorPage
]
