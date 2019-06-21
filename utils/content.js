import cheerio from 'cheerio'

export const getMovieDetail = html => {
    const $ = cheerio.load(html)
    const dom = $('.card .subject-info')

    return {
        cover: dom.find('.right img').attr('src'),
        rating: {
            score: dom.find('.left .rating-stars').data('data-rating'),
            people: dom.find('.left .rating-stars').next('span').html()
        },
        meta: dom.find('.left .meta').html().trim(),
        intro: $('.card .subject-intro .bd p').attr('data-content')
    }
}