'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var GRANT_TYPE_BASE_URL = 'http://simplylink.io/grants/';

exports.default = {
    GRANT_TYPE_OTP: GRANT_TYPE_BASE_URL + 'otp',
    GRANT_TYPE_USER_CREATE: GRANT_TYPE_BASE_URL + 'user/create',
    GRANT_TYPE_REFRESH_TOKEN: 'refresh_token',
    GRANT_TYPE_AUTHORIZATION_CODE: 'authorization_code'
};