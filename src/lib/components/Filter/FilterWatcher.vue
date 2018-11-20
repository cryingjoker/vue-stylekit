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
            if(option == props[optionName]){
              hasFound = true;
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
        return <div class="d-static">{this.$slots.default}</div>
      }else{
        return null
      }
    }
  };
</script>
