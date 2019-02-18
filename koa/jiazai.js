const Koa = require('koa');
const app = new Koa();
let port = 3131 + (parseInt(process.env.NODE_APP_INSTANCE) || 0)
const fs = require('fs')

const arr = ['0.txt']


let index = 0
async function data(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let data = await fs.readFileSync(`./public/text/${element}`)
        index++
        console.info(index, arr.length)
        
    }
}

app.listen(port, () => {
    console.log('[服务已开启,访问地址为：] http://127.0.0.1:3131/');
	console.log(port)
});

