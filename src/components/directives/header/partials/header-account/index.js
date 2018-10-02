import {mapGetters} from 'vuex'

export default {
  name: 'headerAccount',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUserData'
    })
  },
}
