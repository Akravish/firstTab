import Vue from 'vue'

import {
  SET_GLOBAL_SNOTIFY_DATA,
} from '../mutations-types'

const state = {
  snotifyData: {
    type: null,
    text: null
  }
};

const getters = {
  getSnotifyData: state => state.snotifyData,
};

const mutations = {
  [SET_GLOBAL_SNOTIFY_DATA] (state, snotifyData) {
    if (snotifyData.type !== null && snotifyData.text !== null) {
      Vue.set(state.snotifyData, 'type', snotifyData.type);
      Vue.set(state.snotifyData, 'text', snotifyData.text);
    } else {
      console.error('mutation SET_GLOBAL_SNOTIFY_DATA error');
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
