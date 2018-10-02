import SideNavbar from '@/components/directives/header/partials/side-navbar/index.vue'
import HeaderAccount from '@/components/directives/header/partials/header-account/index.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'headerComponent',
  props: {
    // isShowFooterMenu: Boolean
  },
  components: {
    'SideNavbar': SideNavbar,
    'HeaderAccount': HeaderAccount
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      content: 'site/getSiteData'
    })
  },
}
