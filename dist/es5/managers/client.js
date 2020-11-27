'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    client: {
        clientId: '',
        secret: '',
        redirectUri: '',
        prod: false,
        locale: 'en'
    },

    getClient: function getClient() {
        return this.client;
    },
    setClient: function setClient(client) {
        this.client = client;
    },
    init: function init(client) {
        if (!client) {
            throw new Error('Missing client data');
        }

        if (!client.clientId) {
            throw new Error('Missing client id');
        }

        if (!client.secret) {
            throw new Error('Missing client secret');
        }

        var clientInfo = {
            clientId: client.clientId,
            secret: client.secret
        };

        if (client.redirectUri) {
            clientInfo.redirectUri = client.redirectUri;
        }

        clientInfo.prod = client.prod || false;

        clientInfo.locale = client.locale || 'en';

        this.setClient(clientInfo);
    }
};