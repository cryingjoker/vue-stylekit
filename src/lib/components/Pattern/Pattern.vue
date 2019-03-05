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
    updated(){},
    methods:{},
    beforeDestroy(){},
    render: function(h) {

      const patternItem = (() => {
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
        </svg>
      })();

      return <div class="rt-pattern">
        {patternItem}
        </div>
    }
  };
</script>
