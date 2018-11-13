<script type="text/jsx">
  import { Fragment } from "vue-fragment";

  export default {
    name: "RtFilterWatcher",

    data: () => ({
      index: null,
      selectedProps: []
    }),
    created() {
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },
    methods: {
      setPropsToChildren() {
        // console.info('this',this)
        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode,'index',this.index);
          }

          // console.debug('**',vNode,vNode.$on);
          this.$on = (...args) => {
            // custom logic here like pushing to a callback array or something
            old_on.apply(this, args);
          };

          // var oldEmit = vNode.compiler.emitter.emit
          // vNode.compiler.emitter.emit = function () {
          //   console.log('got event: ' + arguments[0],arguments)
          //   oldEmit.apply(this, arguments)
          // }
        });
      }
    },
    render() {
      return <Fragment>{this.$slots.default}</Fragment>;
    }
  };
</script>
