const koa = require('koa')
const route = require('koa-route')
const websocketfy = require('koa-websocket')
const logger = require('koa-bunyan-logger')
// const multer = require('koa-multer');//加载koa-multer模块
// const app = new koa()
// 文件上传
const app = websocketfy(new koa())
app.ws.use(logger())

app.ws.use(route.all('/', function (params) {
    params.websocket.on('message', function (message) {
        let timeInter1 = '';
		if (!isNaN(message)) {
			params.websocket.send(math(message))
		} else {
			params.websocket.send('输入数字开始游戏')
		}
        
        //if (timeInter1 != '') {
		//return
        //}
        //timeInter1 = setInterval(() => {
         //   try {
          //      params.websocket.send('你有一条新消息')
         //   } catch (error) {
         //       console.error('发送 失败~！')
         //       clearInterval(timeInter1)
         //   }
        //}, 10000)
    })
}))

function math(message) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    if (!regPos.test(message)) {
        return '不是数字'
    }
    if (message < 12581) {
        return '数字过小了哦！~~'
    } else if (message > 12581) {
        return '数字过大了哦！~~'
    } else {
        return '恭喜你答对了'
    }
}


app.listen(8888)