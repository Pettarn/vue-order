import http from './axiosUtils'


// 商家信息
export const getBusiness = (params = {}) => {
    return http.fetchPost(`${http.baseUrl}/showBusiness`, params)
}

// 商家的菜单
export const getMenu = (params = {}) => {
    return http.fetchPost(`${http.baseUrl}/showTypeFoodtwo`, params)
}

// 商家的评价
export const getComments = (params = {}) => {
    return http.fetchPost(`${baseUrl}/showTypeComments`, params)
}