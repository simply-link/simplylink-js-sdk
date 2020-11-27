import BaseApi from '../base-api'
import AppsModel from '../../model/apps/apps-model'

class AppsApi extends BaseApi {

    /**
     * Get api path
     * @return {string}
     */
    getApiPath() {
        return 'apps'
    }

    /**
     * Assign an object
     * @return {AppsModel}
     */
    getDataObject() {
        return new AppsModel()
    }

    /**
     * Get current app data
     * @return {Promise}
     */
    me() {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/me')
                .then(result => {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default AppsApi
