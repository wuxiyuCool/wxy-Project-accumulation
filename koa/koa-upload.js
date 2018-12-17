const Koa = require('koa');
const router = require('koa-route');
const multer = require('koa-multer');

const app = new Koa();

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
//路由

app.use(router.post('/upload', upload.single('file'), async (ctx, next) => {
    ctx.body = '22'
    next()
}));

app.listen(8877);