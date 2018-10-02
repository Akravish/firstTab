import Vue from 'vue'
import router from '../../routes'
import ProfileService from '../../services/requests/profile'
import _ from 'lodash'

import {
  UPDATE_USER_DATA
} from '../mutations-types'

const state = {
  user: null,
  isAuthenticated: false
};

const getters = {
  getUserData: state => state.user,
};

const mutations = {
  [UPDATE_USER_DATA] (state, userData) {
    if (userData !== null) {
      let decoratedUserData = _.assign({}, userData);
      decoratedUserData.fullName = decoratedUserData.firstName + ' ' + decoratedUserData.lastName;
      Vue.set(state, 'user', decoratedUserData);
      Vue.set(state, 'isAuthenticated', true);
    } else {
      Vue.set(state, 'user', null);
      Vue.set(state, 'isAuthenticated', false);
      //---go to home
      router.push({ path: '/'});
    }
  }
};

const actions = {
  UPDATE_USER_DATA ({commit}) {
    let profileService = new ProfileService();
    profileService.getProfile().then(data =>{
      commit(UPDATE_USER_DATA, data)
    }).catch(error =>{
      console.error('action UPDATE_USER_DATA error - ', error);
    });
  },
  USER_LOGOUT ({commit}) {
    Vue.vueAuth.logout().then(() => {
      if (!Vue.vueAuth.isAuthenticated()) {
        commit(UPDATE_USER_DATA, null);
        commit('snotify/SET_GLOBAL_SNOTIFY_DATA', ({type: 'success', text: 'You have successfully logged out'}), { root: true });
      }
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
