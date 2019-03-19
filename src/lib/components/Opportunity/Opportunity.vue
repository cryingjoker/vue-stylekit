<script type="text/jsx">
  import variables from "../../variables.json";

  export default {
    name: "RtOpportunity",
    props: {},

    data: () => ({
      childrenQuantity: null,
      mobileLayout: false
    }),

    mounted(){
      this.childrenQuantity = this.$children.length;
      this.reRenderOnResize();
    },
    methods: {

      reRenderOnResize(){
        window.addEventListener('resize', () => {
          if(window.innerWidth <= parseInt(variables["tablet-upper-limit"])) {
            this.mobileLayout = true;
          } else {
            this.mobileLayout = false;
          }
        })
      }
    },
    render: function(h) {
      const navigation = this.$children.map((item) => {
        return <rt-tabs-nav-item anchor={item._props.anchor} remove-base-tag={true} name={(Array.from(item.$parent.$children).indexOf(item)).toString()}>{item._props.title}</rt-tabs-nav-item>
      });

      const content = this.$children.map((item, i) => {
        return <rt-tabs-content-item name={(Array.from(item.$parent.$children).indexOf(item)).toString()}>
          <rt-opportunity-item image={item._props.image} title={item._props.title}>
            <template slot="description">{item.$slots.description}</template>
          </rt-opportunity-item>
        </rt-tabs-content-item>
      });

      const blockType = (() => {
        if(!this.mobileLayout){
          if(this.childrenQuantity >= 4) {
            return <rt-tabs>
              <template slot="navigation">
                {navigation}
              </template>
              <template slot="content">
                {content}
              </template>
            </rt-tabs>
          } else {
            return this.$slots.default;
          }
        } else {
          if(this.childrenQuantity >= 4){
            return <div class="opportunity--mobile-dropdown">
              {this.$slots.default}
            </div>
          }else {
            return this.$slots.default;
          }
        }
      })();
      return <div class="rtb-opportunity-block">
        {blockType}
      </div>
    }
  };
</script>
