'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _grantType = require('./grant-type');

var _grantType2 = _interopRequireDefault(_grantType);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _baseApi = require('../api/base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    URL_AUTH_SERVER_AUTH: 'oauth/v2/auth',
    URL_AUTH_SERVER_TOKEN: 'oauth/v2/token',

    getBaseUrl: function getBaseUrl() {
        var baseApi = new _baseApi2.default();
        return baseApi._BASE_URL;
    },


    /**
     * Get url for requesting the resource owner for authorization code
     *
     * @param {array} scope Authorization scope - Optional
     * @param {string} state Client state - Optional
     * @return {string} Url for getting the resource owner authorization
     */
    getAuthorizationCodeUrl: function getAuthorizationCodeUrl(scope, state) {
        var clientData = _client2.default.getClient();

        if (!clientData.redirectUri) {
            throw new Error('Missing redirect uri');
        }

        var params = {
            response_type: 'code',
            client_id: clientData.clientId,
            redirect_uri: clientData.redirectUri

            // OPTIONAL
        };if (scope && Array.isArray(scope) && scope.length > 0) {
            params['scope'] = scope.join(' ');
        }

        // OPTIONAL
        if (state && state.length > 0) {
            params['state'] = state;
        }

        params = _queryString2.default.stringify(params);

        return this.getBaseUrl() + this.URL_AUTH_SERVER_AUTH + '?' + params;
    },
    refreshToken: function refreshToken() {
        var clientData = _client2.default.getClient();
        var params = {
            client_id: clientData.clientId,
            client_secret: clientData.secret,
            grant_type: _grantType2.default.GRANT_TYPE_REFRESH_TOKEN,
            refresh_token: _cookie2.default.getRefreshToken()
            // refresh_token: 'YWNlY2U2ZGI3M2JmMzFiOTlmNzczYjE4Y2ZiMDVlNWMxOWY5ZGI2M2YwZTNkY2RlNDkxZGJiYjYzZTNmNzk5Yw'
        };

        var baseApi = new _baseApi2.default();
        var _this = this;
        return new Promise(function (resolve, reject) {
            baseApi.callApi(baseApi._METHOD_POST, _this.URL_AUTH_SERVER_TOKEN, _queryString2.default.stringify(params)).then(function (result) {
                console.log('refreshToken then');
                _cookie2.default.setToken(result.data);
                resolve(result);
            }).catch(function (error) {
                console.log('refreshToken cacth');
                // console.log(error.response)
                reject(error.response);
            });
        });
    },


    /**
     * Create AccessToken from AuthorizationCode
     *
     * @param {string} authCode
     * @return {Promise}
     */
    createTokenFromAuthCode: function createTokenFromAuthCode(authCode) {
        if (!authCode) {
            throw new Error('Missing authorization code');
        }

        var clientData = _client2.default.getClient();

        var params = {
            code: authCode,
            redirect_uri: clientData.redirectUri,
            client_id: clientData.clientId,
            client_secret: clientData.secret,
            grant_type: _grantType2.default.GRANT_TYPE_AUTHORIZATION_CODE
        };

        var baseApi = new _baseApi2.default();
        var _this = this;
        return new Promise(function (resolve, reject) {
            baseApi.callApi(baseApi._METHOD_POST, _this.URL_AUTH_SERVER_TOKEN, _queryString2.default.stringify(params)).then(function (result) {
                _cookie2.default.setToken(result.data);
                resolve();
            }).catch(function (error) {
                reject(error.response);
            });
        });
    },
    isAuthenticated: function isAuthenticated() {
        return _cookie2.default.getToken() !== undefined;
    },
    logout: function logout() {
        _cookie2.default.deleteToken();
        window.top.location.href = this.getBaseUrl() + 'logout';
    }
};