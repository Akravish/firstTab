import Vue from 'vue'
  import { UPDATE_LOADER_STATE } from '../mutations-types'

const state = {
  loaderState: false,
  loaderText: null
};

const getters = {
  getLoader: state => state
};

const mutations = {
  [UPDATE_LOADER_STATE] (state, loaderNewState) {
    if (loaderNewState[0] === true) {
      Vue.set(state, 'loaderState', loaderNewState[0]);
      if(loaderNewState[1] && loaderNewState[1].length > 0){
        Vue.set(state, 'loaderText', loaderNewState[1]);
      } else {
        Vue.set(state, 'loaderText', null);
      }
    } else {
      Vue.set(state, 'loaderState', loaderNewState[0]);
      Vue.set(state, 'loaderText', null);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
