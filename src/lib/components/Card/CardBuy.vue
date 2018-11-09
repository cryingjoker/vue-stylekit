<script type="text/jsx">
  import {OutsideClickDirective} from "../../directives/OudsideClick/OudsideClick";

  const componentsList = {};
  const directives = {};
  directives[OutsideClickDirective.name] = OutsideClickDirective;
  export default {
    name: "RtCardBuy",
    components: componentsList,
    directives: directives,
    props: {
    },
    data(){
      return {
        showForm : false
      };
    },
    computed: {},

    mounted: function() {
    },
    methods: {
      hideShow(){
        if(this.showForm){
          this.showForm = false;
        }
      },
      toggleShow(){
        this.showForm = !this.showForm;
      },
      submitForm(){
        let form = this.$refs.card.querySelector('form');
        if(!form){
          form = this.$refs.card.querySelector('.form');
        }
        if(form && form.submit && typeof form.submit === 'function'){
          form.submit();
        }

      },
    },

    render(h) {
      const button = ()=>{
        if(this.showForm){
          if(this.submitForm) {
            return <rt-button onClick={this.submitForm}
                              class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
          }
          else{
            return <rt-button class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
          }
        }else{
          return <rt-button onClick={this.toggleShow}
                            class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
        }
      };
      return <div ref="card" class="rt-col-6 rt-col-td-3 rt-col-md-3" v-rt-out-side-click={this.hideShow}>
        <div class={'rt-card rt-card-buy'+(this.showForm ? ' rt-card-buy--show-form' : '')}>

          <div class="row rt-card-buy__info">
            <div class="rt-card-buy__form rt-space-vertical">
              <div class="rt-close" onClick={this.hideShow}>
                <svg class="rt-close__icon" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z"
                        fill-rule="evenodd"/>
                </svg>
              </div>
              {this.$slots['form']}
            </div>
            <div class="rt-col-12">
            {this.$slots['content']}
            </div>
          </div>
          <div class="rt-card__border-content rt-space-bottom">
            {this.$slots['card-footer']}
            {button()}
          </div>
        </div>
      </div>;
    }
  };
</script>




