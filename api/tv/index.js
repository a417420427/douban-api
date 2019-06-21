import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
import { getTvDetail } from '../../utils/content';
const router = new Router()
///rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&callback=jsonp1&start=0&count=8&loc_id=108288&_=0
router.get('/domestic', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/tv_domestic/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/show', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/tv_variety_show/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/american', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/tv_american/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/detail/:id/', async ctx => {
    const result = await axios({
        url: `movie/subject/${ctx.params.id}`
    })
    ctx.body = getTvDetail(result.data)
})

router.get('/detail/:id/credits', async ctx => {
    const result = await axios({
        url: `/rexxar/api/v2/tv/${ctx.params.id}/credits`
    })
    ctx.body = result.data
})

router.get('/detail/:id/topic', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/tv/${ctx.params.id}/forum_topics`,
        params: getParams(query, 0, 5)
    })
    ctx.body = result.data
})

router.get('/detail/:id/interests', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/tv/${ctx.params.id}/interests`,
        params: getParams(query, 0, 4)
    })
    ctx.body = result.data
})

export default router