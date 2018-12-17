<script type="text/jsx">
export default {
  name: "RtPopup",
  props: {
    name: {
      type: String,
      default: null,
      required: true
    },
    popupWrapperClasses: {
      type: String,
      default: ""
    },
    popupClasses: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  mounted() {
    this.addEventListener();
    this.bindCloseButton();
  },
  updated(){
    this.removeEventListener();
    this.addEventListener();
    this.unbindCloseButton();
    this.bindCloseButton();
  },
  methods:{
    setActive(){
      this.isActive = true;
      this.addKeyBindind();

    },
    removeActive(){
      this.isActive = false;
      this.removeKeyBindind();
    },
    keyPress(e){
      if(e.keyCode === 27){
        this.removeActive();
      }
    },
    clickOutside(){
      if(!this.$options.isHover){
        this.removeActive();
      }
    },
    addKeyBindind(){
      window.addEventListener('keydown', this.keyPress, {passive: false});
    },
    removeKeyBindind(){
      window.removeEventListener('keydown',this.keyPress);
    },
    bindCloseButton(){
      const close =  this.$el.querySelector('.rt-close');
      if(close){
        close.addEventListener('click', this.removeActive, {passive: true})
      }
    },
    unbindCloseButton(){
      const close =  this.$el.querySelector('.rt-close');
      if(close){
        close.addEventListener('click', this.removeActive, {passive: true})
      }
    },
    addEventListener(){

      window.addEventListener('open-popup-'+this.name, this.setActive, {passive: false});
      window.addEventListener('close-popup-'+this.name, this.removeActive, {passive: false});
    },
    removeEventListener(){
      window.removeEventListener('open-popup-'+this.name, this.setActive);
      window.removeEventListener('close-popup-'+this.name, this.removeActive);
    },
    setHover(){
      if(!this.$options.isHover) {
        this.$options.isHover = true;
      }

    },
    removeHover(){
      this.$options.isHover = false;
    }
  },
  beforeDestroy(){
    this.removeEventListener();
  },
  render: function(h) {
    let wrapperClasses = "rt-popup-wrapper-td";
    if(this.popupWrapperClasses){
      wrapperClasses += " "+this.popupWrapperClasses.trim();
    }
    if(this.isActive){
      wrapperClasses += " rt-popup-wrapper-td--is-active";
    }

    return <div class={wrapperClasses} onClick={this.clickOutside}>
      <div class={"rt-popup--td"+(this.popupClasses ? " "+this.popupClasses.trim() : "")} onMouseenter={this.setHover} onMouseleave={this.removeHover} onMousemove={this.setHover}>
        {this.$slots.default}
      </div>
    </div>


  }
};
</script>
