'use strict';

import Vue from 'vue'
import _ from 'lodash'
import {authAxios} from '../commons/auth'

export default class AuthService {
  constructor() {
    this.AUTH_API_URL = process.env.AUTH_API_URL;
    this.APP_CLIENT_ID = process.env.APP_CLIENT_ID;

    //---NOTE: use Vue.auth instead $auth, because it's a plugin requiring proper vue instance.
  }

  /**
   * touch
   * Request Information
   * @description:
   * This method will validate provided username(e-mail) against users in our db and will return a min user profile
   * data if user was located
   *
   * @urlParameters
   * username : string(Base64 encoded username), Required
   * @bodyParameters
   * none
   **/
  touch(email = null) {
    if (email) {
      email = window.btoa(email);

      let promise = authAxios.get('account/validate', {params: {username: email}})
        .then(response => {
          let data = response.data;

          return Promise.resolve({
            name: data.firstName + ' ' + data.lastName,
            avatar: data.avatar,
            emailConfirmed: data.emailConfirmed,
            lockoutEnabled: data.lockoutEnabled,
            email: data.userName,
            username: data.userName
          });
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request touch: no email');
      return null
    }
  }

  /**
   * resend
   * Request Information
   * @description:
   * This method will resend confirmation e-mail to a new user if he misplaced the original e-mail he received
   * during sign up.
   *
   * @urlParameters
   * none
   * @bodyParameters
   * username(string)
   **/
  resend(email) {
    if (email) {
      let promise = authAxios.get('account/resend-confirmation-email', JSON.stringify(email))
        .then(response => {
          return Promise.resolve(true);
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request resend: no email');
      return null
    }
  }

  /**
   * login
   * Request Information
   * @description:
   * This method will allow site user to login into the site using provided user name (email) and password.
   * ClientId header is required for this request
   *
   * @urlParameters
   * none
   * @bodyParameters
   * LoginBindingModel:
   * userName: string, Required
   * password: string, Required
   **/
  login(userData) {
    if (userData) {
      userData.grant_type = 'password';
      userData.client_id = this.APP_CLIENT_ID;
      let promise = Vue.vueAuth.login(userData)
        .then(response => {
          return Promise.resolve(true);
        }).catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request login: no userData');
      return null
    }
  }

  /**
   * signup
   * Request Information
   * @description:
   * This method will allow site user to login into the site using provided user name (email) and password.
   * ClientId header is required for this request
   *
   * @urlParameters
   * none
   * @bodyParameters
   * LoginBindingModel:
   * userName: string, Required
   * password: string, Required
   **/
  signup(userData) {
    if (userData) {
      //---cloned email
      userData.userName = userData.email

      let promise = Vue.vueAuth.register(userData)
        .then(response => {
          console.log('register - ',response)
          return Promise.resolve(true);
        }).catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request signup: no userData');
      return null
    }
  }

  /**
   * forgotPassword
   * Request Information
   * @description:
   * This method will handle password retrieval request by sending an e-mail to end user with a link that he can
   * follow to reset his password
   *
   * @urlParameters
   * none
   * @bodyParameters
   * userName: string,
   **/
  forgotPassword(email) {
    if (email) {
      let promise = authAxios.post('account/forgot-password', { username: email })
        .then(response => {
          return Promise.resolve(true);
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request forgotPassword: no email');
      return null
    }
  }


  /**
   * resetPassword
   * Request Information
   * @description:
   * This method will handle reset password request
   *
   * @urlParameters
   * none
   * @bodyParameters
   * newPassword: string, Required (Data type: Password; String length: inclusive between 6 and 100;)
   * confirmPassword: string, Required (Data type: Password)
   * userId: integer, Required
   * code: string, Required
   **/
  resetPassword(data) {
    if (!_.isEmpty(data)) {
      let promise = authAxios.post('account/reset-password', data)
        .then(response => {
          return Promise.resolve(true);
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise
    } else {
      console.error('request resetPassword: no data');
      return null
    }
  }












  /**
   * getRoles
   * Request Information
   * @description:
   * This method will retrieve all user roles supported by the platform
   *
   * @urlParameters
   * none
   * @bodyParameters
   * none
   **/
  getRoles() {
    let promise = authAxios.get('roles')
      .then( response => {
        return Promise.resolve( response.data );
      }).catch( error => {
        return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
      });
    return promise

  }

}
export {AuthService}


