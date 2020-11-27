import BaseModel from '../base-model'

class GenericStatusesModel extends BaseModel {

    constructor(){
        super()
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

    /**
     * Parse data from resource to an object
     * @param resource
     * @return {GenericStatusesModel}
     */
    parseDataFromResourceServer (resource) {
        this.id = resource.id || 0
        this.name = resource.name || ''
        return this
    }
}

export default GenericStatusesModel
