<script type="text/jsx">

export default {
  name: "RtSwitchContainer",
  props: {
    setPropsOnNotChecked: {
      type: String,
      default: null
    }
  },
  data:() => ({
    index: null,
    switcherData: {},
    switcherNamesMap: {}
  }),
  updated() {
  },
  beforeDestroy() {
  },
  mounted(){
    this.findAllChildren(this.$children);

  },
  methods: {
    emitToAllChildren(vNodeArray,event){
      vNodeArray.forEach((vNode)=> {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtSwitch') > 0) {
          vNode.$emit('emittoswitcher',event);
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
        const switcherDataItem = this.switcherData[switcherDataKey];
        if(switcherDataItem.checked || this.setPropsOnNotChecked){
          if(switcherDataItem.value.search('#') === -1) {
            if(switcherDataItem.checked) {
              responseArray[switcherDataItem.name].push(switcherDataItem.value);
            }else{
              responseArray[switcherDataItem.name].push(this.setPropsOnNotChecked);
            }
          }
        }
      });
      this.$emit('change',responseArray);
    },
    updateAllChildren(props){
      this.$children.forEach((vNode)=>{
        if('changeFromParent' in vNode ){
          vNode.changeFromParent(props);
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
              this.$set(this.switcherData[uid],'checked',false);
              const req = {};
              req[uid] = this.switcherData[uid];
              this.emitToAllChildren(this.$children,req);
              return false;
            }
          });
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

          const swicherDataItem = {
            name: vNode.fieldName,
            value: vNode.value,
            checked: vNode.checked
          };

          this.$set(this.switcherData,vNode._uid,swicherDataItem);
          const switcherNames = this.switcherNamesMap[vNode.fieldName] || [];
          switcherNames.push(vNode._uid);
          this.$set(this.switcherNamesMap,vNode.fieldName,switcherNames);
          setTimeout(()=>{
            this.emitSelectedData();
          },1000);
        }

        if(vNode.$children){
          this.findAllChildren(vNode.$children);
        }
      });
    }

  },
  render(h){
    return <div class="d-static">
      {this.$slots.default}
    </div>;
  }
};
</script>
