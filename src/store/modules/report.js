import Vue from 'vue'
import axios from 'axios'

import {REPORT_REQUEST} from '../mutations-types'

const state = {
  reportData: null
}

const getters = {
  reportData: state => state.reportData,
}

const mutations = {
  [REPORT_REQUEST] (state, payload) {
    Vue.set(state, 'reportData', payload)
  },
}

const actions = {
  REPORT_REQUEST ({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('documents/prospect/' + data.analyzedRecordId + '/report', data.payload)
        .then(response => {
          commit(REPORT_REQUEST, response.data)
          resolve()
        })
    }).catch((error) => Promise.reject(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
