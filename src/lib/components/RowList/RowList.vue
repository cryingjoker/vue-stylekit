<!--<template>-->
  <!--<div class="rt-row-list row" :class="{ 'rtb-profit-list': isProfitList }">-->
    <!--<slot />-->
  <!--</div>-->
<!--</template>-->
<script type="text/jsx">
export default {
  name: "RtRowList",
  props: {
    isProfitList: {
      type: Boolean,
      default: false
    },
    columnsQuantity: {
      type: Number,
      default: 1
    },
    companyProfits: {
      type: Boolean,
      default: false
    },
    includedServices: {
      type: Boolean,
      default: false
    }
  },
  render(h){

    const listType = (() => {
      if(this.isProfitList) {
        return <div class={"rt-row-list row" + (this.isProfitList ? " rtb-profit-list" : "")}>
          <div class="rt-container rt-col-12">
            <div class="row">
              {this.$slots.default}
            </div>
          </div>
        </div>;
      } else {
        return <div class="rt-row-list row">
          {this.$slots.default}
        </div>;
      }
    })();

    return <div>{listType}</div>;
  }
};
</script>
