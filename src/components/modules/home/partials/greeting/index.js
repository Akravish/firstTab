import {mapGetters} from 'vuex'

export default {
  name: 'timer',
  data () {
    return {
      timeData: null
    }
  },
  computed: {
    ...mapGetters({
      configs: 'configs/getConfigs'
    })
  },
  created(){
    let self = this;
    setInterval( () => {
      self.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      let date = new Date();
      let hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds();

      this.timeData = hours + ':' + minutes;
      if ( this.configs.timer.isShowSeconds ) {
        this.timeData += ':' + seconds;
      }
    }
  }
}
