import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
const router = new Router()




router.get('/modules', async ctx => {
    const result = await axios({
        url: '/rexxar/api/v2/niffler/modules',
        params: {
            for_mobile: 1
        }
    })
    ctx.body = result.data
})


export default router