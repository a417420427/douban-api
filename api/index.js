import Router from 'koa-router'
import home from './home'
import book from './book'
import movie from './movie'
const router = new Router()

router.use('/home', home.routes(), home.allowedMethods())
router.use('/book', book.routes(), book.allowedMethods())
router.use('/movie', movie.routes(), movie.allowedMethods())

export default router