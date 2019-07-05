import http from './axiosUtils'
const baseUrl = 'http://10.2.69.142:8080/EleServer_war_exploded'

// 用户登录
export const getUser = (params) => {
    return http.fetchPost(`${baseUrl}/login`, params)
}

// 用户注册
export const setUser = (params) => {
    return http.fetchPost(`${baseUrl}/register`, params)
}

export const getAddress = (params) => {
    return http.fetchPost(`${baseUrl}/showTypeAddress`, params)
}
