import cookie from './cookie'
import client from './client'
import grantType from './grant-type'
import queryString from 'query-string'
import BaseApi from "../api/base-api";

export default {
    URL_AUTH_SERVER_AUTH: 'oauth/v2/auth',
    URL_AUTH_SERVER_TOKEN: 'oauth/v2/token',

    getBaseUrl() {
        let baseApi = new BaseApi()
        return baseApi._BASE_URL
    },

    /**
     * Get url for requesting the resource owner for authorization code
     *
     * @param {array} scope Authorization scope - Optional
     * @param {string} state Client state - Optional
     * @return {string} Url for getting the resource owner authorization
     */
    getAuthorizationCodeUrl(scope, state) {
        let clientData = client.getClient()

        if (!clientData.redirectUri) {
            throw new Error('Missing redirect uri')
        }

        let params = {
            response_type: 'code',
            client_id: clientData.clientId,
            redirect_uri: clientData.redirectUri
        }

        // OPTIONAL
        if (scope && Array.isArray(scope) && scope.length > 0) {
            params['scope'] = scope.join(' ')
        }

        // OPTIONAL
        if (state && state.length > 0) {
            params['state'] = state
        }

        params = queryString.stringify(params)

        return this.getBaseUrl() + this.URL_AUTH_SERVER_AUTH + '?' + params
    },

    refreshToken() {
        let clientData = client.getClient()
        let params = {
            client_id: clientData.clientId,
            client_secret: clientData.secret,
            grant_type: grantType.GRANT_TYPE_REFRESH_TOKEN,
            refresh_token: cookie.getRefreshToken()
            // refresh_token: 'YWNlY2U2ZGI3M2JmMzFiOTlmNzczYjE4Y2ZiMDVlNWMxOWY5ZGI2M2YwZTNkY2RlNDkxZGJiYjYzZTNmNzk5Yw'
        }

        let baseApi = new BaseApi()
        let _this = this
        return new Promise(function (resolve, reject) {
            baseApi.callApi(baseApi._METHOD_POST, _this.URL_AUTH_SERVER_TOKEN, queryString.stringify(params))
                .then(result => {
                    console.log('refreshToken then')
                    cookie.setToken(result.data)
                    resolve(result)
                })
                .catch(error => {
                    console.log('refreshToken cacth')
                    // console.log(error.response)
                    reject(error.response)
                })
        })
    },

    /**
     * Create AccessToken from AuthorizationCode
     *
     * @param {string} authCode
     * @return {Promise}
     */
    createTokenFromAuthCode(authCode) {
        if (!authCode) {
            throw new Error('Missing authorization code')
        }

        let clientData = client.getClient()

        let params = {
            code: authCode,
            redirect_uri: clientData.redirectUri,
            client_id: clientData.clientId,
            client_secret: clientData.secret,
            grant_type: grantType.GRANT_TYPE_AUTHORIZATION_CODE
        }

        let baseApi = new BaseApi()
        let _this = this
        return new Promise(function (resolve, reject) {
            baseApi.callApi(baseApi._METHOD_POST, _this.URL_AUTH_SERVER_TOKEN, queryString.stringify(params))
                .then(result => {
                    cookie.setToken(result.data)
                    resolve()
                })
                .catch(error => {
                    reject(error.response)
                })
        })
    },

    isAuthenticated() {
        return cookie.getToken() !== undefined
    },

    logout() {
        cookie.deleteToken()
        window.top.location.href = this.getBaseUrl() + 'logout'
    }
}
