
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
    return <div class="rt-tag">
      {this.$slots.default}
    </div>
  }
};
</script>
