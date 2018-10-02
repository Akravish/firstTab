import WhyProfitableParallax from '@/components/modules/home/partials/why-profitable/why-profitable-parallax/index.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'WhyProfitable',
  components: {
    'WhyProfitableParallax': WhyProfitableParallax
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
}
