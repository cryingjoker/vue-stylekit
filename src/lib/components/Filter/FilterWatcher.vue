<script type="text/jsx">
  import { Fragment } from "vue-fragment";

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
      console.info(this.RtFilter.addListener(this.onUpdateProps));
    },
    methods: {
      onUpdateProps(props){
        let hasFound = false;
        // Object.keys(props).forEach((key)=>{
        //
        // })
        console.info('props',props);
        this.options.forEach((optionName,optionIndex)=>{
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
        console.info('hasFound',hasFound);
        this.isActive = hasFound;
      },
      checkClick(event){
        console.info('checkClick event -->>  ',event);
      },
      setPropsToChildren() {
        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode,'index',this.index);
          }

          // this.$on = (...args) => {
          //   old_on.apply(this, args);
          // };

          // var oldEmit = vNode.compiler.emitter.emit
          // vNode.compiler.emitter.emit = function () {
          //   console.log('got event: ' + arguments[0],arguments)
          //   oldEmit.apply(this, arguments)
          // }
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
