import Router from 'koa-router'
import axios, { getParams } from '../../utils/request'
const router = new Router()

// https://m.douban.com/rexxar/api/v2/elendil/recommend_feed?
// start=0&count=20&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1
// 首页列表

router.get('/list', async ctx => {
    const query = ctx.request.query
    const result = await axios({
        url: '/rexxar/api/v2/elendil/recommend_feed',
        params: {
            ...getParams(query, 0, 20),
            udid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
            loc_id: '108288',
            for_mobile: 1
        }
    })
    ctx.body = result.data
})

// 菜单 todo 调整菜单
router.get('/menu', async ctx => {
    ctx.body = [
        {
            name: "电影",
            icon: "movie",
            desc: "电影热映",
            color: "#2384e8"
        },
        {
            name: "电视",
            icon: "TV",
            desc: "正在热播",
            color: "#7a6adb"
        },
        {
            name: "图书",
            icon: "book",
            desc: "畅销排行",
            color: "#9f7860"
        },
        {
            name: "同城",
            icon: "location",
            desc: "周末活动",
            color: "#e6467e"
        },
        {
            name: "小组",
            icon: "group",
            desc: "志趣相投",
            color: "#2ab8cc"
        },
        {
            name: "音乐",
            icon: "music",
            desc: "新碟榜",
            color: "#f48f2e"
        },
        {
            name: "阅读",
            icon: "read",
            desc: "电子书",
            color: "#9f7860"
        },
        {
            name: "游戏",
            icon: "game",
            desc: "虚拟世界",
            color: "#5774c5"
        },
        {
            name: "应用",
            icon: "app",
            desc: "玩手机",
            color: "#596cdd"
        },
        {
            name: "广播",
            icon: "broadcast",
            desc: "友邻动态",
            color: "#e1644d"
        },
        {
            name: "FM",
            icon: "FM",
            desc: "红心歌单",
            color: "#40cfa9"
        },
        {
            name: "豆品",
            icon: "doupin",
            desc: "生活美学",
            color: "#42bd56"
        }
    ]
})

export default router


