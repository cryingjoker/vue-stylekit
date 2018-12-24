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
    },
    clearZero:{
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    index: null,
    selectedProps: []
  }),

  mounted(){
    this.RtFilter.addListenerForCaller(this.onUpdateFilters)
    this.setPropsFromChildren();
  },
  methods: {
    onUpdateFilters(props){
      this.setPropsToChildren(props);
    },
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
      setTimeout(()=>{
        window.dispatchEvent(new Event("resize"));
      },0)
    },
    setPropsToChildren(props) {
      this.$children.forEach((vNode) => {
        if(vNode.$vnode.tag.search('RtInput')>0) {
          if('changeFromParent' in vNode){
            vNode.changeFromParent(props);
          }
        }else{
          if(vNode.$vnode.tag.search(/(RtSwitchContainer|RtCheckboxContainer|RtRadioButtonContainer)/)>0){
            if('updateAllChildren' in vNode){
              vNode.updateAllChildren(props)
            }
          }
        }
      })
    },
    setPropsFromChildren() {
      this.$children.forEach((vNode) => {
        if (vNode && vNode.index !== "undefinded") {
          vNode.$set(vNode,'index',this.index);
          if(vNode.$vnode.tag.search('RtTagList') > 0){

            vNode.$on('change', (value)=>{
              let json = "";
              if(value) {
                json = JSON.parse(value.replace(/'/g, '"'));
              }

              const keys = Object.keys(json);
              this.RtFilter.removeAllProps();
              keys.forEach((key)=>{
                this.RtFilter.setProps(key, [].concat(json[key]));
                setTimeout(()=>{
                  this.RtFilter.getFromHistory();
                },300)
              })

            })
          }else {
            if (vNode.$vnode.tag.search('RtInput') > 0) {
              vNode.$on('input', (value) => {
                const childDataJson = {};
                if (vNode.$vnode.componentOptions && vNode.$vnode.componentOptions.propsData && vNode.$vnode.componentOptions.propsData.insertType === 'number' && value + '' !== '0') {
                  childDataJson[vNode['name']] = [value + ''];
                } else {
                  childDataJson[vNode['name']] = [value + ''];
                }
                if (this.clearZero && !isNaN(parseInt(value)) && parseInt(value) === 0) {
                  childDataJson[vNode['name']] = [];
                }
                this.fireFilterEventWithDataFromChild(childDataJson)
              })
            } else {
              if (vNode.$vnode.tag.search(/(RtSwitchContainer|RtCheckboxContainer|RtRadioButtonContainer)/) > 0) {
                vNode.$on('change', (childDataJson) => {
                  this.fireFilterEventWithDataFromChild(childDataJson);
                })
              } else {
                vNode.$el.addEventListener('click', () => {
                  this.fireFilterEvent()
                }, false)
              }
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
