'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _client = require('./managers/client');

var _client2 = _interopRequireDefault(_client);

var _api = require('./managers/api');

var _api2 = _interopRequireDefault(_api);

var _scope = require('./managers/scope');

var _scope2 = _interopRequireDefault(_scope);

var _auth = require('./managers/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var collection = { client: _client2.default, api: _api2.default, scope: _scope2.default, auth: _auth2.default };

var Plugin = {
    install: function install(Vue) {
        Vue.mp = collection;
        Object.defineProperties(Vue.prototype, {
            $mp: {
                get: function get() {
                    return collection;
                }
            }
        });
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

exports.default = Plugin;