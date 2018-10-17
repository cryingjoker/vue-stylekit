<script type="text/jsx">
  export default {
    name: 'RtTable',
    components: {},
    data: () => ({
      tableLabels: [],
      slotVNode: {}
    }),
    provide(){
      const tableLabels = this.tableLabels;
      return {tableLabels};
    },
    props: {
    },

    methods: {
      getLabelHtml(){
        if(this.$refs.head){
          this.$refs.head.querySelectorAll('.rt-table-head__item').forEach((nodeEl, nodeIndex)=>{
            this.$set(this.tableLabels,nodeIndex, nodeEl.innerText)
          })
        }
      }
    },

    mounted: function(){
      this.getLabelHtml();
    },
    render: function(h) {
      const renderBodyFn = ()=>{
        // this.tableLabels
        return this.$slots.body.map((slotVNode)=>{
          if(slotVNode.tag && slotVNode.tag.search(/RtTableRow/gi) >=0 ){
            slotVNode.componentOptions = slotVNode.componentOptions || {};
            slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
            slotVNode.componentOptions.propsData.tableLabels = JSON.stringify(this.tableLabels);
          }
          return slotVNode;
        })
      }
      console.info('this.tableLabels',JSON.stringify(this.tableLabels));

      return <div class="rt-table">
        <div class="rt-table-head" ref="head">
          {this.$slots.header}
        </div>

        {renderBodyFn()}

      </div>
    }
  };
</script>
