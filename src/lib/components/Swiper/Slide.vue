<script type="text/jsx">
export default {
  name: "RtSlide",
  props: {
    slideClasses: {
      type: String,
      default: ''
    },
    loaded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      shown: true
    };
  },
  computed: {
    cmpName() {
      return this.$parent.cmpName || "RtSlide";
    },
    left() {
      return this.$el.getBoundingClientRect().left;
    },
    right() {
      return this.left + this.width;
    },
    offsetSlide() {
      return this.$parent.offsetSlide;
    },
    getCustomClass() {
      return this.slideClasses || this.$parent.slidesClasses;
    }
  },
  methods: {
    /**
     * Делает видимым слайд или скрывает его
     * @param flag - Принудительно назначить статус видимости
     */
    toggle(flag) {
      this.shown = flag !== undefined ? flag : !this.shown;
    },
    width() {
      return this.$el.clientWidth;
    },
    scrollIntoView() {
      if(this.$parent.scrollOnClick) {
        this.$el.parentNode.scrollTo({left: this.$el.offsetLeft, behavior: "smooth"});
      }
    }
  },
  render(h){
    return <div class={this.cmpName + "-slide " + (this.shown ? '': ' not-shown ') +  this.getCustomClass}
                style={"padding-right:" + this.offsetSlide + "px;"} onClick={this.scrollIntoView}>
      {this.$slots.default}
    </div>
  }
};
</script>
