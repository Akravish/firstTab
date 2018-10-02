import VueDPlayer from 'vue-dplayer'
import {mapGetters, mapMutations} from 'vuex'
import {
  HOME_POPUP_STATUS,
} from '@/store/mutations-types'

export default {
  name: 'homePopupVideo',
  components: {
    'VueDPlayer': VueDPlayer
  },
  data () {
    return {
      popupDPlayerOptions: {
        video: {
          url: null
        },
        autoplay: false,
        loop: false,
        volume: 0.5,
        mutex: false,
        hotkey: true,
        contextmenu: [
          {
            text: 'PropertyTaxFox'
          }
        ]
      },
      popupDPlayer: null,
      isContentLoaded: false,
      isShowPopupVideo: false
    }
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent',
      homePopupStatus: 'home/getHomePopupStatus'
    })
  },
  watch: {
    content: function (newContent) {
      if (newContent !== undefined && newContent !== null) {
        this.popupDPlayerOptions.video.url = this.content['marketing-video'];
        this.isContentLoaded = true;
      }
    },
    homePopupStatus: function (newVal) {
      if (newVal === true) {
        this.showPopupVideo();
      } else {
        this.isShowPopupVideo = false;
      }
    }
  },
  methods: {
    ...mapMutations({
      setHomePopupStatus: 'home/' + HOME_POPUP_STATUS,
    }),
    showPopupVideo(){
      this.isShowPopupVideo = true;
      let player = this.$refs.popupDPlayer.dp;
      player.play();
    },
    closePopupVideo() {
      let player = this.$refs.popupDPlayer.dp;
      player.pause();
      this.setHomePopupStatus(false);
    }
  }
}

