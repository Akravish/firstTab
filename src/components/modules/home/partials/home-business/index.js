import {mapGetters} from 'vuex'

export default {
  name: 'homeBusiness',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
}
