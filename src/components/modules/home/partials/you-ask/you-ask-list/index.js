
import {mapGetters} from 'vuex'

export default {
  name: 'youAskList',
  data () {
    return {
      activeSubsectionKey: null,
      arrayOfSidebar: [],
    }
  },
  computed: {
    ...mapGetters({
      content: 'home/getHomeContent'
    })
  },
  mounted () {
    this.content.sections[1].subsections.forEach(()=>{
      this.arrayOfSidebar.push(false);
    });
  },
  methods: {
    toggleSubsection(key) {
      if (this.activeSubsectionKey !== key){
        this.activeSubsectionKey = key;
        this.arrayOfSidebar[key] = true;
      } else {
        this.activeSubsectionKey = null;
        this.arrayOfSidebar[key] = false;
      }
    }
  }
}

