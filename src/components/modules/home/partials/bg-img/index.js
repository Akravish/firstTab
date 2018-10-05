export default {
  name: 'bgImg',
  data () {
    return {
      bgStyle: {
        background: 'url(' + require(`@/assets/img/media/bg-img/default-bg.jpg`) + ') no-repeat center',
        backgroundSize: 'cover'
      }
    }
  },
  created(){
    this.getBgImg();
  },
  methods: {
    getBgImg() {
      let date = new Date,
          month = date.getMonth(),
          day = date.getDate();

      let monthArray = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

      if (day < 10) {
        day = '0' + day;
      }

      let url = require('@/assets/img/media/bg-img/' + monthArray[month] + '/' + day + '.jpg');
      this.bgStyle.background = 'url(' + url + ') no-repeat center'
    }
  }
}
