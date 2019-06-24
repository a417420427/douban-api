import Router from 'koa-router'
import cheerio from 'cheerio'
import axios, { getParams } from '../../utils/request'
import { getMovieDetail } from '../../utils/content';
const router = new Router()
// 分类
router.get('/types', async ctx => {
    ctx.body = [
        { link: '/movie/classic', name: '经典' },
        { link: '/movie/underrated', name: '冷门佳片' },
        { link: '/movie/doubantop', name: '豆瓣高分' },
        { link: '/movie/action', name: '动作' },
        { link: '/movie/comedy', name: '喜剧' },
        { link: '/movie/love', name: '爱情' },
        { link: '/movie/mystery', name: '悬疑' },
        { link: '/movie/horror', name: '恐怖' },
        { link: '/movie/scifi', name: '科幻' },
        { link: '/movie/sweet', name: '治愈' },
        { link: '/movie/artfilm', name: '文艺' },
        { link: '/movie/youth', name: '成长' },
        { link: '/movie/animation', name: '动画' },
        { link: '/movie/chinese', name: '华语' },
        { link: '/movie/western', name: '欧美' },
        { link: '/movie/korean', name: '韩国' },
        { link: '/movie/japanese', name: '日本' }
    ]
})
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
// https://m.douban.com/27090753/ 请求404， 需要操作dom获取数据
router.get('/detail/:id/', async ctx => {
    const result = await axios({
        url: `movie/subject/${ctx.params.id}` //30475767
    })
    ctx.body = getMovieDetail(result.data)
})

router.get('/detail/:id/credits', async ctx => {
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