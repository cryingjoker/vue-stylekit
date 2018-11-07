
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
  },
  render(){
    return <div class={"rt-tag"+(this.isActive ? " rt-tag--is-active": "")}>
      {this.$slots.default}
    </div>
  }
};
</script>
