

<script type="text/jsx">

export default {
  name: "RtSwitchContainer",
  props: {
  },
  data:() => ({
    switcherData: {},
    switcherNamesMap: {}
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
          console.info('event',event);
        }
        if (vNode.$children) {
          this.emitToAllChildren(vNode.$children,event);
        }
      });
    },
    updateSwitcherData(switcherData){
      this.$set(this.switcherData,switcherData._uid,{
        name: switcherData.name,
        value: switcherData.value,
        checked: switcherData.checked
      });
      if(switcherData.value === '#allparams' && switcherData.checked){
        this.switcherNamesMap[switcherData.name].forEach((uid)=>{
          this.$set(this.switcherData[uid],'checked',true);
        });
        this.emitToAllChildren(this.$children,this.switcherData);
      }else{
        if(switcherData.value !== '#allparams' && !switcherData.checked){
          this.switcherNamesMap[switcherData.name].forEach((uid)=>{
            if(this.switcherData[uid].value === '#allparams'){
              this.$set(this.switcherData[uid],'checked',false)
              const req = {}
              req[uid] = this.switcherData[uid];
              this.emitToAllChildren(this.$children,req);
              return false
            }
          })
        }
      }
    },
    findAllChildren(vNodeArray){
      vNodeArray.forEach((vNode)=>{
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch')>0) {
          vNode.$on('changeswitcher',(res)=>{
            this.updateSwitcherData(res);
            vNode.$emit('test','!!!')
          });
          this.$set(this.switcherData,vNode._uid,{
            name: vNode.fieldName,
            value: vNode.value,
            checked: vNode.checked
          });
          const switcherNames = this.switcherNamesMap[vNode.fieldName] || [];
          switcherNames.push(vNode._uid);
          this.$set(this.switcherNamesMap,vNode.fieldName,switcherNames);

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
