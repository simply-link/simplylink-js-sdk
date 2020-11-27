import _ from 'underscore'
import MPBaseModel from '../base-model'
import MPOrganizationUserModel from '../organization/user-model'

class MPUserModel extends MPBaseModel {

    constructor() {
        super()
        this._id = 0
        this._firstName = ''
        this._lastName = ''
        this._phone = ''
        this._language = ''
        this._email = ''
        this._profilePic = ''
        this._organizations = []
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
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

    get phone() {
        return this._phone
    }

    set phone(value) {
        this._phone = value
    }

    get language() {
        return this._language
    }

    set language(value) {
        this._language = value
    }

    get email() {
        return this._email
    }

    set email(value) {
        this._email = value
    }

    get profilePic() {
        return this._profilePic
    }

    set profilePic(value) {
        this._profilePic = value
    }

    get organizations() {
        return this._organizations
    }

    set organizations(value) {
        this._organizations = value
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName
    }

    /**
     * Check if user has role admin by organization id
     * @param {number} organizationId
     * @return {boolean}
     */
    hasRoleAdmin(organizationId) {
        let status = false
        _.mapObject(this.organizations, function (orgUser) {
            if (orgUser.organization.id === organizationId && orgUser.role.id === orgUser.role.ROLE_ADMIN) {
                status = true
                return
            }
        })
        return status
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {MPUserModel}
     */
    parseDataFromResourceServer(resource) {
        this.id = resource['id'] || 0
        this.firstName = resource['firstName'] || ''
        this.lastName = resource['lastName'] || ''
        this.email = resource['email'] || ''
        this.phone = resource['phone'] || ''
        this.language = resource['language'] || ''
        this.profilePic = resource['profilePic'] || ''
        let organizations = resource['organizations'] || []
        if (_.isArray(organizations) && organizations.length > 0) {
            let inThis = this
            _.map(organizations, function (org) {
                let organizationUserModel = new MPOrganizationUserModel()
                inThis.organizations.push(organizationUserModel.parseDataFromResourceServer(org))
            })
        }
        return this
    }
}

export default MPUserModel
