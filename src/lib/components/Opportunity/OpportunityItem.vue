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
      active: false
    }),

    mounted(){
      let reversedItem = this.$parent.$children;
      if(reversedItem.length > 1){
        for(let i = 0; i < reversedItem.length; i++) {
          reversedItem[1].$el.classList.add('rtb-opportunity-item--reverse');
          if(i >= 1) {
            reversedItem[i].$el.classList.add('rt-space-top');
          }
        }
      }
      this.$parent.$children[0].$data.active = true;
    },
    computed: {
      opportunityImage() {
        let backgroundImage = "url('" + this.image + "')";
        return backgroundImage;
      }

    },
    methods: {
      toggleDropdownItem(){
        if(this.$parent.$data.mobileLayout && !this.active) {
          for (let i = 0; i < this.$parent.$children.length; i++){
            this.$parent.$children[i].$data.active = false;
          }
          this.active = !this.active;
        } else {
          this.active = false;
        }
      }
    },
    render: function(h) {
      return <div class={"rtb-opportunity-item" + (this.active ? " rtb-opportunity-item--active" : "")} onClick={this.toggleDropdownItem}>
        <h4 class="mobile-title rt-font-bold">{this.title}
          <svg class="rtb-opportunity-item__arrow" width="12px" height="7px" viewBox="0 0 12 7" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Page-1" stroke-width="1">
              <g transform="translate(-132.000000, -2341.000000)">
                <g id="Group-3-Copy-2" transform="translate(132.000000, 2332.000000)">
                  <polygon id="Shape-Copy" points="10.6 9 6 13.3513514 1.4 9 0 10.3243243 6 16 12 10.3243243"/>
                </g>
              </g>
            </g>
          </svg>
        </h4>
        <div class="row">
          <div class="rt-col-6 rt-col-td-2 rt-col-md-3 rt-space-top">
            <div class="rtb-opportunity-item__image" style={"background-image: " + this.opportunityImage}/>
          </div>
          <div class="rt-col-6 rt-col-td-4 rt-col-md-3">
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
