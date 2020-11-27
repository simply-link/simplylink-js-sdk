import client from './managers/client'
import api from './managers/api'
import scope from './managers/scope'
import auth from './managers/auth'

const collection = {client, api, scope, auth}

const Plugin = {
    install(Vue) {
        Vue.mp = collection
        Object.defineProperties(Vue.prototype, {
            $sl: {
                get () {
                    return collection
                }
            }
        })
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin)
}

export default Plugin
