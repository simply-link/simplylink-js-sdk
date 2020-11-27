import BaseModel from '../base-model'
import _ from 'underscore'
import OrganizationUserModel from './user-model'
import GenericCountriesModel from '../generic/countries-model'

class OrganizationModel extends BaseModel {

    constructor() {
        super()
        this._id = 0
        this._name = ''
        this._profilePic = ''
        this._legalEntityName = ''
        this._paymentGateway = null
        this._taxId = ''
        this._website = ''
        this._phone = ''
        this._billingEmail = ''
        this._addressStreet = ''
        this._addressCity = ''
        this._addressZipCode = ''
        this._addressCountry = []
        this._users = []
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value
    }

    get profilePic() {
        return this._profilePic
    }

    set profilePic(value) {
        this._profilePic = value
    }

    get legalEntityName() {
        return this._legalEntityName
    }

    set legalEntityName(value) {
        this._legalEntityName = value
    }

    get paymentGateway() {
        return this._paymentGateway;
    }

    set paymentGateway(value) {
        this._paymentGateway = value;
    }

    get taxId() {
        return this._taxId
    }

    set taxId(value) {
        this._taxId = value
    }

    get website() {
        return this._website
    }

    set website(value) {
        this._website = value
    }

    get phone() {
        return this._phone
    }

    set phone(value) {
        this._phone = value
    }

    get billingEmail() {
        return this._billingEmail
    }

    set billingEmail(value) {
        this._billingEmail = value
    }

    get addressStreet() {
        return this._addressStreet
    }

    set addressStreet(value) {
        this._addressStreet = value
    }

    get addressCity() {
        return this._addressCity
    }

    set addressCity(value) {
        this._addressCity = value
    }

    get addressZipCode() {
        return this._addressZipCode
    }

    set addressZipCode(value) {
        this._addressZipCode = value
    }

    get addressCountry() {
        return this._addressCountry
    }

    set addressCountry(value) {
        this._addressCountry = value
    }

    get users() {
        return this._users
    }

    set users(value) {
        this._users = value
    }

    getShortName() {
        return this.name.charAt(0)
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {OrganizationModel}
     */
    parseDataFromResourceServer(resource) {
        this.id = resource.id || 0
        this.name = resource.name || ''
        this.profilePic = resource.profilePic || ''
        this.legalEntityName = resource.legalEntityName || ''
        this.paymentGateway = resource.paymentGateway || null
        this.taxId = resource.taxId || ''
        this.website = resource.website || ''
        this.phone = resource.phone || ''
        this.billingEmail = resource.billingEmail || ''
        this.addressStreet = resource.addressStreet || ''
        this.addressCity = resource.addressCity || ''
        this.addressZipCode = resource.addressZipCode || ''

        let addressCountry = resource.addressCountry || null
        if (_.isObject(addressCountry)) {
            let countryObject = new GenericCountriesModel()
            this.addressCountry = countryObject.parseDataFromResourceServer(addressCountry)
        }
        let users = resource.users || []
        if (_.isArray(users) && users.length > 0) {
            var inThis = this
            _.map(users, function (user) {
                let organizationUser = new OrganizationUserModel()
                inThis.users.push(organizationUser.parseDataFromResourceServer(user))
            })
        }
        return this
    }
}

export default OrganizationModel
