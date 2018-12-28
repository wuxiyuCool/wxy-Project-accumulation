// 模拟数据添加root权限
const userDB = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: '管理员', root: 'admin' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: '编辑', root: 'editor' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: '用户1', root: 'user' }
]
// 可以在这里进行数据库操作

export default [
  {
    path: '/api/login',
    method: 'post',
    handle ({ body }) {
      const user = userDB.find(e => e.username === body.username && e.password === body.password)
      if (user) {
        return {
          code: 0,
          msg: '登录成功',
          data: {
            ...user,
            token: '8dfhassad0asdjwoeiruty'
          }
        }
      } else {
        return {
          code: 401,
          msg: '用户名或密码错误',
          data: {}
        }
      }
    }
  },
  {
    path: '/api/error',
    method: 'post',
    handle () {
        return {
          code: 0,
          msg: '密码错误',
          data: {
            error: 'error'
          }
        }
    }
  }
]
