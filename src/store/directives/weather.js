import Vue from 'vue'

import {
  GET_OWP_DATA
} from '../mutations-types'

const state = {
  OWPData: null
};

const getters = {
  getOWPData: state => state.OWPData
};

const mutations = {
  [GET_OWP_DATA] (state, data) {
    //7.96 tem
    Vue.set(state, 'OWPData', data);
  },
};

const actions = {
  GET_OWP_DATA ({commit, state, rootState}) {
    let weatherPayload = rootState.configs.configs.weather;

    let promise = Vue.axios.get(
      weatherPayload.OWPUrl +
      'lat=' + weatherPayload.locationInfo.coords.lat +
      '&lon=' + weatherPayload.locationInfo.coords.log +
      '&units=metric' +
      // '&lang=ua' +
      '&APPID=' + weatherPayload.OWPApiKey)
      .then(result =>{
        commit(GET_OWP_DATA, result.data);
        return Promise.resolve(result.data);
      })
      .catch(error => {
        return Promise.reject(error);
      });
    return promise
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
