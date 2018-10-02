import Vue from 'vue'
import axios from 'axios'
import {
  SEARCH_PROPERTY_REQUEST,
  SEARCH_ADDITIONAL_DATA
} from '../mutations-types'

const state = {
  searchPropertyData: {
    list: [],
    item: null
  },
  searchAdditionalData: {
    purchaseDate: null,
    purchasePrice: null,
    isShortSaleOrForeclosure: false
  }
}

const getters = {
  searchPropertyData: state => state.searchPropertyData,
  searchAdditionalData: state => state.searchAdditionalData
}

const mutations = {
  [SEARCH_ADDITIONAL_DATA] (state, payload) {
    if (payload.type === 'date') {
      Vue.set(state.searchAdditionalData, 'purchaseDate', payload.value)
    } else if (payload.type === 'price') {
      Vue.set(state.searchAdditionalData, 'purchasePrice', payload.value)
    } else if (payload.type === 'allClear') {
      let clearingObj = {
        purchaseDate: null,
        purchasePrice: null,
        isShortSaleOrForeclosure: false
      }
      Vue.set(state, 'searchAdditionalData', clearingObj)
    }
  },

  [SEARCH_PROPERTY_REQUEST] (state, payload) {
    if (payload === null || payload.length === 0) {
      Vue.set(state.searchPropertyData, 'item', null)
      Vue.set(state.searchPropertyData, 'list', [])
    } else {
      Vue.set(state.searchPropertyData, 'list', payload)
    }
  }
}

const actions = {
  SEARCH_PROPERTY_REQUEST ({ commit }, query) {
    return new Promise((resolve, reject) => {
      axios.get('property/FindProperty?SearchString=' + query)
        .then(response => {
          commit(SEARCH_PROPERTY_REQUEST, response.data)
          // console.log('SEARCH_PROPERTY_REQUEST =', response.data)
          resolve()
        })
    })
      .catch((error) => Promise.reject(error))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
