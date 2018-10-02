import {mapGetters} from 'vuex'

export default {
  name: 'headerComponent',
  props: {
    // isShowFooterMenu: Boolean
  },
  components: {
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
