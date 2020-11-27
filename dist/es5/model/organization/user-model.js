'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require('../base-model');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _organizationModel = require('./organization-model');

var _organizationModel2 = _interopRequireDefault(_organizationModel);

var _roleModel = require('./role-model');

var _roleModel2 = _interopRequireDefault(_roleModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrganizationUserModel = function (_BaseModel) {
    _inherits(OrganizationUserModel, _BaseModel);

    function OrganizationUserModel() {
        _classCallCheck(this, OrganizationUserModel);

        var _this = _possibleConstructorReturn(this, (OrganizationUserModel.__proto__ || Object.getPrototypeOf(OrganizationUserModel)).call(this));

        _this._id;
        _this._firstName;
        _this._lastName;
        _this._profilePic;
        _this._userId;
        _this._role;
        _this._phone;
        _this._email;
        _this._organization;
        return _this;
    }

    _createClass(OrganizationUserModel, [{
        key: 'getFullName',
        value: function getFullName() {
            return this.firstName + ' ' + this.lastName;
        }

        /**
         * Parse data from resource to an object
         * @param resource
         * @return {OrganizationUserModel}
         */

    }, {
        key: 'parseDataFromResourceServer',
        value: function parseDataFromResourceServer(resource) {
            this.id = resource.id || 0;
            this.firstName = resource.firstName || '';
            this.lastName = resource.lastName || '';
            this.userId = resource.userId || '';
            this.profilePic = resource.profilePic || '';
            this.phone = resource.phone || '';
            this.email = resource.email || '';

            var role = resource.role || null;
            if (role) {
                var roleModel = new _roleModel2.default();
                this.role = roleModel.parseDataFromResourceServer(resource.role);
            }

            if (resource.organization) {
                var organizationModel = new _organizationModel2.default();
                this.organization = organizationModel.parseDataFromResourceServer(resource.organization);
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
        key: 'role',
        get: function get() {
            return this._role;
        },
        set: function set(value) {
            this._role = value;
        }
    }, {
        key: 'organization',
        get: function get() {
            return this._organization;
        },
        set: function set(value) {
            this._organization = value;
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
        key: 'profilePic',
        get: function get() {
            return this._profilePic;
        },
        set: function set(value) {
            this._profilePic = value;
        }
    }, {
        key: 'userId',
        get: function get() {
            return this._userId;
        },
        set: function set(value) {
            this._userId = value;
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
        key: 'phone',
        get: function get() {
            return this._phone;
        },
        set: function set(value) {
            this._phone = value;
        }
    }]);

    return OrganizationUserModel;
}(_baseModel2.default);

exports.default = OrganizationUserModel;