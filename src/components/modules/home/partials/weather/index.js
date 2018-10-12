import {mapMutations, mapActions, mapGetters} from 'vuex'

import {
  GET_OWP_DATA,
  UPDATE_LOCAL_STORAGE_DATA
} from '@/store/mutations-types'

export default {
  name: 'weather',
  data () {
    return {
      weatherClassIcon: null,
      OWPData: null
    }
  },
  computed: {
    ...mapGetters({
      localStorageData: 'configs/getData',
    })
  },
  watch: {
    OWPData: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        if (newVal !== null && newVal.weather.length > 0) {
          console.log('getOWPData',newVal.weather[0]);
          let weatherIconData = newVal.weather[0],
              timeOfDay = weatherIconData.icon.slice(-1);
          if (timeOfDay === 'n') {
            this.weatherClassIcon = 'wi-owm-night-' + weatherIconData.id;
          } else if (timeOfDay === 'd') {
            this.weatherClassIcon = 'wi-owm-day-' + weatherIconData.id;
          } else {
            this.weatherClassIcon = 'wi-owm-' + weatherIconData.id;
          }
        }
      }
    }
  },
  created(){
    if (this.localStorageData !== null && this.localStorageData.weather !== null) {
      let difTime = 72e5; //---2 hour =>2*60*60*1000
      if ((new Date) - new Date(this.localStorageData.weather.weatherTime) < difTime ) {
        this.OWPData = this.localStorageData.weather.weatherData;
      } else {
        this.updateWeatherData();
      }
    } else {
      this.updateWeatherData();
    }
  },
  methods: {
    ...mapActions({
      getOWPData: 'weather/' + GET_OWP_DATA,
      updateData: 'configs/' + UPDATE_LOCAL_STORAGE_DATA
    }),
    updateWeatherData() {
      console.log('?')
      this.getOWPData().then(OWPData => {
        let payloadForUpdate = {
          type: 'data',
          data: {
            weather: {
              weatherTime: new Date,
              weatherData: OWPData
            }
          }
        };
        this.updateData(payloadForUpdate);
        this.OWPData = this.localStorageData.weather.weatherData;
      });
    }
  }
}