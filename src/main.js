// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// ---vendor sass need import before App
import 'normalize.css'
import 'vuetify/dist/vuetify.min.css'
import 'vue-snotify/styles/material.scss'
import '@/assets/css/weather/weather-icons.css'
// import '@/assets/css/weather/weather-icons-wind.css'

import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'
import router from './routes'
import store from './store'

import Snotify, { SnotifyPosition } from 'vue-snotify'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import moment from 'moment'

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuetify, {
  theme: {
    primary: '#ff4600', // change
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#ff0000', // change
    info: '#4990e2', // change
    success: '#10ac27', // change
    warning: '#FFC107'
  }
});

Vue.axios = axios;
Vue.axios.defaults.baseURL = process.env.API_URL;

Vue.use(VueAxios, axios);

Vue.use(Snotify, {
  toast: {
    timeout: 8000, //---8 sec
    position: SnotifyPosition.rightBottom
  }
});

Vue.use(PulseLoader);

Vue.router = router;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
});
