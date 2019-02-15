const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);
const port = 8081;
const router = require('koa-route');
const User = require('./router/user')
  
server.listen(process.env.PORT || port, () => {
     console.log(`app run at : http://127.0.0.1:${port}`);
})

// router.get('/', async (ctx, next) => {
//     await ctx.render('index', {
//       title: 'Hello Koa 2!'
//     })
//     const user = new User(server);
//     user.initialize()
//   })
io.on('connection', socket => {
     console.log('初始化成功！下面可以用socket绑定事件和触发事件了');
     socket.on('send', data => {
          console.log('客户端发送的内容：', data);
          socket.emit('getMsg', '我是返回的消息... ...');
     })
     socket.on('login', data => {
        console.log('登录信息', data);
        
        socket.emit('getMsg', '我是返回的消息... ...');
    })
     socket.emit('login', '1')
     setTimeout( () => {
         socket.emit('allmsg', '我是初始化3s后的返回消息... ...') 
     }, 3000)
})