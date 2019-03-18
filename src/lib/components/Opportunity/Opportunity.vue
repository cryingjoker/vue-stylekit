<script type="text/jsx">

  export default {
    name: "RtOpportunity",
    props: {

    },

    data: () => ({
      childrenQuantity: null
    }),

    provide: function () {
      return {
        RtQuantity: this.childrenQuantity
      }
    },

    mounted(){
      this.childrenQuantity = this.$children.length;

    },
    render: function(h) {
      const navigation = this.$children.map((item) => {
//        console.log(Array.from(item.$parent.$children).indexOf(item));
        return <rt-tabs-nav-item anchor={item._props.anchor} remove-base-tag={true} name={(Array.from(item.$parent.$children).indexOf(item)).toString()}>{item._props.title}</rt-tabs-nav-item>
      });

      const content = this.$children.map((item, i) => {
        console.log(this.$children[i]._props);
        return <rt-tabs-content-item name={(Array.from(item.$parent.$children).indexOf(item)).toString()}>
          <rt-opportunity-item></rt-opportunity-item>
        </rt-tabs-content-item>
      });

      const blockType = (() => {
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
      })();
      return <div class="rtb-opportunity-block">
        {blockType}
      </div>
    }
  };
</script>


<!--<div class="row">-->
  <!--<div class="rt-col-6 rt-col-td-6 rt-col-md-3 rt-space-top">-->
    <!--<div class="rtb-opportunity-item__image" style={"background-image: " + this.opportunityImage}/>-->
  <!--</div>-->
  <!--<div class="rt-col-6 rt-col-td-6 rt-col-md-3">-->
    <!--<div class="rtb-opportunity-item__description">-->
      <!--{this.$children[i].$slots.description}-->
    <!--</div>-->
  <!--</div>-->
<!--</div>-->
