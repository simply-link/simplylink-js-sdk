import BaseApi from '../base-api'
import GenericStatusesModel from '../../model/generic/statuses-model'

class StatusesApi extends BaseApi {
    getApiPath () {
        return 'generics/statuses'
    }

    /**
     * @return {GenericStatusesModel}
     */
    getDataObject () {
        return new GenericStatusesModel()
    }
}

export default StatusesApi
