import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
const router = new Router()

// 首页列表
router.get('/list', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/elendil/recommend_feed',
        params: getParams(query, 0, 20)
    })
    ctx.body = result.data
})

// 菜单 todo 调整菜单
router.get('/menu', async ctx => {
    ctx.body = [
        "电影",
        "同城",
        "阅读",
        "广播",
        "电视",
        "小组",
        "游戏",
        "FM",
        "图书",
        "音乐",
        "应用",
        "豆品",
    ]
})

export default router


