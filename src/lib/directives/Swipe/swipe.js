class Swipe {
  constructor(type, element, action){
    this.type = type;
    this.$el = element;
    this.action = action;
    this.bind();
    this.touchendX = 0;
    this.touchstartX = 0;

  }
  calculateSwipe = ()=>{
    if(Math.abs(this.touchstartX - this.touchendX) > 50){
      if(this.touchstartX < this.touchendX && this.type == 'right'){
        this.action.value();
      }
    }
    if(this.touchstartX > this.touchendX && this.type == 'left'){
      this.action.value();
    }
  }
  bind = ()=>{
    if(this.$el) {
      window.test = this.$el;
      this.$el.addEventListener("touchstart", this.setTouchStart, {passive: true});
      this.$el.addEventListener("touchend", this.setTouchEnd, {passive: true});
    }
  }
  rebind = (el) => {
    this.unbind();
    this.$el = el;
    this.bind();
  }
  unbind = () => {
    this.$el.removeEventListener("touchstart", this.setTouchStart);
    this.$el.removeEventListener("touchend", this.setTouchEnd);
  }
  setTouchStart = (e) => {
    this.touchstartX = e.changedTouches[0].screenX;
  }
  setTouchEnd = (e)=>{
    this.touchendX = e.changedTouches[0].screenX;
    this.calculateSwipe();
  }

}

export const SwipeLeft = {
  name: 'rt-swipe-left',
  bind (el, bindings, vnode) {
    vnode.Swipe = new Swipe('left',el,bindings);
  },
  update(el, bindings, vnode){
    if(vnode.Swipe) {
      vnode.Swipe.rebind(vnode.elm);
    }else{
      vnode.Swipe = new Swipe('left',vnode.elm,bindings);
    }
  }
};
export const SwipeRight = {
  name: 'rt-swipe-right',
  bind (el, bindings, vnode) {
    vnode.Swipe = new Swipe('right',el,bindings);
  },
  update(el, bindings, vnode){
    if(vnode.Swipe) {
      vnode.Swipe.rebind();
    }else{
      vnode.Swipe = new Swipe('right',el,bindings);
    }
  }
};



