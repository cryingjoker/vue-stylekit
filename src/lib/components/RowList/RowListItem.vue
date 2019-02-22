<script type="text/jsx">
export default {
  name: "RtRowListItem",
  props: {
    arrayIcon: {
      type: Boolean,
      default: false
    },
    columnsQuantity: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: null
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    toggleShow() {
      this.show = !this.show;
    }
  },
  computed: {
    iconImage() {
      const styles = {};
      if (this.icon) {
        styles.backgroundImage = "url(" + this.icon + ")";
      }
      return styles;
    }
  },
  render: function(h) {
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
      } else {
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
    } else {
      const columnClass = (() => {
        let profitColumn = '';
        if(this.columnsQuantity === 2) {
          profitColumn += ' rtb-profit--col-2 rt-col-6 '
        }
        if(this.columnsQuantity === 3) {
          profitColumn += ' rtb-profit--col-3 rt-col-4 '
        }
        return profitColumn;
      })();
      return (<div class={"rt-row-list__item rtb-profit" + (columnClass) + "rt-col-td-3 rt-col-md-3"}>
        <div class="rt-row-list__header">
          <div class="rt-row-list__icon" style={this.iconImage}></div>
          {this.$slots.option}
        </div>
      </div>);

    }
  }
};
</script>
