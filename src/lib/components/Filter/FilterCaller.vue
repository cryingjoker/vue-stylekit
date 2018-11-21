<script type="text/jsx">
  export default {
    name: "RtFilterCaller",
    inject: ["RtFilter"],
    props:{
      clearValue:{
        type: Boolean,
        default: false
      },
      option:{
        type: String,
        default: null
      },
      value: {
        type: String,
        default: null
      }
    },
    data: () => ({
      index: null,
      selectedProps: []
    }),
    created() {
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },
    updated(){
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },

    methods: {
      fireFilterEvent(){
        if(this.clearValue){
          this.RtFilter.removeProps(this.option);
        }else {
          this.RtFilter.setProps(this.option, this.value);
        }
      },
      fireFilterEventWithDataFromChild(childDataJson){
        Object.keys(childDataJson).forEach((optionName)=>{
          this.RtFilter.setProps(optionName, childDataJson[optionName]);
        })
      },
      setPropsToChildren() {
        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode,'index',this.index);
            if(vNode.$vnode.tag.search('RtInput')>0) {
              vNode.$on('input', (value) => {
              const childDataJson = {};
                childDataJson[vNode['name']] = [value];
                this.fireFilterEventWithDataFromChild(childDataJson)
              })
            }else {
              if(vNode.$vnode.tag.search('RtSwitchContainer')>0){
                vNode.$on('change', (childDataJson) => {
                  this.fireFilterEventWithDataFromChild(childDataJson);
                })
              }else {
                vNode.$el.addEventListener('click', () => {
                  this.fireFilterEvent()
                }, false)
              }
            }
          }
        });
      }
    },
    render() {
      return <div class="d-static">{this.$slots.default}</div>;
    }
  };
</script>
