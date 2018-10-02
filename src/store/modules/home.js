import Vue from 'vue'
import StaticContentService from '../../services/requests/content'

import {
  HOME_CONTENT,
  HOME_POPUP_STATUS
} from '../mutations-types'

const state = {
  homeContent: null,
  isShowPopupVideo: false
};

const getters = {
  getHomeContent: state => state.homeContent,
  getHomePopupStatus: state => state.isShowPopupVideo,
};

const mutations = {
  [HOME_CONTENT] (state, payload) {
    Vue.set(state, 'homeContent', payload)
  },
  [HOME_POPUP_STATUS] (state, status) {
    Vue.set(state, 'isShowPopupVideo', status)
  }
};

const actions = {
  GET_HOME_CONTENT ({commit}) {
    let staticContentService = new StaticContentService();

    return new Promise((resolve, reject) => {
      staticContentService.getComponentContent('landing-main').then( result =>{
        commit(HOME_CONTENT, JSON.parse(result.content));
        resolve(true);
      }).catch(error =>{
        reject(error);
      });
    })
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
