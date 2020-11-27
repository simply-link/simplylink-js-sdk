'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userApi = require('../api/user/user-api');

var _userApi2 = _interopRequireDefault(_userApi);

var _appsApi = require('../api/apps/apps-api');

var _appsApi2 = _interopRequireDefault(_appsApi);

var _organizationApi = require('../api/organization/organization-api');

var _organizationApi2 = _interopRequireDefault(_organizationApi);

var _userApi3 = require('../api/organization/user-api');

var _userApi4 = _interopRequireDefault(_userApi3);

var _invitationApi = require('../api/organization/invitation-api');

var _invitationApi2 = _interopRequireDefault(_invitationApi);

var _licenseApi = require('../api/organization/license-api');

var _licenseApi2 = _interopRequireDefault(_licenseApi);

var _roleApi = require('../api/organization/role-api');

var _roleApi2 = _interopRequireDefault(_roleApi);

var _countriesApi = require('../api/generic/countries-api');

var _countriesApi2 = _interopRequireDefault(_countriesApi);

var _currenciesApi = require('../api/generic/currencies-api');

var _currenciesApi2 = _interopRequireDefault(_currenciesApi);

var _languagesApi = require('../api/generic/languages-api');

var _languagesApi2 = _interopRequireDefault(_languagesApi);

var _statusesApi = require('../api/generic/statuses-api');

var _statusesApi2 = _interopRequireDefault(_statusesApi);

var _plansApi = require('../api/apps/plans-api');

var _plansApi2 = _interopRequireDefault(_plansApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Step to register new model
// 1. create api file
// 2. create model object
// 3. register in this file

// when call api.{some model},
// its create a new api object, instead of calling 'new' any time

exports.default = {
    user: function user() {
        return new _userApi2.default();
    },
    apps: function apps() {
        return new _appsApi2.default();
    },
    appsPlan: function appsPlan(appId) {
        return new _plansApi2.default(appId);
    },
    organization: function organization() {
        return new _organizationApi2.default();
    },
    organizationRole: function organizationRole(organizationId) {
        return new _roleApi2.default(organizationId);
    },
    organizationUser: function organizationUser(organizationId) {
        return new _userApi4.default(organizationId);
    },
    organizationLicense: function organizationLicense(organizationId) {
        return new _licenseApi2.default(organizationId);
    },
    organizationInvitation: function organizationInvitation(organizationId) {
        return new _invitationApi2.default(organizationId);
    },
    genericCountries: function genericCountries() {
        return new _countriesApi2.default();
    },
    genericLanguages: function genericLanguages() {
        return new _currenciesApi2.default();
    },
    genericCurrencies: function genericCurrencies() {
        return new _languagesApi2.default();
    },
    genericStatuses: function genericStatuses() {
        return new _statusesApi2.default();
    }
};