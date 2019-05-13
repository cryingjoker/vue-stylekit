<script type="text/jsx">
  export default {
    name: "RtBenefitBlock",
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
      }
    },
    render(h){

      return <div class={"rt-benefit-block " + this.backgroundColorClass}>
        <div class="rt-container">
          <div class="rt-col">
            <div class="row">
              {this.$slots.default}
            </div>
          </div>
        </div>
      </div>;
    }
  };
</script>
