import {mapGetters} from 'vuex'

export default {
  name: 'footerComponent',
  props: {
    isShowFooterMenu: Boolean
  },
  components: {},
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
