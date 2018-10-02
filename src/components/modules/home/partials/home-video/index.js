import VueDPlayer from 'vue-dplayer'
import HomePopupVideo from '@/components/modules/home/partials/home-video/home-popup-video/index.vue'
import HomeVideoFooter from '@/components/modules/home/partials/home-video/home-video-footer/index.vue'

import {mapGetters, mapMutations} from 'vuex'
import {
  HOME_POPUP_STATUS,
} from '@/store/mutations-types'

export default {
  name: 'homeVideo',
  components: {
    'VueDPlayer': VueDPlayer,
    'HomePopupVideo': HomePopupVideo,
    'HomeVideoFooter': HomeVideoFooter
  },
  data () {
    return {
      bgVideo: {
          url: null,
          poster: null
      },
      isContentLoaded: false,
    }
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
  watch: {
    content: function (newContent) {
      if (newContent !== undefined && newContent !== null) {
        this.bgVideo.url = newContent['bg-video'];
        this.bgVideo.pic = newContent['bg-image'];
        this.isContentLoaded = true;
      }
    }
  },
  methods: {
    ...mapMutations({
      setHomePopupStatus: 'home/' + HOME_POPUP_STATUS,
    }),
    showVideo(){
      this.setHomePopupStatus(true);
    }
  },
}
