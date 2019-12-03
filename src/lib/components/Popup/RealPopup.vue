<script type="text/jsx">
  import variables from "../../variables.json";

  export default {
    name: "RtRealPopup",
    props: {
      positionTop: {
        type: Boolean,
        default: false
      },
      positionBottom: {
        type: Boolean,
        default: false
      },
      positionCenter: {
        type: Boolean,
        default: false
      },
      displayOnDesktop: {
        type: Boolean,
        default: true
      },
      popupType: {
        type: Number,
        default: 1
      }
    },

    data: () => ({
      missClick: true
    }),
    computed: {
      popupClasses(){
        let classList = "";
        if(this.positionTop){
          classList += ' rtb-popup--top-center';
        }
        if(this.positionBottom){
          classList += ' rtb-popup--bottom-center';
        }
        if(this.positionCenter){
          classList += ' rtb-popup--center-center';
        }
        if(this.popupType) {
          classList += ` rtb-popup-type-${this.popupType}`
        }
        return classList;
      },
    },
    methods:{
      popupEnter(){
        this.missClick = false;
      },
      popupLeave(){
        this.missClick = true;
      },
      milkClick(){
        if(this.missClick){
          this.close();
        }
      },
      close(){
        this.$refs.popupWrapper.classList.remove('rtb-popup-wrapper--active');
        document.body.style.overflow = 'unset';
        document.documentElement.style.overflowY = 'unset';
      },
      countOffset(){
        setTimeout(() => {
          if(window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && !this.$el.parentNode.classList.contains('rt-banner-image')){
            this.svgOffset = parseInt(variables["mobile-upper-limit"]) - window.innerWidth;
            return this.svgOffset
          }
        },0);
      }
    },

    mounted(){
      window.addEventListener('resize', () => {
        this.countOffset()
      });
      this.countOffset();
      document.querySelector('body').addEventListener('open-popup', (e) => {
        if(this.$el.querySelector('.rtb-popup').classList.contains(e.detail[1])) {
          this.$el.querySelector('.popup-content').innerHTML = e.detail[0].closest('.rt-card').querySelector('.rt-card__popup-benefits').innerHTML;
          this.$el.classList.add('rtb-popup-wrapper--active');
        }
      })
    },
    render: function(h) {
      return <div onClick={this.milkClick}
                  ref="popupWrapper"
                  class={"rtb-popup-wrapper" + ((!this.displayOnDesktop) ? " rtb-popup-wrapper--mobile-only": "")}>
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
            <div class="rt-col-2 rt-col-td-d-none"/>
            <div class="rt-col-8 rt-col-td-6 rt-col-md-3">
              <div class={"rtb-popup " + this.popupClasses} onMouseenter={this.popupEnter} onMouseleave={this.popupLeave}>
                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" class="rtb-popup-close" viewBox="-10 -10 35 35" onClick={this.close}>
                  <path d="M15 1.5L13.5 0l-6 6-6-6L0 1.5l6 6-6 6L1.5 15l6-6 6 6 1.5-1.5-6-6z" fill="#101828" fill-rule="evenodd" fill-opacity=".5"/>
                </svg>
                {this.$slots.default}
              </div>
            </div>
            <div class="rt-col-2 rt-col-td-d-none"/>
            </div>
          </div>
        </div>
      </div>;
    }
  };
</script>
