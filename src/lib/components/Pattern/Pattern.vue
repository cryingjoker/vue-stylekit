<script type="text/jsx">
  import variables from "../../variables.json";

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
      },
      patternForTextBlock: {
        type: Boolean,
        default: false
      }
    },

    data: () => ({
      mainColor: '',
      svgOffset: null,
      activeViewBox: ''
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


    const patternPositioning = () => {
      if(this.patternForTextBlock){
        let parentBlock = this.$el.parentNode;
        let height = parentBlock.offsetHeight;
        let width = parentBlock.offsetWidth;
        let windowWidth = window.innerWidth;
        let minX = 0;
        if(window.innerWidth <= 500) {
          minX = windowWidth/2 - 80;
        } else if(windowWidth <= parseInt(variables["tablet-upper-limit"])) {
          minX = (1460 - windowWidth) / 4;
        }
        this.activeViewBox = `${minX} 0 ${width} ${height}`;
        this.$el.getElementsByTagName('svg')[0].setAttribute('viewBox', this.activeViewBox);
      }
//      if(this.patternType === 3) {
//        let parentBlock = this.$el.parentNode;
//        let height = parentBlock.offsetHeight;
//        let width = parentBlock.offsetWidth;
//        let windowWidth = window.innerWidth;
//        let minX = windowWidth > parseInt(variables["tablet-upper-limit"]) ? (1920 - windowWidth) / 2 : (1920 - windowWidth) / 1.5;
//        let minY = height <= 600 ? 600 - height : 0;
//        this.activeViewBox = `${minX} ${minY} ${width} ${height}`;
//        this.$el.getElementsByTagName('svg')[0].setAttribute('viewBox', this.activeViewBox);
//      }
    };

    const countOffset = () => {
      if(this.$el.parentNode){
        setTimeout(() => {
          if(window.innerWidth <= parseInt(variables["mobile-upper-limit"]) && !this.$el.parentNode.classList.contains('rt-banner-image')){
            this.svgOffset = parseInt(variables["mobile-upper-limit"]) - window.innerWidth;
            return this.svgOffset
          }
        },0);
      }
    };
    window.addEventListener('resize', () => {
      countOffset();
      patternPositioning();
    });
    countOffset();
    patternPositioning();
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
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 804 500" height="500">
          <path class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M0 0h804v500H0z"/>
          <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M460.8 150.7c31.1 40.3 24.4 98.8-14.9 130.6-.7.6-27.6 22.2-63 50.7L174.3 500l307.2-.1c14.8-128.7 25.1-218.7 25.1-218.8 4.7-40.8-6.8-79.8-29.7-109.6-7.4-9.5-16.1-20.8-16.1-20.8z" transform="translate(-1.5,-1)"/>
          <path class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M0 500h174.3l208.2-167.8s61.9-49.8 63.2-50.9c39.4-31.8 46.1-90.2 15.1-130.6 0 0-23.4-30.3-63.5-82.4-15.3-19.7-33-42.7-52.7-68.3H0v500z"/>
        </svg>

      }
      if(this.patternType === 3) {
        return null //empty digit - can be fullfilled later
      }
      if(this.patternType === 4) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <g fill="none" fill-rule="evenodd">
            <g mask="url(#b)">
              <g transform="rotate(71 1330.093 458.357)">
                <path class={"rt-pattern--" + this.mainColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M0 0h1595v1781H0z"/>/>
                <g mask="url(#d)">
                  <g transform="scale(-1 1) rotate(83 -69.592 7.323)">
                    <g mask="url(#f)">
                      <path class={"rt-pattern--" + this.rightColor.replace(/^(b2b\-)|(b2c\-)/i,'')} d="M935.18 796.972l76.12 1.677-.007-.288c1.67.124 3.323.322 5.022.353 50.615 1 93.349-39.471 95.45-90.402l4.287-103.92c16.51-400.12 75.067-1818.837 75.067-1818.837L172.908-249.778l-42.55 1030.872 804.822 15.878z"/>
                      <path class={"rt-pattern--" + this.leftColor.replace(/^(b2b\-)|(b2c\-)/i,'')} fill-rule="nonzero" d="M-57.81 1761.074c165.565 3.086 211.332-61.943 327.276-171.834l793.288-751.88c29.783-28.227 46.083-65.424 47.657-103.018.508-12.082 1.121-26.315 1.121-26.315-2.153 50.853-44.843 91.315-95.35 90.374-.95-.016-1.87-.145-2.811-.192-.685.022-1.384.12-2.068.125l-.01.009h-.12c-.132 0-30.379-.54-75.767-1.446l-1077.623-20.08-1394.71-25.985-41.915 982.238 1521.032 28.004z"/>
                    </g>
                  </g>
                </g>
              </g>
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
