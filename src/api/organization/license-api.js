import BaseApi from "../base-api";
import OrganizationLicenseModel from "../../model/organization/license-model";

class OrganizationLicenseApi extends BaseApi {

    constructor (appId) {
        super()
        this.organizationsId = appId
    }

    /**
     * Assign an object
     * @return {OrganizationLicenseModel}
     */
    getDataObject () {
        return new OrganizationLicenseModel()
    }

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'organization/' + this.organizationsId + '/license'
    }

    /**
     * validate current app if license exist
     * @return {Promise}
     */
    validate () {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/validate')
                .then(result => {
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default OrganizationLicenseApi
