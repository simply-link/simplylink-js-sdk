import BaseApi from '../base-api'
import OrganizationInvitationModel from '../../model/organization/invitation-model'

class OrganizationInvitationApi extends BaseApi {

    constructor(organizationsId) {
        super()
        this.organizationsId = organizationsId
    }

    /**
     * Resend invitation witch already created
     * @param {number} invitationId
     * @return {Promise}
     */
    resendInvitation(invitationId) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/' + invitationId + '/resend')
                .then(result => {
                    resolve(result.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Accept invitation
     * @param {string} invitationIdentifier
     * @return {Promise}
     */
    acceptInvitation(invitationIdentifier) {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/accept/' + invitationIdentifier)
                .then(result => {
                    resolve(result.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath() {
        return 'organization/' + this.organizationsId + '/invitations'
    }

    /**
     * Assign an object
     * @return {OrganizationInvitationModel}
     */
    getDataObject() {
        return new OrganizationInvitationModel()
    }
}

export default OrganizationInvitationApi
