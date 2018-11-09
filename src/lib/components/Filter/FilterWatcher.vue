<script type="text/jsx">
  import { Fragment } from 'vue-fragment';
export default {
  name: "RtFilterWatcher",
  data: () => ({
    selectedProps: []
  }),
  inject: ["RtFilter"],
  mounted(){
    // console.info('mounted filter')
    setTimeout(()=>{
      this.bindChilds();
    },0)
  },
  methods:{
    bindChilds(){
      // if(this["_events"]){
      //   console.info('Object.keys(this["_events"])',Object.keys(this["_events"]),this["_events"],typeof this["_events"], JSON.stringify(this["_events"]))
      //   Object.keys(this["_events"]).map(eventName => {
      //     console.info('eventname -->>',eventName,this.$children)
      //     this.$children.forEach((vNode)=>{
      //       // console.info('eventName',eventName,this["_events"][eventName]);
      //       vNode.$on(eventName, (eventData)=>{
      //         this["_events"][eventName].forEach((fn)=>{
      //           console.info('fn',fn);
      //          fn.call();
      //         })
      //         this["_events"][eventName](eventData);
      //       })
      //     })
      //   });
      //
      //   console.info('this.$children',this.$children);
      //}
      // this.$children.forEach((vNode)=>{
      //   console.info('vNode',vNode);
      //   vNode.$on('change',(value)=>{
      //     console.info('value -->>',value,vNode)
      //   });
      // });
    },
  },
  render(){
    return <Fragment>{this.$slots.default}</Fragment>;
  }
};
</script>
