'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseApi = require('../base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

var _invitationModel = require('../../model/organization/invitation-model');

var _invitationModel2 = _interopRequireDefault(_invitationModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationInvitationApi = function (_BaseApi) {
    _inherits(OrganizationInvitationApi, _BaseApi);

    function OrganizationInvitationApi(organizationsId) {
        _classCallCheck(this, OrganizationInvitationApi);

        var _this2 = _possibleConstructorReturn(this, (OrganizationInvitationApi.__proto__ || Object.getPrototypeOf(OrganizationInvitationApi)).call(this));

        _this2.organizationsId = organizationsId;
        return _this2;
    }

    /**
     * Resend invitation witch already created
     * @param {number} invitationId
     * @return {Promise}
     */


    _createClass(OrganizationInvitationApi, [{
        key: 'resendInvitation',
        value: function resendInvitation(invitationId) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/' + invitationId + '/resend').then(function (result) {
                    resolve(result.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Accept invitation
         * @param {string} invitationIdentifier
         * @return {Promise}
         */

    }, {
        key: 'acceptInvitation',
        value: function acceptInvitation(invitationIdentifier) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/accept/' + invitationIdentifier).then(function (result) {
                    resolve(result.data);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }

        /**
         * Get api path
         * @return {string}
         */

    }, {
        key: 'getApiPath',
        value: function getApiPath() {
            return 'organization/' + this.organizationsId + '/invitations';
        }

        /**
         * Assign an object
         * @return {OrganizationInvitationModel}
         */

    }, {
        key: 'getDataObject',
        value: function getDataObject() {
            return new _invitationModel2.default();
        }
    }]);

    return OrganizationInvitationApi;
}(_baseApi2.default);

exports.default = OrganizationInvitationApi;