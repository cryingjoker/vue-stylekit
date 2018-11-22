<script type="text/jsx">

  export default {
    name: "RtFilterWatcher",
    inject: ["RtFilter"],
    props:{
      options:{
        type: Array,
        default: null
      },
      values: {
        type: Array,
        default: null
      },
    },
    data: () => ({
      index: null,
      selectedProps: {},
      isActive: true
    }),
    created() {
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },
    mounted(){
      this.RtFilter.addListener(this.onUpdateProps)
    },
    methods: {
      checkValue(watcherValue, filterValue){
        let res = false;
        let typeOfCheck = 0;
        if(watcherValue.search('less than') === 0){
          typeOfCheck = 1;
        }
        if(watcherValue.search('more than') === 0){
          typeOfCheck = 2;
        }
        switch (typeOfCheck) {
          case 1:
            res = filterValue - 0 < (watcherValue.replace('less than','') - 0);
            break;
          case 2:
            res = filterValue - 0 > (watcherValue.replace('less than','') - 0);
            break;
          default:
            res = filterValue === watcherValue;
            break;
        }
        return res;
      },
      onUpdateProps(props){
        let hasFound = false;
        this.options.forEach((optionName,optionIndex)=>{
          if(!props[optionName]){
            hasFound = true;
            return false;
          }
          let valueOptions;
          if(!Array.isArray(this.values[optionIndex])){
            valueOptions = [this.values[optionIndex]]
          }else{
            valueOptions = this.values[optionIndex]
          }
          valueOptions.forEach((option)=>{
            if(Array.isArray(props[optionName])){
              props[optionName].forEach((propsOption)=>{
                hasFound = this.checkValue(option, propsOption);
              });
            }else {
              hasFound = this.checkValue(option, props[optionName]);
            }
            if(hasFound){
              return false
            }
          });

          if(hasFound){
            return false;
          }
        });
        this.isActive = hasFound;
      },
      setPropsToChildren() {
        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode,'index',this.index);
          }
        });
      }
    },
    render() {
      if(this.isActive) {
        return <div class="d-static">{JSON.stringify(this.options)}<br/>{JSON.stringify(this.values)}<br/>{this.$slots.default}</div>
      }else{
        return null
      }
    }
  };
</script>
