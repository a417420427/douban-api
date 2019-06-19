import Router from 'koa-router'
import { getExt } from '../../utils/files';
import axios from '../../utils/request';

const router = new Router()

router.get('/images', async ctx => {
    const source = ctx.request.query.source
    let image;
    try {
        image = await axios({
            url: source,
            responseType: 'stream'
        })
    } catch (e) {
        // TODO 返回404图片
        image = {
            data: 'xxx'
        }
    }
    ctx.type = getExt(source)
    ctx.body = image.data
})


module.exports = router