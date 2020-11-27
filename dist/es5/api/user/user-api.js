'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseApi = require('../base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

var _userModel = require('../../model/user/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserApi = function (_BaseApi) {
    _inherits(UserApi, _BaseApi);

    function UserApi() {
        _classCallCheck(this, UserApi);

        return _possibleConstructorReturn(this, (UserApi.__proto__ || Object.getPrototypeOf(UserApi)).apply(this, arguments));
    }

    _createClass(UserApi, [{
        key: 'getApiPath',


        /**
         * Get api path
         * @return {string}
         */
        value: function getApiPath() {
            return 'user';
        }

        /**
         * Assign an object
         * @return {UserModel}
         */

    }, {
        key: 'getDataObject',
        value: function getDataObject() {
            return new _userModel2.default();
        }

        /**
         * Get current authenticate user data
         * @return {Promise}
         */

    }, {
        key: 'me',
        value: function me() {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/me').then(function (result) {
                    // console.log(result)
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data));
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
    }]);

    return UserApi;
}(_baseApi2.default);

exports.default = UserApi;