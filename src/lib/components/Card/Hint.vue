<script type="text/jsx">
  export default {
    name: "RtHint",
    props: {
      simpleToolTip: {
        type: Boolean,
        default: false
      },
      confirmation: {
        type: Boolean,
        default: false
      },
      confirmationPassed: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        active: false
      };
    },
    computed: {
      hintClass() {
        let className = 'rtb-hint';
        if(this.simpleToolTip) {
          className += ' rtb-hint--tooltip'
        }
        if(this.confirmation) {
          if(this.confirmationPassed) {
            className += ' rtb-hint--confirmed'
          } else {
            className += ' rtb-hint--denied'
          }
        }
        return className;
      }
    },
    mounted() {},
    created() {},

    methods: {
      showHint(){
        let hint = this.$el;
        if(hint.closest(".higher-z"))
          hint.closest(".higher-z").style.zIndex = 999;
        this.active = true;
      },
      hideHint(){
        let hint = this.$el;
        if(hint.closest(".higher-z"))
          hint.closest(".higher-z").style.zIndex = null;
        this.active = false;
      }
    },
    render(h) {
      const toolTipType = () => {
        if(this.simpleToolTip) {
          return <span>?</span>
        }
        if(this.confirmation) {
          if(this.confirmationPassed) {
            return <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#57D9B7" cx="10" cy="10" r="10"/>
                <path stroke="#FFF" stroke-width="2" d="M5 10l3.793 3L16 7"/>
              </g>
            </svg>
          } else {
            return <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle fill="#FF0C0C" cx="10" cy="10" r="10"/>
                <path d="M10 10.207l-4.51 4.51 4.51-4.51 4.51 4.51-4.51-4.51zm0 0L14.207 6 10 10.207 5.793 6 10 10.207z"
                      stroke="#FFF" stroke-width="2"/>
              </g>
            </svg>
          }
        }
      };
      const hintText = () => {
        if(this.active) {
          return <div class="rtb-hint__text">
            {this.$slots.default}
          </div>;
        } else {
          return null;
        }
      };

      return <div class={this.hintClass}>
        <div class="rtb-hint__icon" onMouseover={this.showHint} onMouseleave={this.hideHint}>{toolTipType()}</div>
        {hintText()}
      </div>;
    }
  };
</script>
