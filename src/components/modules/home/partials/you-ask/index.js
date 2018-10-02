import YouAskList from '@/components/modules/home/partials/you-ask/you-ask-list/index.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'yourAsk',
  components: {
    'YouAskList': YouAskList
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
