import Vue from 'vue'
import StaticContentService from '../../services/requests/content'

import {
  UPDATE_SITE_DATA
} from '../mutations-types'

const state = {
  siteData: {
    mainLogo_v1: "https://static.propertytaxdetective.com/images/source/logo fox@3x.png",
    mainLogo_v2: "https://static.propertytaxdetective.com/images/source/logo fox-w@3x.png",
    largeLogoImage: "https://static.propertytaxdetective.com/images/source/fox-favicon@3x.png",
    smallLogoImage: "https://static.propertytaxdetective.com/images/source/fox-favicon@3x.png",
    meta: null
  }
};

const getters = {
  getSiteData: state => state.siteData,
};

const mutations = {
  [UPDATE_SITE_DATA] (state, data) {
    if (data !== null) {
      Vue.set(state.siteData, 'meta', data);
    } else {
      console.error('mutation UPDATE_SITE_DATA error', data);
    }
  }
};

const actions = {
  GET_SITE_DATA ({commit}) {

    let staticContentService = new StaticContentService();

    staticContentService.getSiteData().then(data =>{
      commit(UPDATE_SITE_DATA, data)
    }).catch(error =>{
      console.error('action GET_SITE_DATA error - ',error);
    });

  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
