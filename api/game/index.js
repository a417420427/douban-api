import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
import { getGamePage } from '../../utils/content';
const router = new Router()

router.get('/sort', async ctx => {
    const result = await axios({
        url: '/game'
    })
    ctx.body = getGamePage(result.data)
})


export default router