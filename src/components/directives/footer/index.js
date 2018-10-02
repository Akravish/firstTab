import {mapGetters} from 'vuex'

export default {
  name: 'footerComponent',
  props: {
    isShowFooterMenu: Boolean
  },
  components: {
    'FooterMenu': FooterMenu
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
