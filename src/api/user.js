import http from './axiosUtils'

// 用户登录
export const getUser = (params) => {
    return http.fetchPost(`${http.baseUrl}/login`, params)
}

// 用户注册
export const setUser = (params) => {
    return http.fetchPost(`${http.baseUrl}/register`, params)
}

export const getAddress = (params) => {
    return http.fetchPost(`${http.baseUrl}/showTypeAddress`, params)
}

export const getOrderList = (params) => {
    return http.fetchPost(`${http.baseUrl}/selectorderform`, params)
}
