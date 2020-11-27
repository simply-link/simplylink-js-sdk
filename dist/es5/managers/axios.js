'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _client = require('../managers/client');

var _client2 = _interopRequireDefault(_client);

var _cookie = require('../managers/cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _auth = require('../managers/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// declare dev mode(auth.simplylink.xyz) OR prod mode (auth.simplylink.io)
// let extension = client.getClient().prod ? 'com/' : 'xyz/'

var config = {
    // baseURL: 'https://auth.simplylink.' + extension,
    headers: {
        'Accept': 'application/json',
        'HTTP_X_MP_LANGUAGE': _client2.default.getClient().locale,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

var instance = _axios2.default.create(config);

// interceptors
var resInterceptors = instance.interceptors.response.use(function (res) {
    return res;
}, function (error) {
    if (error.response.status === 401) {
        ejectInterceptors();
        return new Promise(function (resolve, reject) {
            _auth2.default.refreshToken().then(function (response) {
                error.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
                return instance.request(error.config);
            }).then(function (reqResult) {
                resolve(reqResult);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
});

function ejectInterceptors() {
    instance.interceptors.response.eject(resInterceptors);
}

exports.default = instance;