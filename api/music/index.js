import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
import { getMusicDetail } from '../../utils/content';
const router = new Router()


// 分类
router.get('/types', async ctx => {
    ctx.body = [
        { "link": "/music/pop", "name": "流行" },
        { "link": "/music/rock", "name": "摇滚" },
        { "link": "/music/folk", "name": "民谣" },
        { "link": "/music/indie", "name": "独立" },
        { "link": "/music/chinese", "name": "华语" },
        { "link": "/music/western", "name": "欧美" },
        { "link": "/music/japan", "name": "日本" },
        { "link": "/music/korean", "name": "韩国" }
    ]
})

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