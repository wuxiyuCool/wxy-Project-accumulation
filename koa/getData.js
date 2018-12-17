const Koa = require('koa'),
    Router = require('koa-router'),
    cheerio = require('cheerio'),
    fs = require('fs');
    app = new Koa(),
    router = new Router();
let arr;
const superagent = require('superagent');
let url = '2465887.html'; 
let baseUrl = 'http://www.yunxs.com/longzu5/'; 
let size = 0;              
router.get('/', function(ctx, next) {
        superagent
		.get(baseUrl + url)
        .set({
			
		})
        .end((err, sres) => { //页面获取到的数据
            let html = sres.text,
                $ = cheerio.load(html, {
                    decodeEntities: false
                }), //用cheerio解析页面数据
                obj = {};
            // $(".box_box").each((index, element) => {
            //     var $text = $(element).text();
            //     arr.push($text);
            // });
            arr = $(".box_box").text()
            fs.writeFile(`./public/text/${size ++}.txt`, arr, (error) => {
                if(error){
                    console.error('写入文件出错：', error)
                }else{
                    console.log('文件写入完毕');
                }
            });
            url = $(".next a").attr('href')
            
            console.log(url)
        });
    // ctx.type = 'html'
    // ctx.body = `<div>${arr}</div>`;
    ctx.body = arr
});
app
    .use(router.routes())

app.listen(3000, () => {
    console.log('[服务已开启,访问地址为：] http://127.0.0.1:3000/');
});

