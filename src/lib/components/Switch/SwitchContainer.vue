

<script type="text/jsx">

export default {
  name: "RtSwitchContainer",
  props: {
  },
  data:() => ({
    index: null,
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
        }
        if (vNode.$children) {
          this.emitToAllChildren(vNode.$children,event);
        }
      });
    },
    emitSelectedData(){
      const responseArray = {};
      Object.keys(this.switcherData).forEach((switcherDataKey)=>{
        responseArray[this.switcherData[switcherDataKey].name] = responseArray[this.switcherData[switcherDataKey].name] || [];
        if(this.switcherData[switcherDataKey].checked){
          if(this.switcherData[switcherDataKey].value.search('#') === -1) {
            responseArray[this.switcherData[switcherDataKey].name].push(this.switcherData[switcherDataKey].value)
          }
        }
      })
      this.$emit('change',responseArray)
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
      this.emitSelectedData();
    },
    findAllChildren(vNodeArray){
      vNodeArray.forEach((vNode)=>{
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch')>0) {
          vNode.$on('changeswitcher',(res)=>{
            this.updateSwitcherData(res);
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
