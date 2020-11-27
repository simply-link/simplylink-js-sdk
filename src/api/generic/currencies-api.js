import BaseApi from '../base-api'
import GenericCurrenciesModel from '../../model/generic/currencies-model'

class CurrenciesApi extends BaseApi {
    getApiPath () {
        return 'generics/currencies'
    }

    getDataObject () {
        return new GenericCurrenciesModel()
    }
}

export default CurrenciesApi
