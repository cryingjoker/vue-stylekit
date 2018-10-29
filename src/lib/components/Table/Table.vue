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
            this.$set(this.tableLabels,nodeIndex, nodeEl.innerText.trim())
          })
        }
      }
    },

    mounted: function(){
      this.getLabelHtml();
    },
    render: function(h) {
      const columns = ()=>{
        if(!this.$slots.columns){
          return null
        }
        return <div class="rt-table-colgroup">
          {this.$slots.columns}
        </div>
      }
      const renderBodyFn = ()=>{
        // this.tableLabels
        if(!this.$slots.body){
          return null
        }
        return this.$slots.body.map((slotVNode)=>{
          if(slotVNode.tag && slotVNode.tag.search(/RtTableRow/gi) >=0 ){
            slotVNode.componentOptions = slotVNode.componentOptions || {};
            slotVNode.componentOptions.propsData = slotVNode.componentOptions.propsData || {};
            slotVNode.componentOptions.propsData.tableLabels = JSON.stringify(this.tableLabels);
          }
          return slotVNode;
        })
      }

      if(this.$slots.label) {
        return <div>
          <p class="rt-font-h1 rt-space-bottom25">{this.$slots.label}</p>
          <div class="rt-table">
            {columns()}
            <div class="rt-table-head" ref="head">
              {this.$slots.header}
            </div>
            {renderBodyFn()}
          </div>
        </div>
      }else{
        return <div className="rt-table">
          {columns()}
          <div className="rt-table-head" ref="head">
            {this.$slots.header}
          </div>

          {renderBodyFn()}
        </div>
      }
    }
  };
</script>
