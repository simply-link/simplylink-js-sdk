import BaseApi from '../base-api'
import OrganizationUserModel from '../../model/organization/user-model'

class OrganizationUserApi extends BaseApi {

    constructor (organizationsId) {
        super()
        this.organizationsId = organizationsId
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'organization/' + this.organizationsId + '/users'
    }

    /**
     * Assign an object
     * @return {OrganizationUserModel}
     */
    getDataObject () {
        return new OrganizationUserModel()
    }
}

export default OrganizationUserApi
