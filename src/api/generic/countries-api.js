import BaseApi from '../base-api'
import GenericCountriesModel from '../../model/generic/countries-model'

class CountriesApi extends BaseApi {

    getApiPath () {
        return 'generics/countries'
    }

    getDataObject () {
        return new GenericCountriesModel()
    }
}

export default CountriesApi
