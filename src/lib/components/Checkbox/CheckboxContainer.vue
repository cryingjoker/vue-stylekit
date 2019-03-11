<script type="text/jsx">

export default {
  name: "RtCheckboxContainer",
  props: {
    setPropsOnNotChecked: {
      type: String,
      default: null
    }
  },
  data:() => ({
    index: null,
    checkboxData: {},
    checkboxNamesMap: {}
  }),

  beforeDestroy() {
  },
  mounted(){
    this.findAllChildren(this.$children);
  },
  methods: {
    emitSelectedData(){
      const responseArray = {};
      Object.keys(this.checkboxData).forEach((checkboxDataKey)=>{
        responseArray[this.checkboxData[checkboxDataKey].name] = responseArray[this.checkboxData[checkboxDataKey].name] || [];
        const checkboxDataItem = this.checkboxData[checkboxDataKey];
        if(checkboxDataItem.checked || this.setPropsOnNotChecked){
          if(checkboxDataItem.value.search('#') === -1) {
            if(checkboxDataItem.checked) {
              responseArray[checkboxDataItem.name].push(checkboxDataItem.value);
            }else{
              responseArray[checkboxDataItem.name].push(this.setPropsOnNotChecked);
            }
          }
        }
      });
      this.$emit('change',responseArray);
    },
    updateCheckboxData(checkboxData){
      this.$set(this.checkboxData,checkboxData._uid,{
        name: checkboxData.name,
        value: checkboxData.value,
        checked: checkboxData.checked
      });
      this.emitSelectedData();
    },
    updateAllChildren(props){
      this.$children.forEach((vNode)=>{
        if('changeFromParent' in vNode ){
          vNode.changeFromParent(props);
        }
      });
    },
    findAllChildren(vNodeArray){
      vNodeArray.forEach((vNode)=>{
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtCheckbox')>0) {
          vNode.$on('changecheckbox',(res)=>{
            this.updateCheckboxData(res);
          });

          const swicherDataItem = {
            name: vNode.name,
            value: vNode.value,
            checked: vNode.checked
          };

          this.$set(this.checkboxData,vNode._uid,swicherDataItem);
          const checkboxNames = this.checkboxNamesMap[vNode.name] || [];
          checkboxNames.push(vNode._uid);
          this.$set(this.checkboxNamesMap,vNode.name,checkboxNames);
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
