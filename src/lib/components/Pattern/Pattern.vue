<script type="text/jsx">
  export default {
    name: "RtPattern",
    props: {
      topColor: {
        type: String,
        default: null,
        required: true
      },
      leftColor: {
        type: String,
        default: null,
        required: true
      },
      rightColor: {
        type: String,
        default: null,
        required: true
      },
      patternType: {
        type: Number,
        default: '1'
      }
    },

    data: () => ({
      mainColor: '',
      svgOffset: null
    }),

  mounted(){
      this.mainColor = this.topColor;
      if(this.$parent.$el.classList.contains('rt-banner')){
        if(this.$parent.$children[1]) {
          let sibling = this.$parent.$children[1];
          if(sibling._props.backgroundColor != null) {
            this.mainColor = sibling._props.backgroundColor;
            if(sibling._props.patternTopColor != "") {
              this.mainColor = sibling._props.patternTopColor;
            }
          }
        }
      }

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
    },
    render: function(h) {

      const patternItem = (() => {
        if(this.patternType === 1) {
          return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 400" height="100%">
            <path class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M0 0h768v400H0z"/>
            <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M768 279.7c-15.8-8.5-34.7-16.4-56.4-26.7-66.3-31.6-452.4-215.7-452.5-215.8-17-8.1-35.6-9-51.9-3.5-5.3 1.8-11.4 3.8-11.4 3.8 22.1-7.4 46.5 4.2 54.4 25.9.1.4.2.8.4 1.2.1.3.3.6.4.9v.1c0 .1 4.8 13 11.9 32.5L373.5 400H768V279.7z"/>
            <path class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M267.5 96.7L255.7 64h-.1c-.2-.7-.4-1.5-.7-2.2-7.9-21.7-32.3-33.4-54.4-26 0 0-84.6 28.3-199.9 66.8V400h377.6L267.5 96.7z"/>
          </svg>

        }
        if(this.patternType === 2) {
          return <svg height="500px" viewBox="0 0 804 501" xmlns="http://www.w3.org/2000/svg" href="http://www.w3.org/1999/xlink">
            <defs>
              <path id="a" d="M.008.673h803v500h-803z"class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')}/>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g mask="url(#b)">
                <path  class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M382.519 332.73l59.42-47.657-.19-.216c1.36-.979 2.754-1.89 4.076-2.958 39.437-31.777 46.165-90.26 15.026-130.631-.003-.001-23.38-30.308-63.54-82.373C152.666-248.27-714.759-1372.855-714.759-1372.855L-874.839 20.873l630.29 817.151 627.068-505.295z"/>
                <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M242.405 1709.81c128.882-104.086 122.143-183.333 140.343-342.071 18.249-159.153 124.5-1085.898 124.522-1086.09 4.676-40.775-6.75-79.754-29.72-109.567-7.38-9.584-16.062-20.882-16.062-20.882 31.05 40.345 24.35 98.792-14.966 130.545-.74.598-1.526 1.09-2.278 1.66-.51.457-.984.98-1.505 1.425l-.002.013-.092.078c-.101.084-23.63 19.118-59.001 47.605L-455.216 1010l-1085.688 876.82L-941.4 2666.3l1183.806-956.49z"/>
              </g>
            </g>
          </svg>
        }
      })();

    return <div class="rt-pattern">
      {patternItem}
      </div>;
  }
};
</script>
