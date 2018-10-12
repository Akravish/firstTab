import Vue from 'vue'

import {
  LOAD_LOCAL_STORAGE_DATA,
  UPDATE_LOCAL_STORAGE_DATA,
  SET_DEFAULT_CONFIGS,
  SAVE_LOCAL_STORAGE_DATA,
} from '../mutations-types'

const state = {
  generalConfigs: {
    weather: {
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
  },
  defaultUserConfigs: {
    timer: {
      isShowTimer: true,
      isShowSeconds: false
    },
    greeting: {
      isShowGreeting: true,
    },
    weather: {
      isShowWeather: true,
    }
  },
  customUserConfigs: null,
  userComponentData: null,
};

const getters = {
  getConfigs: state => state.customUserConfigs,
  getData: state => state.userComponentData,
  getDefaultUserConfigs: state => state.defaultUserConfigs,
  getGeneralConfigs: state => state.generalConfigs,
};

const mutations = {
  [LOAD_LOCAL_STORAGE_DATA] (state, result) {
    console.info('mutations LOAD_LOCAL_STORAGE_DATA');
    if (result !== null) {
      Vue.set(state, 'customUserConfigs', result.config);
      Vue.set(state, 'userComponentData', result.data);
    } else {
      console.error('mutation LOAD_LOCAL_STORAGE_DATA error', data);
    }
  },
  [SET_DEFAULT_CONFIGS] (state) {
    console.info('mutations SET_DEFAULT_CONFIGS');
    Vue.set(state, 'customUserConfigs', state.defaultUserConfigs);
  },

  [UPDATE_LOCAL_STORAGE_DATA] (state, payload) {
    console.info('mutations UPDATE_LOCAL_STORAGE_DATA');
    if (payload.type === 'config') {
      let customUserConfigs = state.customUserConfigs;
      for (let key in data) {
        customUserConfigs[key] = data[key];
        console.info('key - '+key+' | value2 - ', customUserConfigs[key]);
      }
      Vue.set(state, 'customUserConfigs', customUserConfigs);
    } else if (payload.type === 'data') {
      let userComponentData = state.userComponentData;
      if (userComponentData === null) {
        userComponentData = {};
      }
      for (let key in data) {
        userComponentData[key] = data[key];
        console.info('key - '+key+' | value2 - ', userComponentData[key]);
      }
      Vue.set(state, 'userComponentData', userComponentData);
    } else {
      console.error('mutations UPDATE_LOCAL_STORAGE_DATA | error type of payload')
    }
  }
};

const actions = {
  LOAD_LOCAL_STORAGE_DATA ({commit}) {
    console.info('action LOAD_LOCAL_STORAGE_DATA');
    return new Promise((resolve, reject) => {
      if (localStorage.getItem('firstTabData')) {
        let result = JSON.parse(localStorage.getItem('firstTabData'));
        commit(LOAD_LOCAL_STORAGE_DATA, result);
        resolve(true);
      } else {
        console.info('action LOAD_LOCAL_STORAGE_DATA | localStorage is empty');
        reject(false);
      }
    })
  },

  UPDATE_LOCAL_STORAGE_DATA ({dispatch, commit}, data) {
    console.info('action UPDATE_LOCAL_STORAGE_DATA');
    commit(UPDATE_LOCAL_STORAGE_DATA, data);
    dispatch('SAVE_LOCAL_STORAGE_DATA')
  },

  SET_DEFAULT_CONFIGS ({dispatch, commit, state}) {
    console.info('action SET_DEFAULT_CONFIGS');
    commit(SET_DEFAULT_CONFIGS, state.defaultUserConfigs);
    dispatch('SAVE_LOCAL_STORAGE_DATA')
  },

  SAVE_LOCAL_STORAGE_DATA ({state}) {
    console.info('action SAVE_LOCAL_STORAGE_DATA');
    let localStorageData = {
      config: state.customUserConfigs,
      data: state.userComponentData
    };
    let JSONlocalStorageData = JSON.stringify(localStorageData);
    localStorage.setItem('firstTabData', JSONlocalStorageData)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
