import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
import {
  CHECK_SUPPORT_PROPERTY,
  ANALYSIS_REQUEST
} from '../mutations-types'

const state = {
  supportProperty: null,
  analysisData: null
}

const getters = {
  supportProperty: state => state.supportProperty,
  analysisData: state => state.analysisData
}

const mutations = {
  [CHECK_SUPPORT_PROPERTY] (state, payload) {
    Vue.set(state, 'supportProperty', payload)
  },

  [ANALYSIS_REQUEST] (state, payload) {
    Vue.set(state, 'analysisData', payload)
  }
}

const actions = {
  CHECK_SUPPORT_PROPERTY ({dispatch, commit}, propertyAddressId) {
    return new Promise((resolve, reject) => {
      axios.get('analysis/' + propertyAddressId + '/appeals/check-support')
        .then(response => {
          commit(CHECK_SUPPORT_PROPERTY, response.data)
          resolve()
          dispatch('ANALYSIS_REQUEST')
        })
    })
      .catch((error) => Promise.reject(error))
  },
  ANALYSIS_REQUEST ({commit, state, rootState}) {
    let propertyAddressId = state.supportProperty.property.propertyAddressId
    let searchAdditionalData = _.assign({}, rootState.search.searchAdditionalData)

    let payload = {
      isBuyer: false,
      isResident: true,
      isShortSaleOrForeclosure: false,
      purchasePrice: null,
      purchaseDate: null,
      appraisedValue: null,
      appraisalAsOfDate: null,
      targetAppealTypes: []
    }

    // isBuyer
    if (searchAdditionalData && searchAdditionalData.purchaseDate !== null) {
      if (moment(searchAdditionalData.purchaseDate).diff(moment()) < 0) {
        // past
        payload.isBuyer = false
      } else {
        // future
        payload.isBuyer = true
      }
    }

    // isShortSaleOrForeclosure
    payload.isShortSaleOrForeclosure = searchAdditionalData.isShortSaleOrForeclosure

    // purchasePrice & purchaseDate
    if (searchAdditionalData && searchAdditionalData.purchasePrice !== null && searchAdditionalData.purchaseDate !== null) {
      payload.purchasePrice = parseFloat(searchAdditionalData.purchasePrice)
      payload.purchaseDate = moment(searchAdditionalData.purchaseDate).format('L')
    } else {
      let date = moment().year(moment().year() - 4).format('L')
      payload.purchasePrice = 99999999
      payload.purchaseDate = date
    }

    // targetAppealTypes
    let appealTypes = []

    if (moment().diff(moment(payload.purchaseDate), 'years') < 3) {
      appealTypes.push(5)
    } else {
      appealTypes.push(2)
    }
    payload.targetAppealTypes = appealTypes

    return new Promise((resolve, reject) => {
      axios.post('analysis/' + propertyAddressId + '/full-analysis/' + new Date().getFullYear(), payload)
        .then(response => {
          let analysis = _.assign({}, response.data, {
            purchaseData: {
              purchasePrice: payload.purchasePrice,
              purchaseDate: payload.purchaseDate
            },
            suggestedAppeal: {
              id: response.data.suggestedAppeals[0].id,
              description: response.data.suggestedAppeals[0].description
            }
          })
          commit(ANALYSIS_REQUEST, analysis);
          resolve()
        })
    }).catch(error => {
      commit(ANALYSIS_REQUEST, {error: error});
      Promise.reject(error)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
