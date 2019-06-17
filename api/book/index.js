import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
const router = new Router()
//items?os=ios&callback=jsonp1&start=0&count=8&loc_id=0&_=0
router.get('/unreal', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/book_fiction/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/real', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/book_nonfiction/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/list', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items',
        params: getParams(query, 0, 8)
    })
    ctx.body = result.data
})

router.get('/detail/:id', async ctx => {
    const result = await axios({
        url: `/rexxar/api/v2/market/book/${ctx.params.id}` //30475767
    })

    ctx.body = result.data
})

router.get('/detail/:id/topic', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/book/${ctx.params.id}/forum_topics`,
        params: getParams(query, 0, 5)
    })
    ctx.body = result.data
})

router.get('/detail/:id/interests', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: `/rexxar/api/v2/book/${ctx.params.id}/interests`,
        params: getParams(query, 0, 4)
    })
    ctx.body = result.data
})


export default router