
<!--inline-template-->
<script type="text/jsx">
  import { Fragment } from 'vue-fragment';
export default {
  name: "RtFilter",
  data: () => ({
    selectedProps: []
  }),
  provide() {
    const RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;

    return { RtFilter };
  },
  mounted: function() {},
  methods: {
    setProps(value){
      this.selectedProps.push(value);
    },
    removeProps(value){
      const index = this.selectedProps.indefOf(value);
      this.selectedProps.splice(index,1);
    }
  },
  render(){
    return <Fragment>{this.$slots.default}</Fragment>;
  }
};
</script>
