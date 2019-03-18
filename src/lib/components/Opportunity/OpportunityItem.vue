<script type="text/jsx">
  export default {
    name: "RtOpportunityItem",
    props: {
      image: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      anchor: {
        type: String,
        default: ''
      }
    },

    data: () => ({
      mobileLayout: false
    }),

    mounted(){
      let reversedItem = this.$parent.$children;
      for(let i = 0; i < reversedItem.length; i++) {
        reversedItem[1].$el.classList.add('rtb-opportunity-item--reverse');
        if(i >= 1) {
          reversedItem[i].$el.classList.add('rt-space-top');
        }
      }
    },
    computed: {
      opportunityImage() {
        let backgroundImage = "url('" + this.image + "')";
        return backgroundImage;
      }
    },
    methods: {},
    render: function(h) {
      return <div class="rtb-opportunity-item">
        <h4 class="mobile-title rt-font-bold">{this.title}</h4>
        <div class="row">
          <div class="rt-col-6 rt-col-td-6 rt-col-md-3 rt-space-top">
            <div class="rtb-opportunity-item__image" style={"background-image: " + this.opportunityImage}/>
          </div>
          <div class="rt-col-6 rt-col-td-6 rt-col-md-3">
            <div class="rtb-opportunity-item__description">
              <h4 class="desktop-title rt-font-bold rt-space-bottom">{this.title}</h4>
              {this.$slots.description}
            </div>
          </div>
        </div>
      </div>
    }
  };
</script>
