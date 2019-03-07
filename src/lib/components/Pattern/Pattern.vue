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
        let sibling = this.$parent.$children[1];
        if(sibling._props.backgroundColor != null) {
          this.mainColor = sibling._props.backgroundColor;
        }
      }

      const countOffset = () => {
        if(window.innerWidth <= 767 && !this.$el.parentNode.classList.contains('rt-banner-image')){
          this.svgOffset = 767 - window.innerWidth;
        }
      };
      window.addEventListener('resize', () => {
        countOffset()
      });
      countOffset();
    },
    render: function(h) {

      const patternItem = (() => {
        if(this.patternType === 1) {
          return <svg height="100%" viewBox="50 0 768 401" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <defs>
              <path id="a" d="M.439.569h767v400h-767z"/>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M.439.569h767v400h-767z" fill-rule="nonzero"/>
              <mask id="b" fill="#fff">
                <use xlinkHref="#a"/>
              </mask>
              <g fill-rule="nonzero" mask="url(#b)">
                <path class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M286.317 152.379l-17.87-29.86-.11.073c-.358-.676-.683-1.364-1.084-2.029-11.927-19.826-38.062-26.59-58.377-15.108-.005.007-766.935 433.524-766.935 433.524L64.785 700.065l411.189-232.428-189.657-315.258z"/>
                <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M902.474 303.451c-39.085-64.81-75.507-66.819-146.447-85.151L270.649 92.872c-18.223-4.71-36.653-2.036-51.653 6.432-4.822 2.72-10.505 5.92-10.505 5.92 20.297-11.445 46.418-4.696 58.341 15.075.225.372.399.758.61 1.134.174.26.382.507.551.77l.006.002.03.046c.031.051 7.181 11.886 17.872 29.667L540.303 573.75l329.26 545.954 392.123-220.932-359.212-595.32z"/>
              </g>
            </g>
          </svg>
        }
        if(this.patternType === 2) {
          return <svg height="100%" viewBox={"0 0 804 501"} xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
            <defs>
              <path id="a" d="M.008.673h803v500h-803z"/>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <use class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} xlinkHref="#a"/>
              <g mask="url(#b)">
                <path  class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M382.519 332.73l59.42-47.657-.19-.216c1.36-.979 2.754-1.89 4.076-2.958 39.437-31.777 46.165-90.26 15.026-130.631-.003-.001-23.38-30.308-63.54-82.373C152.666-248.27-714.759-1372.855-714.759-1372.855L-874.839 20.873l630.29 817.151 627.068-505.295z" fill="#273A64"/>
                <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M242.405 1709.81c128.882-104.086 122.143-183.333 140.343-342.071 18.249-159.153 124.5-1085.898 124.522-1086.09 4.676-40.775-6.75-79.754-29.72-109.567-7.38-9.584-16.062-20.882-16.062-20.882 31.05 40.345 24.35 98.792-14.966 130.545-.74.598-1.526 1.09-2.278 1.66-.51.457-.984.98-1.505 1.425l-.002.013-.092.078c-.101.084-23.63 19.118-59.001 47.605L-455.216 1010l-1085.688 876.82L-941.4 2666.3l1183.806-956.49z" fill="#FFBFC3"/>
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
