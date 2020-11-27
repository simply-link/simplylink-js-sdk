import ApiUser from '../api/user/user-api'
import ApiApps from '../api/apps/apps-api'
import ApiOrganization from '../api/organization/organization-api'
import ApiOrganizationUser from '../api/organization/user-api'
import ApiOrganizationInvitation from '../api/organization/invitation-api'
import OrganizationLicenseApi from "../api/organization/license-api"
import ApiOrganizationRole from '../api/organization/role-api'
import ApiCountries from '../api/generic/countries-api'
import ApiCurrencies from '../api/generic/currencies-api'
import ApiLanguages from '../api/generic/languages-api'
import ApiStatuses from '../api/generic/statuses-api'
import ApiAppsPlan from '../api/apps/plans-api'

// Step to register new model
// 1. create api file
// 2. create model object
// 3. register in this file

// when call api.{some model},
// its create a new api object, instead of calling 'new' any time

export default {
    user: function () { return new ApiUser() },
    apps: function () { return new ApiApps() },
    appsPlan: function (appId) { return new ApiAppsPlan(appId) },
    organization: function () { return new ApiOrganization() },
    organizationRole: function (organizationId) { return new ApiOrganizationRole(organizationId) },
    organizationUser: function (organizationId) { return new ApiOrganizationUser(organizationId) },
    organizationLicense: function (organizationId) { return new OrganizationLicenseApi(organizationId) },
    organizationInvitation: function (organizationId) { return new ApiOrganizationInvitation(organizationId) },
    genericCountries: function () { return new ApiCountries() },
    genericLanguages: function () { return new ApiCurrencies() },
    genericCurrencies: function () { return new ApiLanguages() },
    genericStatuses: function () { return new ApiStatuses() }
}
