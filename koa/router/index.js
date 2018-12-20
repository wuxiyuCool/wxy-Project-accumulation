const router = require('koa-router')()
const fs = require('fs')
const jwt = require('jsonwebtoken')
// Token 数据
const payload = {
  name: 'wanghao',
  admin: true
}

// 密钥
const secret = 'wxy666'

// 签发 Token
const token = jwt.sign(payload, secret, {
  expiresIn: '5m'
})

// 输出签发的 Token
console.log(token)
const test = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlLCJpYXQiOjE1NDUyNzYxNTksImV4cCI6MTU0NTI3OTc1OX0.pZScZXnc2FSJMrtG2NhWnsBi9OFPbtd7MJif6Z0Iguk`
// const test = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2FuZ2hhbyIsImFkbWluIjp0cnVlLCJpYXQiOjE1NDUyODk2ODUsImV4cCI6MTU0NTI4OTk4NX0.GZplMImI8aSPhRUUcoXoAYV46oHNzVuRGvKKVwLcMc0`
// 到达结束时间后会过期返回error
jwt.verify(test, secret, (error, decoded) => {
  if (error) {
    console.error(error.message)
  } else {
    console.log(decoded)
  } 
})

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/token', async (ctx, next) => {
  let authorization = ctx.header.authorization;
  let request = ctx.request;
  // 请求参数对象
  let req_query = request.query;
  // 请求字符串
  // let req_queryString = request.queryString;
  if (!authorization) {
    ctx.body = {
      code: "-1",
      msg: 'token不存在'
    }
      return
  }
  jwt.verify(authorization, secret, (error, decoded) => {
    if (error) {
      console.log(error.message)
      ctx.body = error.message
      return
    }
    console.log(decoded)
    console.log(req_query)
    if (req_query.user == decoded.name) {
      ctx.body = {
        code: "0",
        msg: '验证成功'
      }
    } else {
      ctx.body = {
        code: "-1",
        msg: '验证失败'
      }
    }
    
  })

})

router.post('/token', async (ctx, next) => {
  const user = ctx.request.body
  console.log(user)
        if(user && user.name) {
            let userToken = {
                name: user.name
            }
            const token = jwt.sign(userToken, secret, {expiresIn: '1h'})  //token签名 有效期为1小时
            ctx.body = {
                message: '获取token成功',
                code: 1,
                token
            }
        } else {
            ctx.body = {
                message: '参数错误',
                code: -1
            }
        }
})

module.exports = router