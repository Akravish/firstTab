import {mapGetters} from 'vuex'

export default {
  name: 'homeVideoFooter',
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

