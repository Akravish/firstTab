import Parallax from 'vue-parallaxy'
import {mapGetters} from 'vuex'

export default {
  name: 'whyProfitableParallax',
  components: {
    Parallax
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  }
}

