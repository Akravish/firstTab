import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'loader',
  components: {
    'PulseLoader': PulseLoader
  },
  data () {
    return {
      collectionOfText: [],
      interval: null
    }
  },
  computed: {
    ...mapGetters({
      content: 'loader/getLoader'
    })
  },
  watch: {
    content: {
      immediate: true, //--- this runs initially
      deep: true, //---this detects all changes
      handler(newVal, oldVal) {
        if(newVal && newVal.loaderState === true && newVal.loaderText !== null && newVal.loaderText.length > 1) {
          this.callAnim();
        } else {
          clearInterval(this.interval);
          this.interval = null;
          this.collectionOfText = [];
        }
      }
    }
  },
  methods: {
    callAnim() {
      this.content.loaderText.forEach( (item,index) => {
        this.collectionOfText.push({
          id: index,
          isActive: false,
          text: item
        });
      });

      let counter = 0,
          size = this.collectionOfText.length;

      this.collectionOfText[counter].isActive = true;
      counter++;

      this.interval = setInterval(()=> {
        if ( counter > 0 && counter < size) {
          this.collectionOfText[counter - 1].isActive = false;
          this.collectionOfText[counter].isActive = true;
          counter++;
        } else {
          this.collectionOfText[counter - 1].isActive = false;
          this.collectionOfText[0].isActive = true;
          counter = 1;
        }
      }, 3000);
    }
  }
}
