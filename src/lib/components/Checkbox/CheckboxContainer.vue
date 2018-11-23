

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
  mounted: function() {
  },
  updated() {
  },
  beforeDestroy() {
  },
  methods: {
    emitToAllChildren(vNodeArray,event){
      vNodeArray.forEach((vNode)=> {
        if (vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtCheckbox') > 0) {
          vNode.$emit('emittocheckbox',event)
        }
        if (vNode.$children) {
          this.emitToAllChildren(vNode.$children,event);
        }
      });
    },
    emitSelectedData(){
      const responseArray = {};
    console.info('emitSelectedData')
      Object.keys(this.checkboxData).forEach((checkboxDataKey)=>{
        responseArray[this.checkboxData[checkboxDataKey].name] = responseArray[this.checkboxData[checkboxDataKey].name] || [];
        console.info('this.checkboxData[checkboxDataKey]',this.checkboxData,checkboxDataKey)
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
      })
      this.$emit('change',responseArray)
    },
    updateCheckboxData(checkboxData){
      console.info('checkboxData',checkboxData)
      this.$set(this.checkboxData,checkboxData._uid,{
        name: checkboxData.name,
        value: checkboxData.value,
        checked: checkboxData.checked
      });
      // if(checkboxData.value === '#allparams' && checkboxData.checked){
      //   this.checkboxNamesMap[checkboxData.name].forEach((uid)=>{
      //     this.$set(this.checkboxData[uid],'checked',true);
      //   });
      //   this.emitToAllChildren(this.$children,this.checkboxData);
      // }else{
      //   if(checkboxData.value !== '#allparams' && !checkboxData.checked){
          this.checkboxNamesMap[checkboxData.name].forEach((uid)=>{
            if(this.checkboxData[uid].value === '#allparams'){
              this.$set(this.checkboxData[uid],'checked',false)
              const req = {}
              req[uid] = this.checkboxData[uid];
              this.emitToAllChildren(this.$children,req);
              return false
            }
          })
      //   }
      // }
      this.emitSelectedData();
    },
    findAllChildren(vNodeArray){
      vNodeArray.forEach((vNode)=>{
        if(vNode && vNode.$vnode && vNode.$vnode.tag.search('-RtCheckbox')>0) {
          console.info('vNode',vNode);
          vNode.$on('changecheckbox',(res)=>{
            console.info('res',res);
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
          },1000)
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
      {JSON.stringify(this.checkboxData)}
      {this.$slots.default}
    </div>
  }
};
</script>
