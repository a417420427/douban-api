import cheerio from 'cheerio'

export const getMovieDetail = html => {
    const $ = cheerio.load(html)
    const info = $('.card .subject-info')
    // writeFileSync('./a.html', html)
    const intro = $('.card .subject-intro')

    return {
        title: $('.card .title').html(),
        info: {
            cover: info.find('.right img.cover').attr('data-src'),
            rating: {
                score: info.find('.left .rating-stars').attr('data-rating'),
                people: info.find('.left .rating-stars').next().next('span').html()
            },
            meta: info.find('.left .meta').html().trim(),
            intro: $('.card .subject-intro .bd p').attr('data-content'),
        },
        intro: {
            title: intro.find('h2').html(),
            content: intro.find('.bd p').html()
        }

    }
}

export const getBookDetail = getMovieDetail

export const getTvDetail = getMovieDetail

export const getMusicDetail = getMovieDetail

export const getGamePage = html => {
    const $ = cheerio.load(html);
    const typeSort = $('section.types .type-list').html();
    const platformSort = $('section.types').next('section.types').find('.type-list').html()
    const scripts = $('script')
    const reg = /type-name="(.*)"/g
    const mapsReg = /var json_types=\{(.*)\}/
    let targetElement
    scripts.each((index, element) => {
        if (element.attribs.src) return
        if (element.children && element.children.length > 0) {
            element.children.forEach(v => {
                if (v.type === 'text') {
                    if (v.data.indexOf('var json_types =') !== -1) {

                    }
                }
            })
        }
        // if (element.html().indexOf('var json_types =') !== -1) {

        //     targetElement = element
        //     return
        // }
    })

    const dataByType = typeSort.match(reg).map(v => v.replace(reg, '$1'))
    const dataByPlatform = platformSort.match(reg).map(v => v.replace(reg, '$1'))
    return {
        dataByType,
        dataByPlatform
    }
}