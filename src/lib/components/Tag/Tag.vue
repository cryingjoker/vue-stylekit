
<script type="text/jsx">
const componentsList = {};

export default {
  name: "RtTag",
  components: componentsList,
  props: {
    tagIndex: {
      type: Number,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    },
    value:{
      type: String,
      default: null
    }
  },
  data(){
    return {
      isNowActive: this.isActive
    };
  },
  methods:{
    toggleActiveState(){
      this.isNowActive = !this.isNowActive;
    },
    setActive(){
      this.$emit('change',this.value);
    }
  },
  render(){
    return <div onClick={this.setActive} class={"rt-tag"+(this.isNowActive ? " rt-tag--is-active": "")}>
      {this.$slots.default}
    </div>;
  }
};
</script>
