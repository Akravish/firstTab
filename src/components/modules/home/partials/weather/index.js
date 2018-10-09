import {mapMutations, mapActions, mapGetters} from 'vuex'

import {
  GET_OWP_DATA
} from '@/store/mutations-types'

export default {
  name: 'weather',
  data () {
    return {
      weatherClassIcon: null
    }
  },
  computed: {
    ...mapGetters({
      OWPData: 'weather/getOWPData'
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
    this.getOWPData();
  },
  methods: {
    ...mapActions({
      getOWPData: 'weather/' + GET_OWP_DATA
    })
    // getOWPData() {

    // }
  }
}