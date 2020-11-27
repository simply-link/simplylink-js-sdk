'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require('../base-model');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _userModel = require('./user-model');

var _userModel2 = _interopRequireDefault(_userModel);

var _countriesModel = require('../generic/countries-model');

var _countriesModel2 = _interopRequireDefault(_countriesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationModel = function (_BaseModel) {
    _inherits(OrganizationModel, _BaseModel);

    function OrganizationModel() {
        _classCallCheck(this, OrganizationModel);

        var _this = _possibleConstructorReturn(this, (OrganizationModel.__proto__ || Object.getPrototypeOf(OrganizationModel)).call(this));

        _this._id = 0;
        _this._name = '';
        _this._profilePic = '';
        _this._legalEntityName = '';
        _this._paymentGateway = null;
        _this._taxId = '';
        _this._website = '';
        _this._phone = '';
        _this._billingEmail = '';
        _this._addressStreet = '';
        _this._addressCity = '';
        _this._addressZipCode = '';
        _this._addressCountry = [];
        _this._users = [];
        return _this;
    }

    _createClass(OrganizationModel, [{
        key: 'getShortName',
        value: function getShortName() {
            return this.name.charAt(0);
        }

        /**
         * Parse data from resource to an object
         * @param resource
         * @return {OrganizationModel}
         */

    }, {
        key: 'parseDataFromResourceServer',
        value: function parseDataFromResourceServer(resource) {
            this.id = resource.id || 0;
            this.name = resource.name || '';
            this.profilePic = resource.profilePic || '';
            this.legalEntityName = resource.legalEntityName || '';
            this.paymentGateway = resource.paymentGateway || null;
            this.taxId = resource.taxId || '';
            this.website = resource.website || '';
            this.phone = resource.phone || '';
            this.billingEmail = resource.billingEmail || '';
            this.addressStreet = resource.addressStreet || '';
            this.addressCity = resource.addressCity || '';
            this.addressZipCode = resource.addressZipCode || '';

            var addressCountry = resource.addressCountry || null;
            if (_underscore2.default.isObject(addressCountry)) {
                var countryObject = new _countriesModel2.default();
                this.addressCountry = countryObject.parseDataFromResourceServer(addressCountry);
            }
            var users = resource.users || [];
            if (_underscore2.default.isArray(users) && users.length > 0) {
                var inThis = this;
                _underscore2.default.map(users, function (user) {
                    var organizationUser = new _userModel2.default();
                    inThis.users.push(organizationUser.parseDataFromResourceServer(user));
                });
            }
            return this;
        }
    }, {
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(value) {
            this._id = value;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(value) {
            this._name = value;
        }
    }, {
        key: 'profilePic',
        get: function get() {
            return this._profilePic;
        },
        set: function set(value) {
            this._profilePic = value;
        }
    }, {
        key: 'legalEntityName',
        get: function get() {
            return this._legalEntityName;
        },
        set: function set(value) {
            this._legalEntityName = value;
        }
    }, {
        key: 'paymentGateway',
        get: function get() {
            return this._paymentGateway;
        },
        set: function set(value) {
            this._paymentGateway = value;
        }
    }, {
        key: 'taxId',
        get: function get() {
            return this._taxId;
        },
        set: function set(value) {
            this._taxId = value;
        }
    }, {
        key: 'website',
        get: function get() {
            return this._website;
        },
        set: function set(value) {
            this._website = value;
        }
    }, {
        key: 'phone',
        get: function get() {
            return this._phone;
        },
        set: function set(value) {
            this._phone = value;
        }
    }, {
        key: 'billingEmail',
        get: function get() {
            return this._billingEmail;
        },
        set: function set(value) {
            this._billingEmail = value;
        }
    }, {
        key: 'addressStreet',
        get: function get() {
            return this._addressStreet;
        },
        set: function set(value) {
            this._addressStreet = value;
        }
    }, {
        key: 'addressCity',
        get: function get() {
            return this._addressCity;
        },
        set: function set(value) {
            this._addressCity = value;
        }
    }, {
        key: 'addressZipCode',
        get: function get() {
            return this._addressZipCode;
        },
        set: function set(value) {
            this._addressZipCode = value;
        }
    }, {
        key: 'addressCountry',
        get: function get() {
            return this._addressCountry;
        },
        set: function set(value) {
            this._addressCountry = value;
        }
    }, {
        key: 'users',
        get: function get() {
            return this._users;
        },
        set: function set(value) {
            this._users = value;
        }
    }]);

    return OrganizationModel;
}(_baseModel2.default);

exports.default = OrganizationModel;