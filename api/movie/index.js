import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
const router = new Router()
// 最新热门
router.get('/latest', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/movie_latest/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

// 免费观看
router.get('/free', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/movie_free_stream/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

// 正在热映
router.get('/showing', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/movie_showing/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/detail/:id/', async ctx => {
    const result = await axios({
        url: `/rexxar/api/v2/movie/${ctx.params.id}/credits` //30475767
    })
    ctx.body = result.data
})

router.get('/detail/:id/topic', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/movie/${ctx.params.id}/forum_topics`,
        params: getParams(query, 0, 5)
    })
    ctx.body = result.data
})

router.get('/detail/:id/interests', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/movie/${ctx.params.id}/interests`,
        params: getParams(query, 0, 4)
    })
    ctx.body = result.data
})


export default router