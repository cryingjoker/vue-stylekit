<script type="text/jsx">

  import variables from "../../variables.json";

  const componentsList = {};

  export default {
    name: "RtCardLayout",
    components: componentsList,
    props: {
      swiperOnMobile: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 12
      },
      singleRow: {
        type: Boolean,
        default: false
      }
    },
    data: () => ({
      layout: '',
      inTabs: false
    }),

    computed: {
      wrapperClass(){
        let className = 'card-layout';
        if(this.width) {
          className += ` card-layout-${this.width}`
        }
        return className;
      }
    },

    mounted () {
      this.specifyLayout();
      window.addEventListener('resize', this.specifyLayout);
//      console.log(this.$el.parentNode.className === 'rt-tabs-content__item');
      this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item';
//      console.log(this.$parent.$el)
    },
    updated() {
      this.specifyCardClass();
      window.addEventListener('resize', this.specifyCardClass);
      this.inTabs = this.$el.parentNode.className === 'rt-tabs-content__item';
    },
    methods: {
      specifyLayout(){
        if(window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && this.swiperOnMobile){
          this.layout = 'swiper';
        } else {
          this.layout = 'grid';
        }
      },
      specifyCardClass() {
        if(this.$slots.cards && window.innerWidth <= parseInt(variables["tablet-upper-limit"])){
          console.log(this.$el.childNodes[0].childNodes[4].childNodes);
          this.$el.childNodes[0].childNodes[4].childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rt-carousel__slide') : null;
          });
//          this.singleRow ? this.$el.classList.add('row') : null;
//          this.singleRow ? this.$el.parentNode.classList.add('rt-col') : null;
        } else if(!!this.$slots.cards && window.innerWidth <= parseInt(variables["laptop-upper-limit"]) && window.innerWidth >= parseInt(variables["laptop-lower-limit"])) {
          this.$refs.layout.childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rt-carousel__slide') : null;
          });
//          this.singleRow ? this.$el.classList.add('row') : null;
//          this.singleRow ? this.$el.parentNode.classList.remove('rt-col') : null;
        } else if(!!this.$slots.cards && window.innerWidth >= parseInt(variables["desktop-lower-limit"])) {
          this.$refs.layout.childNodes.forEach(el => {
            el.classList !== undefined && el.classList.contains('rt-carousel__slide') ? el.classList.remove('rt-carousel__slide') : null;
          });
//          this.singleRow ? this.$el.classList.remove('row'): null;
//          this.singleRow ? this.$el.parentNode.classList.remove('rt-col') : null;
        }
      }
    },
    render(h){
      if(this.inTabs) {
        if(this.layout === 'swiper'){
          return <div>
            <rt-carousel>{this.$slots.cards}</rt-carousel>
            <div class="row">
              {this.$slots["side-text"]}
            </div>
          </div>
        } else {
          return <div class="row">
            <div class="specified-card-layout" ref="layout">
              <div class={this.wrapperClass}>
                <div class="rt-col">
                  <div class="row">
                    {this.$slots.cards}
                  </div>
                </div>
              </div>
              {this.$slots["side-text"]}
            </div>
          </div>
        }
      } else {
        if(this.layout === 'swiper'){
          return <div>
            <rt-carousel>{this.$slots.cards}</rt-carousel>
            <div class="rt-container">
              <div class="rt-col">
                <div class="row">
                  {this.$slots["side-text"]}
                </div>
              </div>
            </div>
          </div>
        } else {
          return <div class="rt-container">
            <div class="rt-col">
              <div class="row">
                <div class="specified-card-layout" ref="layout">
                  <div class={this.wrapperClass}>
                    <div class="rt-col">
                      <div class="row">
                        {this.$slots.cards}
                      </div>
                    </div>
                  </div>
                  {this.$slots["side-text"]}
                </div>
              </div>
            </div>
          </div>
        }
      }
    }
  };
</script>
