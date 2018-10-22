<script type="text/jsx">


  export default {
    name: 'RtTableRow',
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
    render: function(h) {
      const renderSlots = ()=> {
        let counter = 0;
        return this.$slots.default.map((slotVNode)=>{
          if(slotVNode.tag && slotVNode.tag.search(/RtTableItem/gi) >= 0) {
            slotVNode.componentOptions = slotVNode.componentOptions || {};
            slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
            slotVNode.componentOptions.propsData.slotIndex = counter;
            counter++;
          }
          return slotVNode
        })
      }
      return <div class={'rt-table-body__row'+(this.fill ? ' rt-table-body__row--fill' : '')}>
        {renderSlots()}
      </div>
    }
  };
</script>
