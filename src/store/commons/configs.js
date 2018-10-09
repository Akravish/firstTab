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
    },
    weather: {
      isShowWeather: true,
      locationInfo: {
        title: 'Sharivka',
        coords: {
          lat: 49.217905453918156,
          log: 26.948432922363285,
        }
      },
      OWPApiKey: '73062b0c8b434336f158ded489c82988',
      OWPUrl: 'http://api.openweathermap.org/data/2.5/weather?'
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
