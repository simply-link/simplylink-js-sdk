# Simplylink-sdk-js

The Simplylink SDK for Vue.js provides a rich set of client-side functionality that:
+ Enables you to use Simplylink Login to lower the barrier for people to sign up on your site.
+ Makes it easy to call into Simplylink [Rest API](https://github.com/simply-link/auth-server/tree/master/docs/Api)

## Install

Install using npm:
```bash
npm install simplylink-sdk-js --save
```

## Table of contents

- [Setup](#setup)
- [Client Options](#client-options)
- [Simplylink Login](#simplylink-login)
- [API Model Methods](#api-model-methods)
- [API CRUD Methods](#api-crud-methods)
- [Auth Methods](#auth-methods)
- [Scope list](#scope-list)

##  Setup
The following snippet of code will load and initialize the SDK. You must replace the values with the your own Simplylink client details.

For more client options see [Client Options](#client-options)

`main.js`
```js
import mp from 'simplylink-sdk-js'
Vue.use(mp);

Vue.mp.client.init({
    clientId: 'YOUR_CLIENT_ID',
    secret: 'YOUR_SECRET_ID',
    redirectUri: 'YOUR_REDIRECT_URI' // https://www.example.com/user/simplylink-callback
})
```
## Client Options

 Option Name | Type | Default | Description
 -------- | -------- | -------- | --------
 clientId | String | - | The client id
 clientSecret | String | - | The Secret string
 redirectUri | String | - | url of callback after login
 prod | Boolen | false | Which server to call. true = com.  false = xyz
 locale | String | en | user text language response [supported languages](https://example.com/current-unavailable)


## Simplylink Login
Simplylink Login allows users to register or sign in to your app with their Simplylink identity.
#### Step - 1
Generate url for opening marleplays login page into iframe

`Login.vue`
```html
<template>
    <iframe id="frame1" name="frame1"
            :src="url" style="width: 100%; min-height: 100%" frameborder="0"></iframe>
</template>
<style scoed>
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }

    iframe {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0px;
    }
</style>

<script>
    export default {
        data () {
            return {
                url: ''
            }
        },
        created () {
           this.url = this.$sl.auth.getAuthorizationCodeUrl(
                [
                    // you can use scopes from 'scope' object
                    this.$sl.scope.SCOPE_AUTH_USER // auth.user
                ]
            )
        }
    }
</script>

```

#### Step - 2
create your redirect page, and create access token from authorization code. ( Need to match to your redirect client setup )

`Callback.vue`
```js
<script>
    export default {
        created () {
            let error = this.$route.query.error
            if (error) {
                // error
            }

            // authorization code for create token
            let code = this.$route.query.code
            if (code) {
                this.$sl.auth.createTokenFromAuthCode(code)
                    .then(() => {
                       // redirect to your home page
                       window.top.location.href = '/your-route'
                    })
                    .catch(error => {
                        // error
                    })
            }
        }
    }
</script>

```
#### Step - 3
Once you are create token from authorization code, you can call api methods

`Home.vue`
```js
this.$sl.api.user().me()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
```

## API Model Methods

### user()
Additional api methods:
* me() - Get current authenticate user data

### apps()
Additional api methods:
* me() Get current app data

### appsPlan(appId)

### organization()

### organizationRole(organizationId)

### organizationUser(organizationId)

### organizationLicense(organizationId)
Additional api methods:
* validate () - validate current app if license exist

### organizationInvitation(organizationId)
Additional api methods:
* resendInvitation (invitationId)
* acceptInvitation(invitationIdentifier)


### genericCountries()

### genericLanguages()

### genericCurrencies()

### genericStatuses()

## API CRUD Methods
The API CRUD Methods is the primary way to get data out of, and put data into,
Simplylink platform (Based Promise).

you can use to programmatically query data,
post new users, manage organizations,
and perform a variety of other tasks that an
app might implement.

> If you do not have the organization number, you can get it from user data


### getSingleRecord (recordId)

- **recordId**:
    - Type: `Number`
    - Requested record id.

Example:

```js
let orgId = 1
this.$sl.api.organizationUser(orgId).getSingleRecord (userId)
.then(result => {
    // success
})
.catch(error => {
    // error
})
```

### getRecordsList (params)

- **params**:
    - Type: `Object`
    - Sort results with params.

Example:

For more information about search and filters
[#search-and-filters](https://github.com/simply-link/auth-server/blob/master/docs/Api/Api.md#search-and-filters)

```js
let orgId = 1
const params = {
    firstName: 'ron'
}
this.$sl.api.organizationUser(orgId).getRecordsList (params)
.then(result => {
    // success
})
.catch(error => {
    // error
})
```

### createRecord (data)

- **params**:
    - Type: `Object`
    - Data to create record.

Example:

```js
let orgId = 1
const params = {
    name: 'Jon Doe',
    email: 'test@test.com'
}
this.$sl.api.organizationInvitation(orgId).createRecord (params)
.then(result => {
    // success
})
.catch(error => {
    // error
})
```

### updateRecord (recordId, data)

- **recordId**:
    - Type: `Number`
    - Requested record id for update.

- **params**:
    - Type: `Object`
    - Data to update record.

Example:

```js
let orgId = 1
const params = {
    taxId: '123456',
    website: 'www.example.com',
}
this.$sl.api.organization().updateRecord (orgId, params)
.then(result => {
    // success
})
.catch(error => {
    // error
})
```

### deleteRecord (recordId)

- **recordId**:
    - Type: `Number`
    - Requested record id to delete.

Example:

```js
let orgId = 1
let invitationId = 20 // invitation id
this.$sl.api.organizationInvitation(orgId).deleteRecord (invitationId)
.then(result => {
    // success
})
.catch(error => {
    // error
})
```

## Auth Methods

### logout()
When you want create logout from simplylink client
```js
this.$sl.auth.logout()
```

### isAuthenticated()
Return true if user is authenticated
```js
this.$sl.auth.isAuthenticated()
```

### getAuthorizationCodeUrl([scope], state) // state is optional
Get url for requesting the resource owner for authorization code

## Scope list

You can use scope from scope object

`this.$sl.scope.SCOPE_AUTH_USER`

- SCOPE_AUTH_USER ('auth.user')
- SCOPE_AUTH_OTP_VALIDATE ('auth.otp.validate')
- SCOPE_AUTH_USER_CREATE ('auth.user.create')
- SCOPE_AUTH_ORGANIZATION ('auth.organization')
- SCOPE_AUTH_GENERICS ('auth.generics')
- SCOPE_AUTH_APPS ('auth.apps')
- SCOPE_AUTH_LICENSE ('auth.license')


## TODO
