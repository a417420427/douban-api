import axios from 'axios'

const API_URL = 'https://m.douban.com'

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        Referer: API_URL,
    }
})


instance.interceptors.request.use(config => {
    // if (config.url === 'get') {
    //     const params = config.params;
    //     if (params && params.start && params.count) {
    //         params = {
    //             loc_id: 108288,
    //             uuid: '9fcefbf2acf1dfc991054ac40ca5114be7cd092f',
    //             for_mobile: 1,
    //             ...params
    //         }
    //     }
    //     config.params = params
    // }
    return config
})

export const getParams = (query = {}, start, count) => {
    query.start = Number(query.start);
    query.count = Number(query.count);
    if (isNaN(query.start)) {
        query.start = start;
    }
    if (isNaN(query.count)) {
        query.count = count
    }
    if (query.count > 20) {
        query.count = 20
    }
    return query
}

export default instance