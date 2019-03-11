<template>
  <div class="rt-row-list row" :class="{ 'rtb-profit-list': isProfitList }">
    <slot />
  </div>
</template>
<script>
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
    }
  }
};
</script>
