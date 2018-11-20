

<script type="text/jsx">

export default {
  name: "RtSwitchContainer",
  props: {
  },
  data:() => ({
    switcherData: {}
  }),
  mounted: function() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  methods: {
    emitToAllChildren(vNodeArray,event){
      vNodeArray.forEach((vNode)=> {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch') > 0) {
          vNode.$emit('emittoswitcher',event)
        }
        if (vNode.$children) {
          this.emitToAllChildren(vNode.$children,event);
        }
      });
    },
    updateSwitcherData(switcherData){
      console.info('switcherData',switcherData);
      this.$set(this.switcherData,switcherData._uid,{
        name: switcherData.name,
        value: switcherData.value,
        checked: switcherData.checked
      })
    },
    findAllChildren(vNodeArray){
      vNodeArray.forEach((vNode)=>{
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch')>0) {
          vNode.$on('changeswitcher',(res)=>{
            this.updateSwitcherData(res);
            vNode.$emit('test','!!!')
          })
          this.$set(this.switcherData,vNode._uid,{
            name: vNode.fieldName,
            value: vNode.value,
            checked: vNode.checked
          })

        }

        if(vNode.$children){
          this.findAllChildren(vNode.$children);
        }
      })
    }

  },
  mounted(){
    this.findAllChildren(this.$children);

  },
  render(h){
    return <div class="d-static">
      {JSON.stringify(this.switcherData)}
      {this.$slots.default}
    </div>
  }
};
</script>
