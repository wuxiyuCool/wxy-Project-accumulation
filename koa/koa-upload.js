const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');
const static = require('koa-static');
// const koaBetterBody = require('koa-better-body')
    
// 将 public 目录设置为静态资源目录
const main = static(__dirname + '/public');

const app = new Koa();
const router = new Router()
app.use(main);
// app.use(koaBetterBody()).use(function *() {
//     console.log(this.request.body)    // if buffer or text
//     console.log(this.request.files)   // if multipart or urlencoded
//     console.log(this.request.fields)  // if json
// })
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({
    storage: storage
});

router.post('/upload',upload.single('file'),async(ctx,next)=>{
  console.log('abc')
//   ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = {
      code: 200,
      msg: 'sucecss',
      filename: ctx.req.file.filename//返回文件名
  }
  next()
})
app.use(async (ctx,next) => {
    ctx.set('Access-Control-Allow-Origin', '*')
    await next()
}) 
app.use(router.routes(), router.allowedMethods())
//路由
//  app.use()
app.listen(8877, () =>　{
    console.log("server服务开启localhost：8877")
});

// const Koa=require('koa')
// const multer=require('koa-multer')
// const Router=require('koa-router')
// // const views=require('koa-views')
// // const path=require('path')
// const app=new Koa()
// const static = require('koa-static');
    
// // // 将 public 目录设置为静态资源目录
// const main = static(__dirname + '/public');
// app.use(main);
// //加载模板引擎
// // app.use(views(path.join(__dirname,'../views'),{
// //   extension:'ejs'
// // }))

// const router=new Router()
// router.get('/',async (ctx,next)=>{
//   let title = 'hello koa2'
//   await ctx.render('index', {
//     title
//   })
// })

// //文件上传
// //配置
// var storage = multer.diskStorage({
//   //文件保存路径
//   destination: function (req, file, cb) {
//     cb(null, 'public/uploads/')
//   },
//   //修改文件名称
//   filename: function (req, file, cb) {
//     var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
//     cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
//   }
// })
// //加载配置
// var upload = multer({ storage: storage });
// //路由
// router.post('/upload',upload.single('file'),async(ctx,next)=>{
//   console.log('abc')
//   ctx.body = {
//       code: 200,
//       msg: 'sucecss',
//     filename: ctx.req.file.filename//返回文件名
//   }
// })

// app.use(router.routes(), router.allowedMethods())

// app.listen(5555,()=>{
//   console.log('Server is running at port 5555...')
// })