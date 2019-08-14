<script type="text/jsx">
export default {
  name: "RtTableRow",
  components: {},
  inject: {
    tableLabels: {}
  },
  props: {
    fill: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    // return this.$slots.default.map(slotVNode => {
    //   console.info('!!',slotVNode.elm);
    // })

  },
  render: function(h) {
    const renderSlots = () => {
      let counter = 0;
      return this.$slots.default.map(slotVNode => {
        if (slotVNode.tag && slotVNode.tag.search(/RtTableItem/gi) >= 0) {
          slotVNode.componentOptions = slotVNode.componentOptions || {};
          slotVNode.componentOptions.propsData =
            slotVNode.componentOptions.propsData || {};
          // for(let i in Object.keys(slotVNode)){
          //   console.info('++',Object.keys(slotVNode)[i],slotVNode[Object.keys(slotVNode)[i]])
          // }

          slotVNode.componentOptions.propsData.slotIndex = counter;
          if(slotVNode.componentOptions.propsData.colspan){
           counter +=  slotVNode.componentOptions.propsData.colspan - 0 ;
          }else {
            counter++;
          }
        }
        return slotVNode;
      });
    };
    return (
      <tr
        class={
          "rt-table-body__row" + (this.fill ? " rt-table-body__row--fill" : "")
        }
      >
        {renderSlots()}
      </tr>
    );
  }
};
</script>
