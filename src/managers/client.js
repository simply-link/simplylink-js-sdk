export default {
    client: {
        clientId: '',
        secret: '',
        redirectUri: '',
        prod: false,
        locale: 'en'
    },

    getClient() {
        return this.client
    },
    setClient(client) {
        this.client = client
    },
    init(client) {
        if (!client) {
            throw new Error('Missing client data')
        }

        if (!client.clientId) {
            throw new Error('Missing client id')
        }

        if (!client.secret) {
            throw new Error('Missing client secret')
        }

        let clientInfo = {
            clientId: client.clientId,
            secret: client.secret
        }

        if (client.redirectUri) {
            clientInfo.redirectUri = client.redirectUri
        }

        clientInfo.prod = client.prod || false

        clientInfo.locale = client.locale || 'en'

        this.setClient(clientInfo)
    }
}
