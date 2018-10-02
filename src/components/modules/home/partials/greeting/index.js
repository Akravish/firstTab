import {mapGetters} from 'vuex'

export default {
  name: 'greeting',
  data () {
    return {
      greetingData: 'Hello World'
    }
  },
  // computed: {
  //   ...mapGetters({
  //     configs: 'configs/getConfigs'
  //   })
  // },
  created(){
    let self = this;
    setInterval( () => {
      self.updateGreeting();
    }, 1000);
  },
  methods: {
    updateGreeting() {
      let date = new Date(),
        hours = date.getHours(),
        month = date.getMonth(),
        day = date.getDate();

      this.greetingData = 'Good ';
      if ( hours > 6 && hours < 12 ) {
        this.greetingData += 'morning';
      } else if ( hours >= 12 && hours < 15 ) {
        this.greetingData += 'day';
      } else if ( hours >= 15 && hours < 18 ) {
        this.greetingData += 'afternoon';
      } else if ( hours >= 18 && hours < 21 ) {
        this.greetingData += 'evening';
      } else  {
        this.greetingData += 'night';
      }

      if (11 === month && 25 === day) {
        this.greetingData = "Merry Christmas";
      } else
      if (0 === month && 1 === day) {
        this.greetingData = "Happy New Year";
      }
    }
  }
}