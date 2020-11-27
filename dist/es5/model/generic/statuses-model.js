'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _baseModel = require('../base-model');

var _baseModel2 = _interopRequireDefault(_baseModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GenericStatusesModel = function (_BaseModel) {
    _inherits(GenericStatusesModel, _BaseModel);

    function GenericStatusesModel() {
        _classCallCheck(this, GenericStatusesModel);

        var _this = _possibleConstructorReturn(this, (GenericStatusesModel.__proto__ || Object.getPrototypeOf(GenericStatusesModel)).call(this));

        _this._id = 0;
        _this._name = '';
        return _this;
    }

    _createClass(GenericStatusesModel, [{
        key: 'parseDataFromResourceServer',


        /**
         * Parse data from resource to an object
         * @param resource
         * @return {GenericStatusesModel}
         */
        value: function parseDataFromResourceServer(resource) {
            this.id = resource.id || 0;
            this.name = resource.name || '';
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
    }]);

    return GenericStatusesModel;
}(_baseModel2.default);

exports.default = GenericStatusesModel;