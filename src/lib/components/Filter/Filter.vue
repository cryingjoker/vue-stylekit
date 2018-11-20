<script type="text/jsx">
  import { Fragment } from 'vue-fragment';

export default {
  name: "RtFilter",
  data: () => ({
    selectedProps: {},
    listners: [],
  }),
  provide() {
    const RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;
    RtFilter['addListener'] = this.addListener;
    return { RtFilter };
  },
  mounted: function() {},
  methods: {
    callListeners(){
      this.listners.forEach((fn)=>{
        fn.call(null,this.selectedProps);
      })
    },
    addListener(fn){
      this.listners.push(fn);
      return this.listners.length - 1;
    },
    setProps(option,value){
      this.selectedProps[option] = value;
      this.callListeners();
    },
    removeProps(value){
      delete this.selectedProps[option];
      this.callListeners();
    }
  },
  render(){
    return <Fragment>{this.$slots.default}</Fragment>;
  }
};
</script>
