import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/index'

import util from '@/libs/util.js'

// 路由数据
import routes from './routes'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start()
  // 关闭搜索面板
  store.commit('d2admin/search/set', false)
  if (store.state.d2admin.lock.active) {
    return
  }
  // 验证当前路由所有的匹配中是否需要有登录验证的
  if (to.matched.some(r => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')
    if (token && token !== 'undefined') {
      // 路由权限验证
      // console.log(to.meta.root)
      // console.log(store.state.d2admin.user.info.root)
      // console.info('1',to.meta.root == store.state.d2admin.user.info.root)
      // 跳转路由是否有权限标识
      if (to.meta.root) {
        // 获取用户的权限标识不存在即为没有登陆跳转重新登陆
        if (store.state.d2admin.user.info.root) {
          // 判断路由标识是否正确
          to.meta.root == store.state.d2admin.user.info.root ?　next() : next({name: '401'})
        } else {
          next({name: 'login'})
        }
      }
        next()
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
      // https://github.com/d2-projects/d2-admin/issues/138
      NProgress.done()
    }
  } else {
    // 不需要身份校验 直接通过
    next()
  }
})

router.afterEach(to => {
  // 进度条
  NProgress.done()
  // 需要的信息
  const app = router.app
  const { name, params, query, fullPath } = to
  // 多页控制 打开新的页面
  app.$store.dispatch('d2admin/page/open', { name, params, query, fullPath })
  // 更改标题
  util.title(to.meta.title)
})

export default router
