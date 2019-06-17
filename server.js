import { app } from './app'

const bpp = async () => {
    await app()
    console.log(app)
}

bpp()