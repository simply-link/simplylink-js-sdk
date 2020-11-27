'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseApi = require('../base-api');

var _baseApi2 = _interopRequireDefault(_baseApi);

var _countriesModel = require('../../model/generic/countries-model');

var _countriesModel2 = _interopRequireDefault(_countriesModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountriesApi = function (_BaseApi) {
    _inherits(CountriesApi, _BaseApi);

    function CountriesApi() {
        _classCallCheck(this, CountriesApi);

        return _possibleConstructorReturn(this, (CountriesApi.__proto__ || Object.getPrototypeOf(CountriesApi)).apply(this, arguments));
    }

    _createClass(CountriesApi, [{
        key: 'getApiPath',
        value: function getApiPath() {
            return 'generics/countries';
        }
    }, {
        key: 'getDataObject',
        value: function getDataObject() {
            return new _countriesModel2.default();
        }
    }]);

    return CountriesApi;
}(_baseApi2.default);

exports.default = CountriesApi;