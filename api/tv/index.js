import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
import { getTvDetail } from '../../utils/content';
const router = new Router()

// 分类
router.get('/types', async ctx => {
    ctx.body = [
        {
            link: "/tv/american", name: "英美剧"
        },
        { link: "/tv/korean", name: "韩剧" },
        { link: "/tv/chinese", name: "国产剧" },
        { link: "/tv/japanese", name: "日剧" },
        { link: "/tv/animation", name: "动漫" },
        { link: "/tv/tvshow", name: "综艺" }
    ]
})



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