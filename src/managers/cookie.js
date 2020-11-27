import cookie from 'js-cookie'

const TOKEN = 'mp_t'                    // main token
const REFRESH_TOKEN = 'mp_r_t'          // refresh token
const TEMP_TOKEN = 'mp_temp_token'      // temp token when token is not authenticated token like when request OTP
const TEMP_PHONE = 'mp_temp_phone'      // in case otp and else
const TEMP_COUNTRY = 'mp_temp_country'  // in case otp and else
const CURR_TOKEN = 'mp_c_t'             // every request if needed authorization code, set this cookie
const USER_PHONE = 'mp_user_phone'      // user phone saved for requests

var getExpiredAtFinalDateForCookie = function (exp) {
    return new Date((Date.now()) + exp * 1000)
}

export default {
    getToken: function () {
        return cookie.get(TOKEN)
    },
    getRefreshToken: function () {
        return cookie.get(REFRESH_TOKEN)
    },
    getTempToken: function () {
        return cookie.get(TEMP_TOKEN)
    },
    getTempPhone: function () {
        return cookie.get(TEMP_PHONE)
    },
    getTempCountry: function () {
        return cookie.get(TEMP_COUNTRY)
    },
    getCurrentToken: function () {
        return cookie.get(CURR_TOKEN)
    },
    getUserPhone: function () {
        return cookie.get(USER_PHONE)
    },

    setToken: function (token) {
        let accessToken = token.access_token
        this.setCurrentToken(accessToken, token.expires_in)
        cookie.set(TOKEN, accessToken, {expires: getExpiredAtFinalDateForCookie(token.expires_in)})
        this.setRefreshToken(token.refresh_token)
    },
    setRefreshToken: function (token) {
        return cookie.set(REFRESH_TOKEN, token)
    },
    setTempToken: function (token, exp) {
        return cookie.set(TEMP_TOKEN, token, {expires: getExpiredAtFinalDateForCookie(exp)})
    },
    setTempPhone: function (phone, exp) {
        return cookie.set(TEMP_PHONE, phone, {expires: getExpiredAtFinalDateForCookie(exp)})
    },
    setTempCountry: function (country) {
        return cookie.set(TEMP_COUNTRY, country)
    },
    setCurrentToken: function (token, exp) {
        cookie.set(CURR_TOKEN, token, {expires: getExpiredAtFinalDateForCookie(exp)})
    },
    setUserPhone: function (phone, exp) {
        cookie.set(USER_PHONE, phone, exp || '')
    },

    deleteToken: function () {
        this.deleteRefreshToken()
        this.deleteCurrentToken()
        cookie.remove(TOKEN)
    },
    deleteRefreshToken: function () {
        cookie.remove(REFRESH_TOKEN)
    },
    deleteTempToken: function () {
        cookie.remove(TEMP_TOKEN)
    },
    deleteTempPhone: function () {
        cookie.remove(TEMP_PHONE)
    },
    deleteTempCountry: function () {
        return cookie.remove(TEMP_COUNTRY)
    },
    deleteCurrentToken: function () {
        cookie.remove(CURR_TOKEN)
    },
    deleteUserPhone: function () {
        cookie.remove(USER_PHONE)
    }
}
