<script type="text/jsx">

export default {
  name: "RtRadioButtonContainer",
  props: {
    setPropsOnNotChecked: {
      type: String,
      default: null
    }
  },
  data:() => ({
    index: null,
    radioData: {},
    radioNamesMap: {}
  }),

  beforeDestroy() {
  },
  mounted(){
    this.findAllChildren(this.$children);
  },
  methods: {
    emitSelectedData(){
      const responseArray = {};
      Object.keys(this.radioData).forEach((radioDataKey)=>{
        responseArray[this.radioData[radioDataKey].name] = responseArray[this.radioData[radioDataKey].name] || [];
        const radioDataItem = this.radioData[radioDataKey];
        if(radioDataItem.checked || this.setPropsOnNotChecked){
          if(radioDataItem && radioDataItem.value && radioDataItem.value.search('#') === -1) {
            if(radioDataItem.checked) {
              responseArray[radioDataItem.name].push(radioDataItem.value);
            }else{
              responseArray[radioDataItem.name].push(this.setPropsOnNotChecked);
            }
          }
        }
      });
      this.$emit('change',responseArray);
    },
    updateRadioData(radioData){
      const uidArray = this.radioNamesMap[radioData.name];
      uidArray.forEach((uid)=>{
        if(uid !== radioData['_uid']) {
          this.radioData[uid].checked = false;
        }else{
          this.radioData[uid].checked = true;
        }
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
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtRadioButton')>0) {
          vNode.$on('change-radiobutton',(res)=>{
            this.updateRadioData(res);
          });

          const radioDataItem = {
            name: vNode.name,
            value: vNode.value,
            checked: vNode.checked
          };

          this.$set(this.radioData,vNode._uid,radioDataItem);
          const radioNames = this.radioNamesMap[vNode.name] || [];
          radioNames.push(vNode._uid);
          this.$set(this.radioNamesMap,vNode.name,radioNames);
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
