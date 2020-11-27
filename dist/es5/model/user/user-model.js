'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _baseModel = require('../base-model');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _userModel = require('../organization/user-model');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MPUserModel = function (_MPBaseModel) {
    _inherits(MPUserModel, _MPBaseModel);

    function MPUserModel() {
        _classCallCheck(this, MPUserModel);

        var _this = _possibleConstructorReturn(this, (MPUserModel.__proto__ || Object.getPrototypeOf(MPUserModel)).call(this));

        _this._id = 0;
        _this._firstName = '';
        _this._lastName = '';
        _this._phone = '';
        _this._language = '';
        _this._email = '';
        _this._profilePic = '';
        _this._organizations = [];
        return _this;
    }

    _createClass(MPUserModel, [{
        key: 'getFullName',
        value: function getFullName() {
            return this.firstName + ' ' + this.lastName;
        }

        /**
         * Check if user has role admin by organization id
         * @param {number} organizationId
         * @return {boolean}
         */

    }, {
        key: 'hasRoleAdmin',
        value: function hasRoleAdmin(organizationId) {
            var status = false;
            _underscore2.default.mapObject(this.organizations, function (orgUser) {
                if (orgUser.organization.id === organizationId && orgUser.role.id === orgUser.role.ROLE_ADMIN) {
                    status = true;
                    return;
                }
            });
            return status;
        }

        /**
         * Parse data from resource to an object
         * @param resource
         * @return {MPUserModel}
         */

    }, {
        key: 'parseDataFromResourceServer',
        value: function parseDataFromResourceServer(resource) {
            this.id = resource['id'] || 0;
            this.firstName = resource['firstName'] || '';
            this.lastName = resource['lastName'] || '';
            this.email = resource['email'] || '';
            this.phone = resource['phone'] || '';
            this.language = resource['language'] || '';
            this.profilePic = resource['profilePic'] || '';
            var organizations = resource['organizations'] || [];
            if (_underscore2.default.isArray(organizations) && organizations.length > 0) {
                var inThis = this;
                _underscore2.default.map(organizations, function (org) {
                    var organizationUserModel = new _userModel2.default();
                    inThis.organizations.push(organizationUserModel.parseDataFromResourceServer(org));
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
        key: 'firstName',
        get: function get() {
            return this._firstName;
        },
        set: function set(value) {
            this._firstName = value;
        }
    }, {
        key: 'lastName',
        get: function get() {
            return this._lastName;
        },
        set: function set(value) {
            this._lastName = value;
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
        key: 'language',
        get: function get() {
            return this._language;
        },
        set: function set(value) {
            this._language = value;
        }
    }, {
        key: 'email',
        get: function get() {
            return this._email;
        },
        set: function set(value) {
            this._email = value;
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
        key: 'organizations',
        get: function get() {
            return this._organizations;
        },
        set: function set(value) {
            this._organizations = value;
        }
    }]);

    return MPUserModel;
}(_baseModel2.default);

exports.default = MPUserModel;