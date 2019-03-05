<script type="text/jsx">
export default {
  name: "RtTableItem",
  components: {},
  inject: {
    tableLabels: {}
  },
  props: {
    mobileWidth: {
      type: String,
      default: null
    },
    html: {
      type: String,
      default: null
    },
    verticalAlign: {
      type: String,
      default: null
    },
    align: {
      type: String,
      default: null
    },
    colspan: {
      type: [Number, String],
      default: 1
    },
    slotIndex: {
      type: Number,
      default: null
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },
  render: function(h) {
    const style = {};
    let classList = "rt-table-body__item";
    if (this.verticalAlign) {
      style.verticalAlign = this.verticalAlign;
    }
    if (this.align) {
      style.textAlign = this.align;
    }

    if (this.mobileWidth) {
      if (this.mobileWidth === "50%") {
        classList += " rt-table-body__item--half-mobile-width";
      }
    }
    if(this.inactive) {
      classList += " rt-table-body__item--inactive";
    }


    return (
      <div
        style={style}
        colspan={this.colspan}
        class={classList}
        label={this.tableLabels[this.slotIndex]}
      >
        {this.html ? <div domPropsInnerHTML={this.html} class="rt-table-body__content"></div> : <div class="rt-table-body__content">{this.$slots.default}</div>}
      </div>
    );
  }
};
</script>
