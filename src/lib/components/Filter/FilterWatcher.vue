<script type="text/jsx">
  import { Fragment } from 'vue-fragment';
export default {
  name: "RtFilterWatcher",
  data: () => ({
    selectedProps: []
  }),
  inject: ["RtFilter"],
  mounted(){
    this.bindChilds();
  },
  methods:{
    bindChilds(){
      this.$children.forEach((vNode)=>{
        // console.info('vNode',vNode);
        vNode.$on('change',(value)=>{
          // console.info('value -->>',value,vNode)
        });
      });
    },
  },
  render(){
    return <Fragment>{this.$slots.default}</Fragment>;
  }
};
</script>
