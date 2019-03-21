<script type="text/jsx">
export default {
  name: "RtRowListItem",
  props: {
    arrayIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  data: () => ({
    show: false,
  }),
  computed: {
    iconImage() {
      const styles = {};
      if (this.icon) {
        styles.backgroundImage = "url(" + this.icon + ")";
      }
      return styles;
    }
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  },
  render: function(h) {
    this.columnsQuantity = this.$parent._props.columnsQuantity;
    this.companyProfits = this.$parent._props.companyProfits;
    this.includedServices = this.$parent._props.includedServices;
    this.isProfitList = this.$parent._props.isProfitList;
    if(this.columnsQuantity === 1){
      if (this.$slots.moreInfo) {
        return (
          <div
            class={
              "rt-row-list__item rt-col-12 rt-col-md-3" +
              (this.show ? " rt-row-list__item--active" : "")
            }
            onClick={this.toggleShow}
          >
            <div class="rt-row-list__header rt-row-list__header--has-more-content row">
              {this.$slots.icon ? (
                <div class="rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom">
                  {this.$slots.icon}
                </div>
              ) : null}
              <div
                class={
                  this.$slots.icon
                    ? "rt-row-list__content rt-col-7 rt-col-md-3"
                    : "rt-row-list__content rt-col-8 rt-col-md-3"
                }
              >
                {this.$slots.option}
              </div>
              <div class="rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top">
                {this.$slots.value}
              </div>
            </div>
            <div class={"rt-row-list__body row"}>
              {this.$slots.icon ? <div class="rt-col-1 rt-col-md-3" /> : null}
              <div
                class={
                  this.$slots.icon
                    ? "rt-col-7 rt-col-md-3"
                    : "rt-col-8 rt-col-md-3"
                }
              >
                {this.$slots.moreInfo}
              </div>
            </div>
          </div>
        );
      } else if(this.companyProfits){
        return (
          <div class="rt-row-list__item rt-col-3 rt-col-td-3 rt-col-md-3 rtb-profit rtb-company-profits">
            <div class="rt-row-list__header">
              <div class="rt-row-list__icon" style={this.iconImage}></div>
              {this.$slots.option}
            </div>
          </div>
        )
      }else {
        return (
          <div class="rt-row-list__item rt-col-12 rt-col-md-3">
            <div class="rt-row-list__header row">
              {this.$slots.icon ? (
                <div class="rt-row-list__icon rt-col-1 rt-col-md-3 rt-md-space-bottom">
                  {this.$slots.icon}
                </div>
              ) : null}
              <div
                class={
                  this.$slots.icon
                    ? "rt-row-list__content rt-col-7 rt-col-md-3"
                    : "rt-row-list__content rt-col-8 rt-col-md-3"
                }
              >
                {this.$slots.option}
              </div>
              <div class="rt-row-list__value rt-col-4 rt-col-md-3 rt-md-space-top">
                {this.$slots.value}
              </div>
            </div>
          </div>
        );
      }
    } else if(this.isProfitList){
      const columnClass = (() => {
        let profitColumn = '';
        if(this.columnsQuantity === 2) {
          profitColumn += ' rtb-profit--col-2 rt-col-6 ';
        }
        if(this.columnsQuantity === 3) {
          profitColumn += ' rtb-profit--col-3 rt-col-4 ';
        }
        return profitColumn;
      })();
      return (<div class={"rt-row-list__item rtb-profit" + (columnClass) + "rt-col-td-3 rt-col-md-3"}>
        <div class="rt-row-list__header">
          <div class="rt-row-list__icon" style={this.iconImage}></div>
          {this.$slots.option}
        </div>
      </div>);
    } else {
      const columnClass = (() => {
        let profitColumn = '';
        if(this.columnsQuantity === 2) {
          profitColumn += ' rtb-profit--col-2 rt-col-6 ';
        }
        if(this.columnsQuantity === 3) {
          profitColumn += ' rtb-profit--col-3 rt-col-4 ';
        }
        return profitColumn;
      })();
      return (<div class={"rt-row-list__item rtb-profit rtb-services" + (columnClass) + "rt-col-td-3 rt-col-md-3"}>
        <div class="rt-row-list__header">
          <div class="rt-row-list__icon" style={this.iconImage}></div>
          {this.$slots.option}
        </div>
      </div>);
    }
  }
};
</script>
