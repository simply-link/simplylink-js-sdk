import BaseModel from "../base-model";
import OrganizationModel from "./organization-model";
import GenericCurrenciesModel from "../generic/currencies-model";
import AppsModel from "../apps/apps-model";
import AppsPlanModel from "../apps/plans-model";

import _ from 'underscore'

class OrganizationLicenseModel extends BaseModel {

    constructor() {
        super()
        this._id = null
        this._isActive = null
        this._organization = null
        this._metaData = null
        this._externalIdentifier = null
        this._application = null
        this._plan = null
        this._paymentGateway = null
        this._currency = null
        this._price = null
        this._billingOn = null
    }

    get id() {
        return this._id
    }

    set id(value) {
        this._id = value
    }

    get isActive() {
        return this._isActive
    }

    set isActive(value) {
        this._isActive = value
    }

    get organization() {
        return this._organization
    }

    set organization(value) {
        this._organization = value
    }

    get metaData() {
        return this._metaData
    }

    set metaData(value) {
        this._metaData = value
    }

    get externalIdentifier() {
        return this._externalIdentifier
    }

    set externalIdentifier(value) {
        this._externalIdentifier = value
    }

    get application() {
        return this._application
    }

    set application(value) {
        this._application = value
    }

    get plan() {
        return this._plan
    }

    set plan(value) {
        this._plan = value
    }

    get paymentGateway() {
        return this._paymentGateway
    }

    set paymentGateway(value) {
        this._paymentGateway = value
    }

    get currency() {
        return this._currency
    }

    set currency(value) {
        this._currency = value
    }

    get price() {
        return this._price
    }

    set price(value) {
        this._price = value
    }

    get billingOn() {
        return this._billingOn
    }

    set billingOn(value) {
        this._billingOn = value
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {OrganizationLicenseModel}
     */
    parseDataFromResourceServer(resource) {
        this.id = resource['id'] || null
        this.isActive = _.isBoolean(resource['isActive']) ? resource['isActive'] : null
        this.metaData = resource['metaData'] || null
        this.externalIdentifier = resource['externalIdentifier'] || null
        this.paymentGateway = resource['paymentGateway'] || null
        this.price = resource['price'] || null
        this.billingOn = resource['billingOn'] || null

        if (resource['organization']) {
            let organizationMolder = new OrganizationModel()
            this.organization = organizationMolder.parseDataFromResourceServer(resource['organization'])
        }

        if (resource['currency']) {
            let currencyModel = new GenericCurrenciesModel()
            this.currency = currencyModel.parseDataFromResourceServer(resource['currency'])
        }

        if (resource['application']) {
            let applicationModel = new AppsModel()
            this.application = applicationModel.parseDataFromResourceServer(resource['application'])
        }

        if (resource['plan']) {
            let planModel = new AppsPlanModel()
            this.plan = planModel.parseDataFromResourceServer(resource['plan'])
        }

        return this
    }
}

export default OrganizationLicenseModel
