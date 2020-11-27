import _ from 'underscore'
import BaseModel from '../base-model'
import GenericCurrenciesModel from '../generic/currencies-model'

class AppsPlanModel extends BaseModel {

    constructor(){
        super()
        this._id
        this._price
        this._currency
        this._trailDays
        this._features
        this._plan
    }

    get id () {
        return this._id
    }

    set id (value) {
        this._id = value
    }

    get price () {
        return this._price
    }

    set price (value) {
        this._price = value
    }

    get currency () {
        return this._currency
    }

    set currency (value) {
        this._currency = value
    }

    get trailDays () {
        return this._trailDays
    }

    set trailDays (value) {
        this._trailDays = value
    }

    get features () {
        return this._features
    }

    set features (value) {
        this._features = value
    }

    get plan () {
        return this._plan
    }

    set plan (value) {
        this._plan = value
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {AppsPlanModel}
     */
    parseDataFromResourceServer (resource) {
        this.id = resource.id || 0
        this.price = resource.price || 0.0
        this.trailDays = resource.trailDays || 0
        this.features = resource.features || []
        this.plan = resource.plan || ''
        let currency = resource.currency || null
        if (_.isObject(currency)) {
            let mpCurrencyModel = new GenericCurrenciesModel()
            this.currency = mpCurrencyModel.parseDataFromResourceServer(resource.currency)
        }
        return this
    }
}

export default AppsPlanModel
