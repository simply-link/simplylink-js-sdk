import BaseApi from '../base-api'
import OrganizationModel from '../../model/organization/organization-model'

class OrganizationApi extends BaseApi {

    constructor () {
        super()
    }

    /**
     * Assign an object
     * @return { OrganizationModel }
     */
    getDataObject () {
        return new OrganizationModel()
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'organization'
    }
}

export default OrganizationApi
