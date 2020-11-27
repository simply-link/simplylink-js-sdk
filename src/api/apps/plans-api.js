import BaseApi from '../base-api'
import AppsPlanModel from '../../model/apps/plans-model'

class AppsPlansApi extends BaseApi {

    constructor (appId) {
        super()
        this.appId = appId
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'apps/' + this.appId + '/plans'
    }

    /**
     * Assign an object
     * @return {AppsPlanModel}
     */
    getDataObject () {
        return new AppsPlanModel()
    }
}

export default AppsPlansApi
