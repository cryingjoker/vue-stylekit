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
    indexOfActiveTag : 0,
    value : 0,
    RtTags : {
      indexOfActiveTag : 0,
      setActiveTag : null,
      setActiveValue: null
    }
  }),
  provide() {
    const RtTags = this.RtTags;
    return { RtTags };
  },
  mounted(){
    this.bindChilds();
    this.RtTags.setActiveTag = this.setActiveTag;
    this.RtTags.setActiveValue = this.setActiveValue;
    this.$children.forEach((vComponent,index)=>{
      vComponent.index = index;
      if(vComponent.checkIfActive && typeof vComponent.checkIfActive === 'function'){
        vComponent.checkIfActive();
      }
    })
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
        if(vNode.isActive && vNode.tagIndex !== this.indexOfActiveTag){
          this.indexOfActiveTag = vNode.tagIndex;
          this.value = vNode.value;
        }
      });
    },
    setActiveTag(index){
      this.RtTags.indexOfActiveTag = index;
    },
    setActiveValue(newValue){
      this.value = newValue;
    }
  },

  render(h){

    this.$slots.default.filter((vNode)=>{
      if(vNode.tag){
        return true;
      }
      return false;
    }).forEach((vNode, index)=>{
      if(vNode.componentInstance) {
        vNode.componentInstance = vNode.componentInstance || {};
        vNode.componentInstance.$data.index = index;
        vNode.componentInstance.index = index;
      }
    });

    return<div class={"rt-tag-list"}>
        {this.$slots.default}
      </div>;
  }
};
</script>
