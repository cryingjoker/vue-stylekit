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
  mounted() {
    if(this.$parent.$parent._props.noBorders){
      let tableBorder = document.createElement("div");
      tableBorder.classList.add('border-element');
      this.$el.appendChild(tableBorder);
    };
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

    console.info('this.tableLabels',this.tableLabels);
    let slotLabel = '';
    if(this.colspan == 1){
      slotLabel = this.tableLabels[this.slotIndex]
    }else{
      for(let i = 0;  i <= this.colspan; i++){
        slotLabel += this.tableLabels[i] + ', '
      }

    }
    return (
      <td
        style={style}
        colspan={this.colspan}
        class={classList}
        label={slotLabel}
      >
        {this.html ? <div domPropsInnerHTML={this.html} class="rt-table-body__content"></div> : <div class="rt-table-body__content">{this.$slots.default}</div>}
      </td>
    );
  }
};
</script>
