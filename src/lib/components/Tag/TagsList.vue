
<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtTagList",
  components: componentsList,
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
  },
  data:()=>({
    indexOfActive : 0,
    value : 0
  }),
  mounted(){
    this.bindChilds();
  },
  updated(){
    this.bindChilds();
  },
  methods:{
    bindChilds(){
      this.$children.forEach((vNode)=>{
        vNode.$on('change',(value)=>{
          this.setActiveTag(vNode.tagIndex);
          this.setActiveValue(value);
        });
        if(vNode.isActive && vNode.tagIndex !== this.indexOfActive){
          this.indexOfActive = vNode.tagIndex;
          this.value = vNode.value;
        }
      });
    },
    setActiveTag(index){
      this.$children[this.indexOfActive].toggleActiveState();
      this.indexOfActive = index;
      this.$children[this.indexOfActive].toggleActiveState();
    },
    setActiveValue(newValue){
      this.value = newValue;
    }
  },
  render(h){

    this.$slots.default.filter((vNode)=>{
      if(vNode.tag && vNode.tag.search(/RtTag/gi)>=0){
        return true;
      }
      return false;
    }).forEach((vNode, index)=>{
      vNode.componentOptions = vNode.componentOptions || {};
      vNode.componentOptions.propsData = vNode.componentOptions.propsData || {};
      vNode.componentOptions.propsData.tagIndex = index;
    });

    return<div class={"rt-tag-list"}>
        {this.$slots.default}
      </div>;
  }
};
</script>
