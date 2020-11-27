import BaseModel from '../base-model'
import OrganizationModel from './organization-model'
import OrganizationRoleModel from './role-model'

class OrganizationUserModel extends BaseModel {

    constructor() {
        super()
        this._id
        this._firstName
        this._lastName
        this._profilePic
        this._userId
        this._role
        this._phone
        this._email
        this._organization
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get role() {
        return this._role
    }

    set role(value) {
        this._role = value
    }

    get organization() {
        return this._organization
    }

    set organization(value) {
        this._organization = value
    }

    get firstName() {
        return this._firstName
    }

    set firstName(value) {
        this._firstName = value
    }

    get lastName() {
        return this._lastName
    }

    set lastName(value) {
        this._lastName = value
    }

    get profilePic() {
        return this._profilePic
    }

    set profilePic(value) {
        this._profilePic = value
    }

    get userId() {
        return this._userId
    }

    set userId(value) {
        this._userId = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get phone() {
        return this._phone
    }

    set phone(value) {
        this._phone = value
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {OrganizationUserModel}
     */
    parseDataFromResourceServer(resource) {
        this.id = resource.id || 0
        this.firstName = resource.firstName || ''
        this.lastName = resource.lastName || ''
        this.userId = resource.userId || ''
        this.profilePic = resource.profilePic || ''
        this.phone = resource.phone || ''
        this.email = resource.email || ''

        let role = resource.role || null
        if (role) {
            let roleModel = new OrganizationRoleModel()
            this.role = roleModel.parseDataFromResourceServer(resource.role)
        }

        if (resource.organization) {
            let organizationModel = new OrganizationModel()
            this.organization = organizationModel.parseDataFromResourceServer(resource.organization)
        }
        return this
    }
}

export default OrganizationUserModel
