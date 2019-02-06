import variables from "../../variables.json";
class OutsideClick {
  constructor(element, action, vnode){
    this.$el = element;
    this.action = action;
    this.bind();
    this.vnode = vnode;
  }
  bind = ()=>{
    if(this.$el && (!this.vnode || !this.vnode.OutsideClick)) {
      window.addEventListener('click',this.triggerAction, {passive: true});
      this.$el.addEventListener('mouseenter', this.mouseenter, {passive: true});
      this.$el.addEventListener('mouseleave', this.mouseleave, {passive: true});
    }
  }

  update = (el) => {
    this.unbind();
    this.$el = el;
    this.bind();
  }
  unbind = () => {
    window.removeEventListener('click',this.triggerAction);
    this.$el.removeEventListener('mouseenter', this.mouseenter);
    this.$el.removeEventListener('mouseleave', this.mouseleave);
  }
  mouseleave = ()=>{
    this.hover = false
  }
  mouseenter = ()=>{
    this.hover = true
  }
  triggerAction = ()=>{

    const isTablet =
      window.innerWidth <= parseInt(variables["tablet-upper-limit"]);
    if(!this.hover && !isTablet){
      this.action.value();
    }
  }
}

export const OutsideClickDirective = {
  name: 'RtOutSideClick',
  isFn: true,
  bind (el, bindings, vnode) {
    vnode.context.OutsideClick = new OutsideClick(vnode.elm,bindings,vnode);
  },
  update(el, bindings, vnode){
    vnode.context.OutsideClick.update(el);
  },
  beforeDestroy(){
    vnode.context.OutsideClick.unbind(el);
  }
};




