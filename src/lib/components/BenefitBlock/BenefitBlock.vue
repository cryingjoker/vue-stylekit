<script type="text/jsx">

  import variables from "../../variables.json";

  const componentsList = {};

  export default {
    name: "RtBenefitBlock",
    components: componentsList,
    props: {
      columnsQuantity: {
        type: Number,
        default: null
      },
      iconSize: {
        type: [String, Number],
        default: null
      },
      alignCenter: {
        type: Boolean,
        default: false
      },
      backgroundColorClass: {
        type: String,
        default: ''
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      smallIcon: {
        type: Boolean,
        default: false
      },
      step: {
        type: Boolean,
        default: false
      },
      stepTitle: {
        type: String,
        default: 'шаг'
      },
      hasImage: {
        type: Boolean,
        default: false
      },
      inlineLayout: {
        type: Boolean,
        default: false
      },
      iconBackingColor: {
        type: String,
        default: ''
      },
      iconBackingSize: {
        type: [Number, String],
        default: null
      },
      swiperOnMobile: {
        type: Boolean,
        default: false
      },
      noTransparencyDescription: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      layout: ''
    }),

    computed: {
      transparencyClass(){
        let className = 'rt-benefit-block';
        if(this.backgroundColorClass){
          className += (' ' + this.backgroundColorClass);
        }
        if(this.noTransparencyDescription) {
          className += ' rt-benefit-block--no-transparency';
        }
        return className;
      }
    },

    mounted () {
      this.specifyLayout();
      window.addEventListener('resize', this.specifyLayout);
    },
    methods: {
      specifyLayout(){
        if(window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && this.swiperOnMobile){
          this.layout = 'swiper';
        } else {
          this.layout = 'benefit';
        }
      }
    },
    render(h){
      if(this.layout === 'swiper'){
        return <rt-swiper>{this.$slots.default}</rt-swiper>
      } else {
        return <div class={this.transparencyClass}>
          <div class="rt-container">
            <div class="rt-col">
              <div class="row">
                {this.$slots.default}
              </div>
            </div>
          </div>
        </div>;
      }
    }
  };
</script>
