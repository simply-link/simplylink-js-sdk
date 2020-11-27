'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _baseModel = require('../base-model');

var _baseModel2 = _interopRequireDefault(_baseModel);

var _currenciesModel = require('../generic/currencies-model');

var _currenciesModel2 = _interopRequireDefault(_currenciesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppsPlanModel = function (_BaseModel) {
    _inherits(AppsPlanModel, _BaseModel);

    function AppsPlanModel() {
        _classCallCheck(this, AppsPlanModel);

        var _this = _possibleConstructorReturn(this, (AppsPlanModel.__proto__ || Object.getPrototypeOf(AppsPlanModel)).call(this));

        _this._id;
        _this._price;
        _this._currency;
        _this._trailDays;
        _this._features;
        _this._plan;
        return _this;
    }

    _createClass(AppsPlanModel, [{
        key: 'parseDataFromResourceServer',


        /**
         * Parse data from resource to an object
         * @param resource
         * @return {AppsPlanModel}
         */
        value: function parseDataFromResourceServer(resource) {
            this.id = resource.id || 0;
            this.price = resource.price || 0.0;
            this.trailDays = resource.trailDays || 0;
            this.features = resource.features || [];
            this.plan = resource.plan || '';
            var currency = resource.currency || null;
            if (_underscore2.default.isObject(currency)) {
                var mpCurrencyModel = new _currenciesModel2.default();
                this.currency = mpCurrencyModel.parseDataFromResourceServer(resource.currency);
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
        key: 'price',
        get: function get() {
            return this._price;
        },
        set: function set(value) {
            this._price = value;
        }
    }, {
        key: 'currency',
        get: function get() {
            return this._currency;
        },
        set: function set(value) {
            this._currency = value;
        }
    }, {
        key: 'trailDays',
        get: function get() {
            return this._trailDays;
        },
        set: function set(value) {
            this._trailDays = value;
        }
    }, {
        key: 'features',
        get: function get() {
            return this._features;
        },
        set: function set(value) {
            this._features = value;
        }
    }, {
        key: 'plan',
        get: function get() {
            return this._plan;
        },
        set: function set(value) {
            this._plan = value;
        }
    }]);

    return AppsPlanModel;
}(_baseModel2.default);

exports.default = AppsPlanModel;