"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require("../base-model");

var _baseModel2 = _interopRequireDefault(_baseModel);

var _organizationModel = require("./organization-model");

var _organizationModel2 = _interopRequireDefault(_organizationModel);

var _currenciesModel = require("../generic/currencies-model");

var _currenciesModel2 = _interopRequireDefault(_currenciesModel);

var _appsModel = require("../apps/apps-model");

var _appsModel2 = _interopRequireDefault(_appsModel);

var _plansModel = require("../apps/plans-model");

var _plansModel2 = _interopRequireDefault(_plansModel);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationLicenseModel = function (_BaseModel) {
    _inherits(OrganizationLicenseModel, _BaseModel);

    function OrganizationLicenseModel() {
        _classCallCheck(this, OrganizationLicenseModel);

        var _this = _possibleConstructorReturn(this, (OrganizationLicenseModel.__proto__ || Object.getPrototypeOf(OrganizationLicenseModel)).call(this));

        _this._id = null;
        _this._isActive = null;
        _this._organization = null;
        _this._metaData = null;
        _this._externalIdentifier = null;
        _this._application = null;
        _this._plan = null;
        _this._paymentGateway = null;
        _this._currency = null;
        _this._price = null;
        _this._billingOn = null;
        return _this;
    }

    _createClass(OrganizationLicenseModel, [{
        key: "parseDataFromResourceServer",


        /**
         * Parse data from resource to an object
         * @param resource
         * @return {OrganizationLicenseModel}
         */
        value: function parseDataFromResourceServer(resource) {
            this.id = resource['id'] || null;
            this.isActive = _underscore2.default.isBoolean(resource['isActive']) ? resource['isActive'] : null;
            this.metaData = resource['metaData'] || null;
            this.externalIdentifier = resource['externalIdentifier'] || null;
            this.paymentGateway = resource['paymentGateway'] || null;
            this.price = resource['price'] || null;
            this.billingOn = resource['billingOn'] || null;

            if (resource['organization']) {
                var organizationMolder = new _organizationModel2.default();
                this.organization = organizationMolder.parseDataFromResourceServer(resource['organization']);
            }

            if (resource['currency']) {
                var currencyModel = new _currenciesModel2.default();
                this.currency = currencyModel.parseDataFromResourceServer(resource['currency']);
            }

            if (resource['application']) {
                var applicationModel = new _appsModel2.default();
                this.application = applicationModel.parseDataFromResourceServer(resource['application']);
            }

            if (resource['plan']) {
                var planModel = new _plansModel2.default();
                this.plan = planModel.parseDataFromResourceServer(resource['plan']);
            }

            return this;
        }
    }, {
        key: "id",
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: "isActive",
        get: function get() {
            return this._isActive;
        },
        set: function set(value) {
            this._isActive = value;
        }
    }, {
        key: "organization",
        get: function get() {
            return this._organization;
        },
        set: function set(value) {
            this._organization = value;
        }
    }, {
        key: "metaData",
        get: function get() {
            return this._metaData;
        },
        set: function set(value) {
            this._metaData = value;
        }
    }, {
        key: "externalIdentifier",
        get: function get() {
            return this._externalIdentifier;
        },
        set: function set(value) {
            this._externalIdentifier = value;
        }
    }, {
        key: "application",
        get: function get() {
            return this._application;
        },
        set: function set(value) {
            this._application = value;
        }
    }, {
        key: "plan",
        get: function get() {
            return this._plan;
        },
        set: function set(value) {
            this._plan = value;
        }
    }, {
        key: "paymentGateway",
        get: function get() {
            return this._paymentGateway;
        },
        set: function set(value) {
            this._paymentGateway = value;
        }
    }, {
        key: "currency",
        get: function get() {
            return this._currency;
        },
        set: function set(value) {
            this._currency = value;
        }
    }, {
        key: "price",
        get: function get() {
            return this._price;
        },
        set: function set(value) {
            this._price = value;
        }
    }, {
        key: "billingOn",
        get: function get() {
            return this._billingOn;
        },
        set: function set(value) {
            this._billingOn = value;
        }
    }]);

    return OrganizationLicenseModel;
}(_baseModel2.default);

exports.default = OrganizationLicenseModel;