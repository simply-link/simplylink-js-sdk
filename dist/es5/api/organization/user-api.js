'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseApi = require('../base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

var _userModel = require('../../model/organization/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationUserApi = function (_BaseApi) {
    _inherits(OrganizationUserApi, _BaseApi);

    function OrganizationUserApi(organizationsId) {
        _classCallCheck(this, OrganizationUserApi);

        var _this = _possibleConstructorReturn(this, (OrganizationUserApi.__proto__ || Object.getPrototypeOf(OrganizationUserApi)).call(this));

        _this.organizationsId = organizationsId;
        return _this;
    }

    /**
     * Get api path
     * @return {string}
     */


    _createClass(OrganizationUserApi, [{
        key: 'getApiPath',
        value: function getApiPath() {
            return 'organization/' + this.organizationsId + '/users';
        }

        /**
         * Assign an object
         * @return {OrganizationUserModel}
         */

    }, {
        key: 'getDataObject',
        value: function getDataObject() {
            return new _userModel2.default();
        }
    }]);

    return OrganizationUserApi;
}(_baseApi2.default);

exports.default = OrganizationUserApi;