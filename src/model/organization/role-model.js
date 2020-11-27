import BaseModel from '../base-model'

class OrganizationRoleModel extends BaseModel {

    constructor(){
        super()
        this._ROLE_ADMIN = 20
        this._ROLE_USER = 30

        this._id = 0
        this._name = ''
    }

    get id () {
        return this._id
    }

    set id (value) {
        this._id = value
    }

    get name () {
        return this._name
    }

    set name (value) {
        this._name = value
    }

    get ROLE_ADMIN () {
        return this._ROLE_ADMIN
    }

    set ROLE_ADMIN (value) {
        this._ROLE_ADMIN = value
    }

    get ROLE_USER () {
        return this._ROLE_USER
    }

    set ROLE_USER (value) {
        this._ROLE_USER = value
    }

    getRoleIdByName (name) {
        switch (name) {
            case 'ROLE_ADMIN':
                return this.ROLE_ADMIN
            case 'ROLE_USER':
                return this.ROLE_USER
            default:
                return null
        }
    }

    getAllRoles () {
        return [
            {id: this.ROLE_ADMIN, name: 'ROLE_ADMIN'},
            {id: this.ROLE_USER, name: 'ROLE_USER'}
        ]
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {OrganizationRoleModel}
     */
    parseDataFromResourceServer (resource) {
        if (typeof resource === 'string') {
            let role = {}
            role.id = this.getRoleIdByName(resource)
            role.name = resource
            resource = role
        }
        this.id = resource['id'] || 0
        this.name = resource['name'] || ''
        return this
    }
}

export default OrganizationRoleModel
