<script type="text/jsx">
  import { Fragment } from "vue-fragment";

  export default {
    name: "RtFilterCaller",
    inject: ["RtFilter"],
    props:{
      clearValue:{
        type: Boolean,
        default: false
      },
      option:{
        type: String,
        default: null
      },
      value: {
        type: String,
        default: null
      }
    },
    data: () => ({
      index: null,
      selectedProps: []
    }),
    created() {
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },
    updated(){
      setTimeout(() => {
        this.setPropsToChildren();
      }, 0);
    },

    methods: {
      checkClick(event){
        console.info('checkClick event -->>  ',event);
      },
      fireFilterEvent(){
        if(this.clearValue){
          this.RtFilter.removeProps(this.option);
        }else {
          this.RtFilter.setProps(this.option, this.value);
        }
        // console.info('-->>  ',this.RtFilter.selectedProps)
      },
      setPropsToChildren() {

        this.$children.forEach((vNode) => {
          if (vNode && vNode.index !== "undefinded") {
            vNode.$set(vNode,'index',this.index);
            vNode.$el.addEventListener('click',()=>{
              this.fireFilterEvent()
            },false)
          }
        });
      }
    },
    render() {
      return <Fragment onClick={this.checkClick}>{this.$slots.default}</Fragment>;
    }
  };
</script>
