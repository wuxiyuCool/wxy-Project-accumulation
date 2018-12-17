const Koa = require('koa');
const app = new Koa();
let port = 3131 + (parseInt(process.env.NODE_APP_INSTANCE) || 0)
 

app.use(async ctx => {
  let _html = '404 NotFound'
  switch (ctx.url) {
    case '/':
      _html = '<h1>Index</h1>';
      break;
    case '/about':
      _html = '<h1>About</h1>';
      break;
    case '/hello':
      _html = '<h1>world</h1>';
      break;
    default:
      break;
  }
  ctx.body = _html
});

app.listen(port, () => {
    console.log('[服务已开启,访问地址为：] http://127.0.0.1:3000/');
	console.log(port)
});

