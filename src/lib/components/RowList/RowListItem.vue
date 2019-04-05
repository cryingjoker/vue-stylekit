<script type="text/jsx">

  import variables from "../../variables.json";

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
    },
    buttonInMobile: {
      type: Boolean,
      default: false
    },
    phoneNumber: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    show: false,
    componentView: 'desktop',
    componentLayout: '',
    iconSize : ''
  }),
  computed: {
    iconImage() {
      const styles = {};
      if (this.icon) {
        styles.backgroundImage = "url(" + this.icon + ")";
      }
      if(this.iconSize) {
        styles.width = "" + this.iconSize + "px";
        styles.height = "" + this.iconSize + "px";
        styles.flexBasis = "" + this.iconSize + "px";
      }
      return styles;
    }
  },
  mounted(){
    this.iconSize = this.$parent._props.iconSize;
    const toggleComponentView = () => {
      if(this.buttonInMobile) {
        if(window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          this.componentView = 'mobile';
        } else {
          this.componentView = 'desktop';
        }
      }
    };
    toggleComponentView();
    window.addEventListener('resize', toggleComponentView);
    if(this.$parent._props.isHelpBlock){
      this.componentLayout = this.$el.parentNode.children.length;
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
    this.isProfitList = this.$parent._props.isProfitList;
    this.howItWorks = this.$parent._props.isHowItWorksBlock;
    this.help = this.$parent._props.isHelpBlock;
    this.contentBlockType = this.$parent._props.contentBlockType;
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
      } else if(this.companyProfits) {
        return (
          <div class="rt-row-list__item rt-col-3 rt-col-td-3 rt-col-md-3 rtb-profit rtb-company-profits">
            <div class="rt-row-list__header">
              <div class="rt-row-list__icon" style={this.iconImage}></div>
              {this.$slots.option}
            </div>
          </div>
        )
      } else if(this.help) {
        if(this.buttonInMobile && this.componentView === 'mobile') {
          return <a href={"tel:" + this.phoneNumber} style="order:2;" class="rt-col-md-3">
              <rt-button class="rt-button-orange" style="width: 100%; margin-top:20px">Позвонить в службу поддержки</rt-button>
            </a>
        } else {
          return (
            <div class={"rt-row-list__item rt-col-td-2 rt-col-md-3 rtb-help-block" + (this.componentLayout === 4 ? ' rt-col-3' : ' rt-col-4')}>
              <div class="rt-row-list__header">
                <div class="rt-space-bottom">
                  <div class="rt-row-list__icon" style={this.iconImage}></div>
                </div>
                {this.$slots.option}
              </div>
            </div>
          )
        }
      } else if(this.howItWorks) {
        return (
          <div
            class="rt-row-list__item rt-col-3 rt-col-td-3 rt-col-md-3 rtb-profit rtb-company-profits rtb-how-it-works">
            <div class="rt-row-list__header">
              <div class="rt-row-list__image" style={this.iconImage}></div>
              {this.$slots.option}
            </div>
          </div>
        )
      } else if(this.contentBlockType){
        return <div class="rt-row-list__item rt-row-list__item--block-type rt-col">
          <div class="rt-row-list__header">
            {this.$slots.icon ? (
              <div class="rt-row-list__icon rt-md-space-bottom rt-row-list__icon--baseline">
                {this.$slots.icon}
              </div>
            ) : null}
            <div
              class="rt-row-list__content rt-row-list__content--column"
            >
              {this.$slots.option}
            </div>
          </div>
        </div>;
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
