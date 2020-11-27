import BaseModel from '../base-model'

class GenericCountriesModel extends BaseModel {

    constructor(){
        super()
        this._id = 0
        this._name = ''
        this._code = ''
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

    get code () {
        return this._code
    }

    set code (value) {
        this._code = value
    }

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {GenericCountriesModel}
     */
    parseDataFromResourceServer (resource) {
        this.id = resource.id || 0
        this.name = resource.name || ''
        this.code = resource.code || ''
        return this
    }
}

export default GenericCountriesModel
