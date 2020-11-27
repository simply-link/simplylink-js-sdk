import axios from 'axios'
import client from '../managers/client'
import cookie from '../managers/cookie'
import auth from '../managers/auth'

// declare dev mode(auth.simplylink.xyz) OR prod mode (auth.simplylink.io)
// let extension = client.getClient().prod ? 'com/' : 'xyz/'

let config = {
    // baseURL: 'https://auth.simplylink.' + extension,
    headers: {
        'Accept': 'application/json',
        'HTTP_X_MP_LANGUAGE': client.getClient().locale,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}

const instance = axios.create(config)

// interceptors
const resInterceptors = instance.interceptors.response.use(res => {
    return res
}, error => {
    if (error.response.status === 401) {
        ejectInterceptors()
        return new Promise(function (resolve, reject) {
            auth.refreshToken()
                .then(response => {
                    error.config.headers['Authorization'] = `Bearer ${response.data.access_token}`
                    return instance.request(error.config)
                })
                .then(reqResult => {
                    resolve(reqResult)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
})

function ejectInterceptors() {
    instance.interceptors.response.eject(resInterceptors)
}

export default instance