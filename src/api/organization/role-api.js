import BaseApi from '../base-api'
import OrganizationRoleModel from '../../model/organization/role-model'

class OrganizationRoleApi extends BaseApi {

    constructor () { super() }

    /**
     * Assign an object
     * @return {OrganizationRoleModel}
     */
    getDataObject () {
        return new OrganizationRoleModel()
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'organization/generics/roles'
    }
}

export default OrganizationRoleApi
