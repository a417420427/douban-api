import Koa from 'koa'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'
import api from './api'
const app = new Koa()
const route = new Router()
//  加载路由中间件

app.use(BodyParser())

route.use('/api', api.routes(), api.allowedMethods())
route.get('/', (ctx) => {
    ctx.body = 'xxxx'
})
app.use(route.routes()).use(route.allowedMethods())
app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
})


