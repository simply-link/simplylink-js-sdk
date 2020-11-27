import BaseApi from '../base-api'
import GenericLanguagesModel from '../../model/generic/languages-model'

class LanguagesApi extends BaseApi {
    getApiPath () {
        return 'generics/languages'
    }

    getDataObject () {
        return new GenericLanguagesModel()
    }
}

export default LanguagesApi
