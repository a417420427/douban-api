import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
import { getMusicDetail } from '../../utils/content';
const router = new Router()
// 34432027
router.get('/cn', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/music_chinese/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/uero', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/music_occident/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/japan', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/music_japan_korea/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/detail/:id/', async ctx => {
    const result = await axios({
        url: `music/subject/${ctx.params.id}`
    })
    ctx.body = getMusicDetail(result.data)
})

router.get('/detail/:id/credits', async ctx => {
    const result = await axios({
        url: `/rexxar/api/v2/music/${ctx.params.id}/credits`
    })
    ctx.body = result.data
})

router.get('/detail/:id/topic', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/music/${ctx.params.id}/forum_topics`,
        params: getParams(query, 0, 5)
    })
    ctx.body = result.data
})

router.get('/detail/:id/interests', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/music/${ctx.params.id}/interests`,
        params: getParams(query, 0, 4)
    })
    ctx.body = result.data
})

export default router