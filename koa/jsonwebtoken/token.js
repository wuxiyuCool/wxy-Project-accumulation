const jwt = require('jsonwebtoken')
const fs = require('fs')
// // Token 数据
// const payload = {
//     name: 'wanghao',
//     admin: true
//   }
  
//   // 密钥
//   const secret = 'wxy666'
  
//   // 签发 Token
//   const token = jwt.sign(payload, secret, { expiresIn: '1hours' })
  
//   // 输出签发的 Token
//   console.log(token)


//   setTimeout(() => {
//       //验证签发token
//     jwt.verify(token, secret, (error, decoded) => {
//         if (error) {
//           console.log(error.message)
//           return
//         }
//         console.log(decoded)
//       })
//   }, 500)




// 获取签发 JWT 时需要用的密钥
const privateKey = fs.readFileSync('./config/private.key')
// console.log(privateKey)
//ssh-keygen -t rsa -b 2048（可改长度 如1024，4096） -f private.key（文件名） 生成秘钥-私钥
// openssl rsa -in private.key(基于这个私钥) -pubout -outform PEM -out public.key（公钥名称） 生成公钥

const payload = {
    name: 'wanghao',
    admin: true,

  }
  const tokenRS256 = jwt.sign(payload, privateKey, { expiresIn: '1hours' })

// 输出签发的 Token
console.log('RS256 算法：', tokenRS256)

setTimeout(() => {
    jwt.verify(tokenRS256, privateKey, (error, decoded) => {
        if (error) {
          console.log(error.message)
          return
        }
        console.log(decoded)
      })
}, 500)