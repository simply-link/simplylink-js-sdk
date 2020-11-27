import _ from 'underscore'
import queryString from 'query-string'
import axios from '../managers/axios'
import client from '../managers/client'
import cookie from '../managers/cookie'

class BaseApi {

    constructor() {
        this._METHOD_GET = 'get'
        this._METHOD_POST = 'post'
        this._METHOD_PATCH = 'patch'
        this._METHOD_DELETE = 'delete'

        let extension = client.getClient().prod ? 'io/' : 'xyz/'
        this._BASE_URL = 'https://auth.simplylink.' + extension
        // this.interceptor()
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath() {
    }

    /** Assign an object */
    getDataObject() {
    }

    /**
     * Get record list
     * @param {object} params - EXAMPLE: {since: 1234}
     * @return {Promise}
     */
    getRecordsList(params) {
        let additionalParams = params ? '?' + queryString.stringify(params) : ''
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + additionalParams)
                .then(result => {
                    let newArray = []
                    if (result.total !== 0) {
                        let iThis = _this
                        _.map(result.data.records, function (record) {
                            newArray.push(iThis.getDataObject().parseDataFromResourceServer(record))
                        })
                        result.data.records = newArray
                        resolve(result.data)
                    } else {
                        resolve(result)
                    }
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Get single record
     * @param {number} recordId
     * @return {Promise}
     */
    getSingleRecord(recordId) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.buildUrlForSingleRecord(recordId), [])
                .then(result => {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Create record
     * @param {object} data - EXAMPLE: {name: 'ron'}
     * @return {Promise}
     */
    createRecord(data) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_POST, _this.getApiPath(), data)
                .then(result => {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Create bulk record
     * @param {array} data - EXAMPLE: [{name: 'ron'}, {name: 'shay'}]
     * TODO: return models for every record (like getRecordsList function)
     * @return {Promise}
     */
    createBulkRecord(data) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_POST, _this.getApiPath() + '/_bulk', data)
                .then(result => {
                    resolve(result.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Update record
     * @param {number} recordId
     * @param {object} data - EXAMPLE: {name: 'ron'}
     * @return {Promise}
     */
    updateRecord(recordId, data) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_PATCH, _this.buildUrlForSingleRecord(recordId), data)
                .then(result => {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Delete record
     * @param {number} recordId
     * @return {Promise}
     */
    deleteRecord(recordId) {
        return this.makeApiRequest(this._METHOD_DELETE, this.buildUrlForSingleRecord(recordId), [])
    }

    /**
     * Build url for single record
     * @param {number} recordId
     * @return {string}
     */
    buildUrlForSingleRecord(recordId) {
        return this.getApiPath() + '/' + recordId
    }

    /**
     * Make api request
     * @param {string} method
     * @param {string} url
     * @param {array} data
     * @return {Promise}
     */
    makeApiRequest(method, url, data) {
        return this.callApi(method, 'api/' + url, data)
    }

    /**
     * Call api
     * @param {string} method
     * @param {string} url
     * @param {array} data
     * @return {Promise}
     */
    callApi(method, url, data) {
        url = this._BASE_URL + url

        // config.headers['Authorization'] = 'Bearer NWFjNjljMDcyNDdjZDczNTI2N2IyYTM1YWNjMTFlNmUzYWVkOGYxMzIwNTFhOWM0MGI4ODdjODdjMTE4MWRhMw'
        if (cookie.getCurrentToken()) {
            axios.defaults.headers['Authorization'] = 'Bearer ' + cookie.getCurrentToken()
        } else {
            delete axios.defaults.headers['Authorization']
        }

        const config = {method, url, data, headers: {}}
        return axios.request(config)
    }
}

export default BaseApi
