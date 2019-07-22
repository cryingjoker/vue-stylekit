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
      }
    },
    data: () => ({
      layout: ''
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
    },
    updated() {

//      console.log(this.$el.childNodes[0].childNodes[0].childNodes[0].childNodes);
//        console.log(this.$el.childNodes[2].childNodes);
//        console.log(this.$el.childNodes[0].childNodes[0].childNodes);
//        console.log(this.$el.childNodes[0].childNodes[0].childNodes[0].childNodes);
      if(this.$slots.cards && window.innerWidth <= parseInt(variables["tablet-upper-limit"])){
        this.$el.childNodes[0].childNodes[2].childNodes[0].childNodes.forEach(el => {
          el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rtk-carousel-slide') : null;
        })
      } else if(this.$slots.cards && window.innerWidth <= parseInt(variables["laptop-upper-limit"]) && window.innerWidth >= parseInt(variables["tablet-upper-limit"])) {
        this.$el.childNodes[0].childNodes[0].childNodes[0].childNodes.forEach(el => {
          el.classList !== undefined && el.classList.contains('rt-col-md-3') ? el.classList.add('rtk-carousel-slide') : null;
        })
      }
    },
    methods: {
      specifyLayout(){
        if(window.innerWidth <= parseInt(variables["tablet-upper-limit"]) && this.swiperOnMobile){
          this.layout = 'swiper';
        } else {
          this.layout = 'grid';
        }
      }
    },
    render(h){
      if(this.layout === 'swiper'){
        return <div>
          <rt-swiper>{this.$slots.cards}</rt-swiper>
          <div class="rt-container">
            <div class="rt-col">
              {this.$slots["side-text"]}
            </div>
          </div>
        </div>
      } else {
        return<div class="rt-container specified-card-layout">
          <div class={this.wrapperClass}>
            <div class="rt-col">
              <div class="row">
                {this.$slots.cards}
              </div>
            </div>
          </div>
          {this.$slots["side-text"]}
        </div>;
      }
    }
  };
</script>
