import {mapGetters, mapActions} from 'vuex'

import {
  USER_LOGOUT
} from '@/store/mutations-types'


export default {
  name: 'sideNavbar',
  data () {
    return {
      isShowSideNavbar: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/getUserData'
    })
  },
  methods: {
    ...mapActions({
      logout: 'user/' + USER_LOGOUT
    })
  }
}
