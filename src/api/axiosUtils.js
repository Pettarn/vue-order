import Vue from 'vue'
import axios from 'axios'
import Qs from 'qs'

//设置axios参数
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 5000
axios.defaults.transformRequest = [function(data){
  let ret =''
  for(let it in data){
    ret += encodeURIComponent(it)+"="+encodeURIComponent(data[it])+"&"
  }
  return ret
}]

Vue.prototype.axios = axios
Vue.prototype.qs = Qs



function fetchGet (url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params}).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

function fetchPost (url, params = {}) {
    return new Promise((resolve, reject) => {
        
        axios.post(url, params).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export default {
    fetchGet,
    fetchPost
}
