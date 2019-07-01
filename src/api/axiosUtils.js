import axios from 'axios'
axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-type'] = 'application/x-www=form-urlencoded'


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
