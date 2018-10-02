import {mapGetters} from 'vuex'

export default {
  name: 'homeSignIn',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
}
