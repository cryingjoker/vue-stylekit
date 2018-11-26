<script type="text/jsx">
  import variables from "../../../lib/variables.json";
  import debounce from "debounce";
  export default {
    name: "RtResizeContentHeight",
    props:{
       querySelectorsNames: {
         type: Array,
         default: []
       },
      mobileNotResize:{
         type: Boolean,
        default: false
      }
    },
    data: () => ({
      debounce: null
    }),
    updated(){
      if(this.querySelectorsNames.length > 0) {
        this.unbindResize();
        this.bindResize();
      }
    },
    beforeDestroy(){
      if(this.querySelectorsNames.length > 0) {
        this.unbindResize();
      }
    },
    mounted(){
      setTimeout(()=>{
        if(this.querySelectorsNames.length > 0) {
          this.bindResize();
          this.calculateMaxHeight();
        }
      },0)
    },
    methods: {
      bindResize(){
        window.addEventListener('resize',debounce(this.calculateMaxHeight,1))
      },
      unbindResize(){
        window.removeEventListener('resize',debounce(this.calculateMaxHeight,1))
      },
      calculateMaxHeight(){
        const isMobile =
          window.innerWidth <= parseInt(variables["mobile-step-size"]);
        if(isMobile && this.mobileNotResize){
          this.querySelectorsNames.forEach((selectorName)=>{
          this.$el.querySelectorAll(`${selectorName}`).forEach((node)=> {
            if (node.style.height) {
              node.style.height = null;
            }
          })
          });
        }else{
          this.querySelectorsNames.forEach((selectorName)=>{
            let maxHeight = 0;
            this.$el.querySelectorAll(`${selectorName}`).forEach((node)=>{
              if(node.style.height) {
                node.style.height = null;
              }
              maxHeight = maxHeight > node.clientHeight ? maxHeight : node.clientHeight;
            });
            this.$el.querySelectorAll(`${selectorName}`).forEach((node)=>{
              node.style.height = `${maxHeight}px`;
            })
          })
        }
      }
    },
    render(h) {
      return <div>
        {this.$slots.default}
      </div>
    }
  };
</script>
