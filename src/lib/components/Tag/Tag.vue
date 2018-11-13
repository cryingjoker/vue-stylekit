<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtTag",
  components: componentsList,
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    value:{
      type: String,
      default: null
    }
  },
  data:()=>({
    index: null,
  }),
  inject: ['RtTags'],
  created(){

  },
  methods:{
    checkIfActive(){
      if(this.isActive && !this.RtTags.indexOfActiveTag !== this.index){
        this.RtTags.indexOfActiveTag = this.index;
      }
    },
    toggleActiveState(){
      this.isNowActive = !this.isNowActive;
    },
    setActive(){
      this.RtTags.setActiveTag(this.index);
    }
  },
  render(){

    return <div onClick={this.setActive} class={"rt-tag"+(this.RtTags.indexOfActiveTag === this.index ? " rt-tag--is-active": "")}>
      {this.$slots.default}
    </div>;
  }
};
</script>
