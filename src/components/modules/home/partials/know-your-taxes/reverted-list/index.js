
import {mapGetters} from 'vuex'

export default {
  name: 'revertedList',
  data () {
    return {}
    },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
}
