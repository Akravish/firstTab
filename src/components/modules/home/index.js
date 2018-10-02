import HomeVideo from '@/components/modules/home/partials/home-video/index.vue'
import YouAsk from '@/components/modules/home/partials/you-ask/index.vue'
import WhyProfitable from '@/components/modules/home/partials/why-profitable/index.vue'
import HomeBusiness from '@/components/modules/home/partials/home-business/index.vue'
import KnowYourTaxes from '@/components/modules/home/partials/know-your-taxes/index.vue'
import HomeSignIn from '@/components/modules/home/partials/home-sign-in/index.vue'
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
    'HomeVideo': HomeVideo,
    'YouAsk': YouAsk,
    'WhyProfitable': WhyProfitable,
    'HomeBusiness': HomeBusiness,
    'KnowYourTaxes': KnowYourTaxes,
    'HomeSignIn': HomeSignIn,
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