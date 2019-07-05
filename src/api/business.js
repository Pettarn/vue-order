import http from './axiosUtils'
const baseUrl = 'http://10.2.69.142:8080/EleServer_war_exploded'

// 商家信息
export const getBusiness = (params = {}) => {
    return http.fetchPost(`${baseUrl}/showBusiness`, params)
}

// 商家的菜单
export const getMenu = (params = {}) => {
    return http.fetchPost(`${baseUrl}/showTypeFoodtwo`, params)
}