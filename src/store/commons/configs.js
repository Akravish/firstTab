import Vue from 'vue'

import {
  UPDATE_CONFIGS
} from '../mutations-types'

const state = {
  configs: {
    timer: {
      isShowTimer: true,
      isShowSeconds: false
    },
    greeting: {
      isShowGreeting: true,
    }
  }
};

const getters = {
  getConfigs: state => state.configs,
};

const mutations = {
  [UPDATE_CONFIGS] (state, configObj) {
    //#todo set here switch for chosee current config
    // if (data !== null) {
    //   Vue.set(state.siteData, 'meta', data);
    // } else {
    //   console.error('mutation UPDATE_SITE_DATA error', data);
    // }
  }
};

// const actions = {
//   GET_SITE_DATA ({commit}) {
//
//     let staticContentService = new StaticContentService();
//
//     staticContentService.getSiteData().then(data =>{
//       commit(UPDATE_SITE_DATA, data)
//     }).catch(error =>{
//       console.error('action GET_SITE_DATA error - ',error);
//     });
//
//   }
// };

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  // actions
}
