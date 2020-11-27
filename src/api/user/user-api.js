import BaseApi from '../base-api'
import UserModel from '../../model/user/user-model'

class UserApi extends BaseApi {

    /**
     * Get api path
     * @return {string}
     */
    getApiPath () {
        return 'user'
    }

    /**
     * Assign an object
     * @return {UserModel}
     */
    getDataObject () {
        return new UserModel()
    }

    /**
     * Get current authenticate user data
     * @return {Promise}
     */
    me () {
        let _this = this
        return new Promise(function (resolve, reject) {
            _this.makeApiRequest(_this._METHOD_GET, _this.getApiPath() + '/me')
                .then(result => {
                    // console.log(result)
                    resolve(_this.getDataObject().parseDataFromResourceServer(result.data))
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}

export default UserApi
