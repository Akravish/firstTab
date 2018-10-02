import FooterComponent from '@/components/directives/footer/index.vue'
import HeaderComponent from '@/components/directives/header/index.vue'

import {mapMutations,mapActions} from 'vuex'
import {
  GET_HOME_CONTENT,
  UPDATE_LOADER_STATE
} from '@/store/mutations-types'

export default {
  name: 'homeModule',
  components: {
    'HeaderComponent': HeaderComponent,
    'FooterComponent': FooterComponent,
  },
  data() {
    return {
      isContentLoaded: false
    }
  },
  created(){

    this.loader([true,['Load Data']]);

    this.getHomeContent().then(result=>{
      this.isContentLoaded = true;
    }).catch(error=>{

    }).finally(()=>{
      this.loader([false]);
    });
  },
  methods: {
    ...mapMutations({
      loader: 'loader/' + UPDATE_LOADER_STATE,
    }),
    ...mapActions({
      getHomeContent: 'home/' + GET_HOME_CONTENT
    })
  }
}