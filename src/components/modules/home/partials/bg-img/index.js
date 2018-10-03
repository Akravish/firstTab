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
    },
    getImages() {
      console.log('getImages - run')
      for(let day = 1; day < 32; day++){
      let link = document.createElement("a");
        if (day < 10) {
          day = '0' + day;
        }

        link.target = '_blank';
        link.text = day;
        link.href = 'https://api.ryanoconr.com/dash/backgrounds/' + 'oct' + '/' + day + '.jpg';
        link.download = day + '.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      console.log('getImages - done')
    }
  }
}
