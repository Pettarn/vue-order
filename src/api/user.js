import http from './axiosUtils'
const baseUrl = 'http://10.2.69.168:8080/EleServer_war_exploded'

// 用户登录的信息
export const getUser = (params) => {
    return http.fetchPost(`${baseUrl}/login`, params)
}

export const setUser = (params) => {
    return http.fetchPost(`${baseUrl}/register`, params)
}
