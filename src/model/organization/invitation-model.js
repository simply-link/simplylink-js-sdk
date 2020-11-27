import BaseModel from '../base-model'

class OrganizationInvitationModel extends BaseModel {

    constructor(){
        super()
        this._id = 0
        this._name = ''
        this._created = ''
        this._updated = ''
        this._invitationUniqueIdentifier = ''
        this._email = ''
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

    get created () {
        return this._created
    }

    set created (value) {
        this._created = value
    }

    get updated () {
        return this._updated
    }

    set updated (value) {
        this._updated = value
    }

    get invitationUniqueIdentifier () {
        return this._invitationUniqueIdentifier
    }

    set invitationUniqueIdentifier (value) {
        this._invitationUniqueIdentifier = value
    }

    get email () {
        return this._email
    }

    set email (value) {
        this._email = value
    }

    getShortName () {
        return this.name.split(' ').map(function (s) { return s.charAt(0) }).join('')
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {OrganizationInvitationModel}
     */
    parseDataFromResourceServer (resource) {
        this.id = resource['id'] || 0
        this.name = resource['name'] || ''
        this.created = resource['created'] || ''
        this.updated = resource['updated'] || ''
        this.invitationUniqueIdentifier = resource['invitationUniqueIdentifier'] || ''
        this.email = resource['email'] || ''
        return this
    }
}

export default OrganizationInvitationModel
