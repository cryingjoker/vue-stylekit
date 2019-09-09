<script type="text/jsx">
const name = 'RtCarouselSlide'
const cssSelector = 'rt-carousel__slide'

export default {
  name: name,
  props: {
    slideClasses: {
      type: String,
      default: ''
    },
    loaded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      move: null,
      page: null,
      shown: true
    }
  },
  computed: {
    offsetSlide() {
      return this.$parent.offsetSlide;
    },
    getCustomClass() {
      return this.slideClasses ? this.slideClasses : this.$parent['slidesClasses']
    }
  },
  methods: {
    /**
     * Делает видимым слайд или скрывает его
     * @param flag - Принудительно назначить статус видимости
     */
    toggle(flag) {
      this.shown = this.loaded ? (flag !== undefined ? flag : !this.shown) : false;
    },
    width() {
      return this.$el.clientWidth;
    }
  },
  render(h){
    return <div
        class={ cssSelector + (this.shown ? '' : ' not-shown') + ' ' + this.getCustomClass }
        style={
          {
            backgroundColor: this.$parent.debug && !this.shown ? '#3ca' : null,
            paddingRight: this.offsetSlide + 'px'
          }
        }
      >{ this.$slots.default }</div>
  }
};
</script>
