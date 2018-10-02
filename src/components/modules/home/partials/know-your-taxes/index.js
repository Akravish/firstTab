import RevertedList from '@/components/modules/home/partials/know-your-taxes/reverted-list/index.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'knowYourTaxes',
  components: {
    'RevertedList': RevertedList
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
}
