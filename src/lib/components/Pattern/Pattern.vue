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
      mainColor: ''
  }),
  mounted(){
    let sibling = this.$parent.$children[1];
    this.mainColor = this.topColor;
    if(sibling._props.backgroundColor != null) {
      this.mainColor = sibling._props.backgroundColor;
    }
  },
  render: function(h) {

    const patternItem = (() => {
      if(this.patternType === 1) {
        return <svg height="100%" viewBox="50 0 768 401" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
          <defs>
            <path id="a" d="M.439.569h767v400h-767z"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path class={"rt-pattern--" + this.mainColor} d="M.439.569h767v400h-767z" fill-rule="nonzero"/>
            <mask id="b" fill="#fff">
              <use xlinkHref="#a"/>
            </mask>
            <g fill-rule="nonzero" mask="url(#b)">
              <path class={"rt-pattern--" + this.leftColor} d="M286.317 152.379l-17.87-29.86-.11.073c-.358-.676-.683-1.364-1.084-2.029-11.927-19.826-38.062-26.59-58.377-15.108-.005.007-766.935 433.524-766.935 433.524L64.785 700.065l411.189-232.428-189.657-315.258z"/>
              <path class={"rt-pattern--" + this.rightColor} d="M902.474 303.451c-39.085-64.81-75.507-66.819-146.447-85.151L270.649 92.872c-18.223-4.71-36.653-2.036-51.653 6.432-4.822 2.72-10.505 5.92-10.505 5.92 20.297-11.445 46.418-4.696 58.341 15.075.225.372.399.758.61 1.134.174.26.382.507.551.77l.006.002.03.046c.031.051 7.181 11.886 17.872 29.667L540.303 573.75l329.26 545.954 392.123-220.932-359.212-595.32z"/>
            </g>
          </g>
        </svg>;
      }
      if(this.patternType === 2) {
        return <svg height="100%" viewBox="0 0 405 258" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
          <defs>
            <path id="a" d="M0 0h395v275H0z" class={"rt-pattern--" + this.mainColor}/>
            <path class={"rt-pattern--" + this.rightColor} d="M1137.455 115.663c-36.356-48.315-65.372-46.867-123.09-55.524L619.454.911c-14.827-2.224-29.202 1.446-40.379 9.44-3.593 2.569-7.828 5.59-7.828 5.59 15.124-10.807 36.376-7.62 47.467 7.12.209.277.379.57.577.851.16.192.345.371.501.567l.005.001.027.034c.03.038 6.678 8.86 16.627 22.118l236.63 314.472 306.258 407.003 292.208-208.653-334.093-443.79z" id="c"/>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <use xlinkHref="#a"/>
            <g mask="url(#b)">
              <g transform="rotate(111 412.668 -26.788)">
                <path class={"rt-pattern--" + this.leftColor} d="M636.82 46.964l-16.64-22.271-.082.067c-.34-.509-.655-1.029-1.028-1.524-11.098-14.783-32.362-17.981-47.498-7.142C571.57 16.1.175 425.314.175 425.314l524.24 97.699 306.35-219.399L636.82 46.964z"/>
                <use xlinkHref="#c"/>
              </g>
            </g>
          </g>
        </svg>;
      }
    })();

    return <div class="rt-pattern">
      {patternItem}
      </div>;
  }
};
</script>
