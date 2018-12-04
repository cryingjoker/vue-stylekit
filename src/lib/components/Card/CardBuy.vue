<script type="text/jsx">
import {OutsideClickDirective} from "../../directives/OudsideClick/OudsideClick";
import {scrollIt} from "../../utils";
import debounce from "debounce";
const componentsList = {};
const directives = {};
directives[OutsideClickDirective.name] = OutsideClickDirective;
export default {
  name: "RtCardBuy",
  components: componentsList,
  directives: directives,
  props: {
    isHorizontalCard:{
      type: Boolean,
      default: false
    },
    hasCustomButton: {
      type: Boolean,
      default: false
    },
    customButtonClass: {
      type: String,
      default: null
    }
  },
  data(){
    return {
      cardHeight: null,
      showForm : false
    };
  },
  computed: {},

  mounted() {
    if(this.hasCustomButton && this.customButtonClass){
      this.bindCustomButton()
    }
  },
  beforeDestroy(){
    if(this.hasCustomButton && this.customButtonClass) {
      this.unbindCustomButton();
    }
  },
  updated(){
    if(this.hasCustomButton && this.customButtonClass) {
      this.unbindCustomButton()
      this.bindCustomButton()
    }
  },
  methods: {
    customButtonClick(){
         if(this.showForm){
           if(this.submitForm){
             this.submitForm()
           }
         }else{
           this.toggleShow()

         }
    },
    bindCustomButton(){
      this.$el.querySelector(`.${this.customButtonClass}`).addEventListener('click',this.customButtonClick);
    },
    unbindCustomButton(){
      this.$el.querySelector(`.${this.customButtonClass}`).removeEventListener('click',this.customButtonClick);

    },
    hideShow(){
      if(this.showForm){
        this.showForm = false;
      }
    },
    scrollToStart(){
      scrollIt(this.$el.offsetTop + 40, 400);
    },

    toggleShow(){
      this.showForm = !this.showForm;
      // this.scrollToStart();
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
      if(!this.hasCustomButton || !this.customButtonClass) {
        if (this.showForm) {
          if (this.submitForm) {
            return <rt-button onClick={this.submitForm}
                              class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
          }
          else {
            return <rt-button class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
          }
        } else {
          return <rt-button onClick={this.toggleShow}
                            class="rt-button--is-block rt-button-orange">{this.$slots.button}</rt-button>;
        }
      }else{
        return null
      }
    };
    const contentWithoutWrapper = (()=>{
      if(this.$slots['content-without-wrapper']){
        return this.$slots['content-without-wrapper']
      }
    })();
    const bottomContent = ()=>{
      if(!this.hasCustomButton || !this.customButtonClass) {
        return <div class="rt-card__border-content rt-space-bottom">
          {this.$slots['card-footer']}
          {button()}
        </div>
      }else{
        if(this.$slots['card-footer']){
          return <div class="d-static">{this.$slots['card-footer']}</div>
        }else{
          return null
        }
      }
    }
    return <div ref="card" v-rt-out-side-click={this.hideShow}>
      <div class={'rt-card rt-card-buy'+(this.showForm ? ' rt-card-buy--show-form' : '') + (this.isHorizontalCard ? ' rt-card-buy--is-horizontal' : '')}>
        <div class="row rt-card-buy__info">
          <div class={"rt-card-buy__form rt-space-vertical"+(this.isHorizontalCard ? " rt-card-buy__form-horizontal":"")}>
            <div class="rt-close" onClick={this.hideShow}>
              <svg class="rt-close__icon" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z"
                      fill-rule="evenodd"/>
              </svg>
            </div>
            {this.$slots['form']}
          </div>

          <div class="rt-col-12 rt-card-buy__content">
          {this.$slots['content']}
          </div>
        </div>
        {contentWithoutWrapper}
        {bottomContent()}
      </div>
    </div>;
  }
};
</script>
