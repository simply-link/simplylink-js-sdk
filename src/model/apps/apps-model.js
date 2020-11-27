import BaseModel from '../base-model'

class AppsModel extends BaseModel {

    constructor(){
        super()
        this._id = 0
        this._name = ''
        this._icon = ''
        this._website = ''
        this._shortDescription = ''
        this._fullDescription = ''
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

    get icon () {
        return this._icon
    }

    set icon (value) {
        this._icon = value
    }

    get website () {
        return this._website
    }

    set website (value) {
        this._website = value
    }

    get shortDescription () {
        return this._shortDescription
    }

    set shortDescription (value) {
        this._shortDescription = value
    }

    get fullDescription () {
        return this._fullDescription
    }

    set fullDescription (value) {
        this._fullDescription = value
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {AppsModel}
     */
    parseDataFromResourceServer (resource) {
        this.id = resource.id || 0
        this.name = resource.name || ''
        this.icon = resource.icon || ''
        this.website = resource.website || ''
        this.shortDescription = resource.shortDescription || ''
        this.fullDescription = resource.fullDescription || ''
        return this
    }
}

export default AppsModel
