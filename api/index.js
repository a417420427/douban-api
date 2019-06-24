import Router from 'koa-router'
import home from './home'
import book from './book'
import movie from './movie'
import assets from './assets'
import tv from './tv'
import music from './music'
import game from './game'
const router = new Router()

router.use('/assets', assets.routes(), assets.allowedMethods())
router.use('/home', home.routes(), home.allowedMethods())
router.use('/book', book.routes(), book.allowedMethods())
router.use('/movie', movie.routes(), movie.allowedMethods())
router.use('/tv', tv.routes(), tv.allowedMethods())
router.use('/music', music.routes(), music.allowedMethods())
router.use('/game', game.routes(), game.allowedMethods())

export default router