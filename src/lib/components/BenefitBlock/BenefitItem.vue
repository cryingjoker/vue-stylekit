<script type="text/jsx">

  import variables from "../../variables.json";

  export default {
    name: "RtBenefitItem",
    props: {},
    data: () => ({
      show: false,
      iconSize: '',
      columnsQuantity: null,
      step: null,
      alignCenter: false,
      inlineLayout: false
    }),
    computed: {
      iconImage() {
        const styles = {};
        if (this.iconSize) {
          if(typeof this.iconSize === 'number') {
            styles.width = "" + this.iconSize + "px";
            styles.height = "" + this.iconSize + "px";
            styles.flexBasis = "" + this.iconSize + "px";
          } else if(typeof this.iconSize === 'string'){
            styles.width = this.iconSize;
            styles.height = this.iconSize;
            styles.flexBasis = this.iconSize;
          }
        } else {
          styles.width = "80px";
          styles.height = "80px";
          styles.flexBasis = "80px";
        }
        return styles;
      },
      textFlexBasis() {
        const styles = {};
        if(this.inlineLayout) {
          if(this.iconSize) {
            if(typeof this.iconSize === 'number') {
              styles.flexBasis = "calc(100% - " + (this.iconSize) + "px)";
            }
            if(typeof this.iconSize === 'string') {
              styles.flexBasis = "calc(100% - " + (this.iconSize) + ")";
            }
          } else {
            styles.flexBasis = "calc(100% - 80px)";
          }
          console.log(styles.iconSize);
        }
        return styles;
      }
    },
    mounted(){
      this.iconSize = this.$parent._props.iconSize;
      this.columnsQuantity = this.$parent._props.columnsQuantity;
      this.step = this.$parent._props.step;
      this.hasIcon = this.$parent._props.hasIcon;
      this.stepTitle = this.$parent._props.stepTitle;
      this.hasImage = this.$parent._props.hasImage;
      this.alignCenter = this.$parent._props.alignCenter;
      this.inlineLayout = this.$parent._props.inlineLayout;
//      window.addEventListener('resize', {function});

    },
    methods: {},
    render: function (h) {
      const icon = (() => {
        if(this.hasIcon && !this.step && !this.hasImage) {
          return <div class="rt-benefit-item__icon" style={this.iconImage}>{this.$slots.image}</div>
        }
      })();
      const step = (() => {
        if(this.step && !this.hasImage && !this.hasIcon ) {
          return <h1 class="rt-benefit-item__step rt-font-h1 rt-font-bold">
              {(Array.prototype.indexOf.call(this.$el.parentNode.children, this.$el) + 1) + ' ' + this.stepTitle}
            </h1>
        }
      })();
      const image = (() => {
        if(this.hasImage && !this.hasIcon && !this.step) {
          return <div class="rt-benefit-item__image">{this.$slots.image}</div>
        }
      })();

      const columnClass = (() => {
        if(this.columnsQuantity === 2) {
          return 'rt-col-6 rt-col-td-3 rbi-pr1c '
        }
        if(this.columnsQuantity === 3) {
          return 'rt-col-4 rt-col-td-2 rbi-pr70 '
        }
        if(this.columnsQuantity === 4) {
          return 'rt-col-3 rt-col-td-3 '
        }
      })();

      return <div class={"rt-benefit-item " + columnClass + " rt-col-md-3" +
      (this.alignCenter ? " rt-benefit-item--center" : "") +
      (this.inlineLayout ? " rt-benefit-item--inline" : "")}>
          {icon}
          {step}
          {image}
          <div class="rt-benefit-item__text" style={this.textFlexBasis}>{this.$slots.description}</div>
        </div>
    }
  }
</script>
