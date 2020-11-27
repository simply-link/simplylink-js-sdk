import Vue from 'vue'
import Plugin from '../src/index'

Vue.use(Plugin)
Vue.mp.client.init({
    clientId: '6_2zxdwtd9snk0ck4cocwow00s4gogwcwg4gwgooocgswscg8ogo',
    secret: '25dodrh036g0cgkc48sc04ocsoo0cc4gsggwksoo88owco08gc',
    redirectUri: 'sas'
})

Vue.mp.api.user().me()
    .then(response => {
        console.log('response')
        console.log(response)
        console.log('USER ID:', response.id)
    })
    .catch(error => {
        // console.log(error)
        console.log('error')
    })
/*console.log(Vue.mp.auth.getAuthorizationCodeUrl())
const assert = require('chai').assert

describe('simplylink-sdk-js', function () {
    describe('scope', function () {
        it('Vue.mp.scope.SCOPE_AUTH_APPS should return string auth.apps', function () {
            assert.equal(Vue.mp.scope.SCOPE_AUTH_APPS, 'auth.apps')
        })
    })

    describe('api', function () {
        it('Vue.mp.api.user().me() should return status 200', function () { // no done
            // note the return
            Vue.mp.api.user().me()
                .then(function (response) {
                    assert.equal(200, response.status)
                })
                .catch(function () {
                    throw new Error('Vue.mp.api.user().me() was not supposed to fail');
                })
        });

        it('Vue.mp.api.apps().me() should return status 200', function () { // no done
            // note the return
            Vue.mp.api.user().me()
                .then(function (response) {
                    assert.equal(200, response.status)
                })
                .catch(function () {
                    throw new Error('Vue.mp.api.apps().me() was not supposed to fail');
                })
        });

        it('Vue.mp.api.organizationInvitation(1).acceptInvitation(\'123\') should return status 200', function () { // no done
            // note the return
            Vue.mp.api.organizationInvitation(1).acceptInvitation('123')
                .then(function (response) {
                    assert.equal(200, response.status)
                })
                .catch(function (error) {
                    throw new Error('Vue.mp.api.organizationInvitation(1).acceptInvitation(\'123\') was not supposed to fail');
                })
        });
    })
})*/


// https://jsonplaceholder.typicode.com/posts/1
/*
Vue.mp.api.user().getData()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })*/

/*
Vue.mp.api.organizationUser(4).getSingleRecord(13)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })*/


/*Vue.mp.api.organizationUser(4).getRecordsList()
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })*/

/*
const params = {
    name: "test",
    email: "testlklkl@ddd.com"
}
Vue.mp.api.organizationInvitation(1).createRecord(params)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
*/
