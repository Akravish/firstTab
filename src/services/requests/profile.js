'use strict';

import Vue from 'vue'
import axios from 'axios'

export default class ProfileService {
  constructor() {
  }

  /**
   * getProfile
   * Request Information
   * NOTE: Requires Authorization!
   * @description:
   * This method will return instance of the UserProfile class for user identified with UserId
   *
   * @urlParameters
   * none
   * @bodyParameters
   * none
   **/
  getProfile() {
    let promise = axios.get('users/me')
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
      });
    return promise;
  }


  /**
   * savePassword
   * Request Information
   * NOTE: Requires Authorization!
   * @description:
   * This method should be used to change user's password on the account
   *
   * @urlParameters
   * none
   * @bodyParameters
   * NOTE: Instance of ChangePasswordBindingModel
   * newPassword: string, Required (Data type: Password; String length: inclusive between 6 and 100;)
   * confirmPassword: string, Required (Data type: Password)
   **/
  savePassword(newPassword, confirmedPassword) {
    if (newPassword && confirmedPassword) {
      let promise = axios.post('users/me/change-password', {newPassword: newPassword, confirmPassword: confirmedPassword})
        .then( () => {
          return Promise.resolve(true);
        })
        .catch(error => {
          return Promise.reject(error.response.data.message ? error.response.data.message : error.response.data ? error.response.data : error.response);
        });
      return promise;
    } else {
      console.error('request savePassword: newPassword or confirmedPassword are empty');
      return null
    }
  }
}

export {ProfileService}


