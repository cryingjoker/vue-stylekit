<script type="text/jsx">
  export default {
    name: "RtRealPopup",
    props: {
      topCenter: {
        type: Boolean,
        default: false
      },
      displayOnDesktop: {
        type: Boolean,
        default: true
      }
    },

    data: () => ({

    }),

    mounted(){
      const countOffset = () => {
        setTimeout(() => {
          if(window.innerWidth <= 767 && !this.$el.parentNode.classList.contains('rt-banner-image')){
            this.svgOffset = 767 - window.innerWidth;
            return this.svgOffset
          }
        },0);
      };
      window.addEventListener('resize', () => {
        countOffset()
      });
      countOffset();

      this.$el.querySelector(".rtb-popup-close").addEventListener("click", () => {
        this.$el.classList.remove('rtb-popup-wrapper--active');
      });
    },
    render: function(h) {

      return <div class={"rtb-popup-wrapper" + ((!this.displayOnDesktop) ? " rtb-popup-wrapper--mobile-only": "")}>
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
            <div class="rt-col-2 rt-col-td-d-none"/>
            <div class="rt-col-8 rt-col-td-6 rt-col-md-3">
              <div class={"rtb-popup" + (this.topCenter ? " rtb-popup--top-center" : " rtb-popup--center-center")}>
                <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg" class="rtb-popup-close" viewBox="-10 -10 35 35">
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
