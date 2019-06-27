import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import koaBody from 'koa-body'
import cors from '@koa/cors'
import { accessLogger, systemLogger, errorLogger, } from './logger';
import api from './api'
const app = new Koa()
const route = new Router()
//  加载路由中间件
app.use(cors())
app.use(BodyParser())
app.use(accessLogger())
app.use(errorLogger())
route.use('/api', api.routes(), api.allowedMethods())

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024	// 设置上传文件大小最大限制，默认2M
    }
}));

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        console.log('xxxrrexxx')
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

route.get('/', (ctx) => {
    ctx.body = 'xxxx'
})
app.use(route.routes()).use(route.allowedMethods())
app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})


