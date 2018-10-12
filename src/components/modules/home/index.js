import Timer from '@/components/modules/home/partials/timer/index.vue'
import Greeting from '@/components/modules/home/partials/greeting/index.vue'
import BgImg from '@/components/modules/home/partials/bg-img/index.vue'
import Weather from '@/components/modules/home/partials/weather/index.vue'

import {mapMutations, mapActions, mapGetters} from 'vuex'

import {
  LOAD_LOCAL_STORAGE_DATA,
  UPDATE_CONFIGS,
  SET_DEFAULT_CONFIGS,
  UPDATE_LOADER_STATE
} from '@/store/mutations-types'

export default {
  name: 'homeModule',
  components: {
    'Timer': Timer,
    'Greeting': Greeting,
    'BgImg': BgImg,
    'Weather': Weather,
  },
  data() {
    return {}
  },
  watch: {
    configs: {
      immediate: true, //--- this runs initially
      deep: true, //---this detects all changes
      handler(newVal, oldVal) {
        if(newVal !== null) {
          console.info('watch configs', newVal);
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      configs: 'configs/getConfigs'
    })
  },
  created(){
    this.getLocalStorageData().then(() => {
    }).catch(() => {
      this.setDefaultConfigs();
    });

    // this.loader([true,['Load Data']]);

    // this.getHomeContent().then(result=>{
    //   this.isContentLoaded = true;
    // }).catch(error=>{
    //
    // }).finally(()=>{
    //   this.loader([false]);
    // });
  },
  methods: {
    // ...mapMutations({
    //   setDefaultConfigs: 'configs/' + SET_DEFAULT_CONFIGS
    // }),
    ...mapActions({
      getLocalStorageData: 'configs/' + LOAD_LOCAL_STORAGE_DATA,
      setDefaultConfigs: 'configs/' + SET_DEFAULT_CONFIGS
    })
  }
}