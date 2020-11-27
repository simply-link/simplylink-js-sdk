'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TOKEN = 'mp_t'; // main token
var REFRESH_TOKEN = 'mp_r_t'; // refresh token
var TEMP_TOKEN = 'mp_temp_token'; // temp token when token is not authenticated token like when request OTP
var TEMP_PHONE = 'mp_temp_phone'; // in case otp and else
var TEMP_COUNTRY = 'mp_temp_country'; // in case otp and else
var CURR_TOKEN = 'mp_c_t'; // every request if needed authorization code, set this cookie
var USER_PHONE = 'mp_user_phone'; // user phone saved for requests

var getExpiredAtFinalDateForCookie = function getExpiredAtFinalDateForCookie(exp) {
    return new Date(Date.now() + exp * 1000);
};

exports.default = {
    getToken: function getToken() {
        return _jsCookie2.default.get(TOKEN);
    },
    getRefreshToken: function getRefreshToken() {
        return _jsCookie2.default.get(REFRESH_TOKEN);
    },
    getTempToken: function getTempToken() {
        return _jsCookie2.default.get(TEMP_TOKEN);
    },
    getTempPhone: function getTempPhone() {
        return _jsCookie2.default.get(TEMP_PHONE);
    },
    getTempCountry: function getTempCountry() {
        return _jsCookie2.default.get(TEMP_COUNTRY);
    },
    getCurrentToken: function getCurrentToken() {
        return _jsCookie2.default.get(CURR_TOKEN);
    },
    getUserPhone: function getUserPhone() {
        return _jsCookie2.default.get(USER_PHONE);
    },

    setToken: function setToken(token) {
        var accessToken = token.access_token;
        this.setCurrentToken(accessToken, token.expires_in);
        _jsCookie2.default.set(TOKEN, accessToken, { expires: getExpiredAtFinalDateForCookie(token.expires_in) });
        this.setRefreshToken(token.refresh_token);
    },
    setRefreshToken: function setRefreshToken(token) {
        return _jsCookie2.default.set(REFRESH_TOKEN, token);
    },
    setTempToken: function setTempToken(token, exp) {
        return _jsCookie2.default.set(TEMP_TOKEN, token, { expires: getExpiredAtFinalDateForCookie(exp) });
    },
    setTempPhone: function setTempPhone(phone, exp) {
        return _jsCookie2.default.set(TEMP_PHONE, phone, { expires: getExpiredAtFinalDateForCookie(exp) });
    },
    setTempCountry: function setTempCountry(country) {
        return _jsCookie2.default.set(TEMP_COUNTRY, country);
    },
    setCurrentToken: function setCurrentToken(token, exp) {
        _jsCookie2.default.set(CURR_TOKEN, token, { expires: getExpiredAtFinalDateForCookie(exp) });
    },
    setUserPhone: function setUserPhone(phone, exp) {
        _jsCookie2.default.set(USER_PHONE, phone, exp || '');
    },

    deleteToken: function deleteToken() {
        this.deleteRefreshToken();
        this.deleteCurrentToken();
        _jsCookie2.default.remove(TOKEN);
    },
    deleteRefreshToken: function deleteRefreshToken() {
        _jsCookie2.default.remove(REFRESH_TOKEN);
    },
    deleteTempToken: function deleteTempToken() {
        _jsCookie2.default.remove(TEMP_TOKEN);
    },
    deleteTempPhone: function deleteTempPhone() {
        _jsCookie2.default.remove(TEMP_PHONE);
    },
    deleteTempCountry: function deleteTempCountry() {
        return _jsCookie2.default.remove(TEMP_COUNTRY);
    },
    deleteCurrentToken: function deleteCurrentToken() {
        _jsCookie2.default.remove(CURR_TOKEN);
    },
    deleteUserPhone: function deleteUserPhone() {
        _jsCookie2.default.remove(USER_PHONE);
    }
};