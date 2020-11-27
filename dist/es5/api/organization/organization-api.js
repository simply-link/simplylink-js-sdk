'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseApi = require('../base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

var _organizationModel = require('../../model/organization/organization-model');

var _organizationModel2 = _interopRequireDefault(_organizationModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationApi = function (_BaseApi) {
    _inherits(OrganizationApi, _BaseApi);

    function OrganizationApi() {
        _classCallCheck(this, OrganizationApi);

        return _possibleConstructorReturn(this, (OrganizationApi.__proto__ || Object.getPrototypeOf(OrganizationApi)).call(this));
    }

    /**
     * Assign an object
     * @return { OrganizationModel }
     */


    _createClass(OrganizationApi, [{
        key: 'getDataObject',
        value: function getDataObject() {
            return new _organizationModel2.default();
        }

        /**
         * Get api path
         * @return {string}
         */

    }, {
        key: 'getApiPath',
        value: function getApiPath() {
            return 'organization';
        }
    }]);

    return OrganizationApi;
}(_baseApi2.default);

exports.default = OrganizationApi;