import http from './axiosUtils'


// 商家信息
export const getBusiness = (params = {}) => {
    return http.fetchPost(`${http.baseUrl}/showBusiness`, params)
}

// 商家的菜单
export const getMenu = (params = {}) => {
    return http.fetchPost(`${http.baseUrl}/showTypeFoodtwo`, params)
}