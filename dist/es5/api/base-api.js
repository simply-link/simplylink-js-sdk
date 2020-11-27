'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _queryString = require('query-string');

var _queryString2 = _interopRequireDefault(_queryString);

var _axios = require('../managers/axios');

var _axios2 = _interopRequireDefault(_axios);

var _client = require('../managers/client');

var _client2 = _interopRequireDefault(_client);

var _cookie = require('../managers/cookie');

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseApi = function () {
    function BaseApi() {
        _classCallCheck(this, BaseApi);

        this._METHOD_GET = 'get';
        this._METHOD_POST = 'post';
        this._METHOD_PATCH = 'patch';
        this._METHOD_DELETE = 'delete';

        var extension = _client2.default.getClient().prod ? 'com/' : 'xyz/';
        this._BASE_URL = 'https://auth.simplylink.' + extension;
        // this.interceptor()
    }

    /**
     * Get api path
     * @return {string}
     */


    _createClass(BaseApi, [{
        key: 'getApiPath',
        value: function getApiPath() {}

        /** Assign an object */

    }, {
        key: 'getDataObject',
        value: function getDataObject() {}

        /**
         * Get record list
         * @param {object} params - EXAMPLE: {since: 1234}
         * @return {Promise}
         */

    }, {
        key: 'getRecordsList',
        value: function getRecordsList(params) {
            var additionalParams = params ? '?' + _queryString2.default.stringify(params) : '';
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + additionalParams).then(function (result) {
                    var newArray = [];
                    if (result.total !== 0) {
                        var iThis = _this;
                        _underscore2.default.map(result.data.records, function (record) {
                            newArray.push(iThis.getDataObject().parseDataFromResourceServer(record));
                        });
                        result.data.records = newArray;
                        resolve(result.data);
                    } else {
                        resolve(result);
                    }
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Get single record
         * @param {number} recordId
         * @return {Promise}
         */

    }, {
        key: 'getSingleRecord',
        value: function getSingleRecord(recordId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_GET, _this.buildUrlForSingleRecord(recordId), []).then(function (result) {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create record
         * @param {object} data - EXAMPLE: {name: 'ron'}
         * @return {Promise}
         */

    }, {
        key: 'createRecord',
        value: function createRecord(data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_POST, _this.getApiPath(), data).then(function (result) {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Create bulk record
         * @param {array} data - EXAMPLE: [{name: 'ron'}, {name: 'shay'}]
         * @return {Promise}
         */

    }, {
        key: 'createBulkRecord',
        value: function createBulkRecord(data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_POST, _this.getApiPath() + '/_bulk', data).then(function (result) {
                    resolve(result.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Update record
         * @param {number} recordId
         * @param {object} data - EXAMPLE: {name: 'ron'}
         * @return {Promise}
         */

    }, {
        key: 'updateRecord',
        value: function updateRecord(recordId, data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_PATCH, _this.buildUrlForSingleRecord(recordId), data).then(function (result) {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Delete record
         * @param {number} recordId
         * @return {Promise}
         */

    }, {
        key: 'deleteRecord',
        value: function deleteRecord(recordId) {
            return this.makeApiRequest(this._METHOD_DELETE, this.buildUrlForSingleRecord(recordId), []);
        }

        /**
         * Build url for single record
         * @param {number} recordId
         * @return {string}
         */

    }, {
        key: 'buildUrlForSingleRecord',
        value: function buildUrlForSingleRecord(recordId) {
            return this.getApiPath() + '/' + recordId;
        }

        /**
         * Make api request
         * @param {string} method
         * @param {string} url
         * @param {array} data
         * @return {Promise}
         */

    }, {
        key: 'makeApiRequest',
        value: function makeApiRequest(method, url, data) {
            return this.callApi(method, 'api/' + url, data);
        }

        /**
         * Call api
         * @param {string} method
         * @param {string} url
         * @param {array} data
         * @return {Promise}
         */

    }, {
        key: 'callApi',
        value: function callApi(method, url, data) {
            url = this._BASE_URL + url;

            // config.headers['Authorization'] = 'Bearer NWFjNjljMDcyNDdjZDczNTI2N2IyYTM1YWNjMTFlNmUzYWVkOGYxMzIwNTFhOWM0MGI4ODdjODdjMTE4MWRhMw'
            if (_cookie2.default.getCurrentToken()) {
                _axios2.default.defaults.headers['Authorization'] = 'Bearer ' + _cookie2.default.getCurrentToken();
            } else {
                delete _axios2.default.defaults.headers['Authorization'];
            }

            var config = { method: method, url: url, data: data, headers: {} };
            return _axios2.default.request(config);
        }
    }]);

    return BaseApi;
}();

exports.default = BaseApi;