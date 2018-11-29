import variables from "../../variables.json";

class SlideContentVertical {
  constructor(element, data, vnode) {
    this.$el = element;
    this.value = data.value;
    this.bind();
    this.vnode = vnode;

    this.triggerClassName = this.value.triggerClassName || "rt-slide-content-vertical-trigger";
    this.containerClassName = this.value.containerClassName || "rt-slide-content-vertical-content";
    this.isActive = this.value.isActive ? this.value.isActive : false;
    this.activeTriggerClassName = this.value.activeTriggerClassName || "rt-slide-content-vertical-trigger--is-active";
    this.activeContainerClassName = this.value.activeContainerClassName || "rt-slide-content-vertical-content--is-active";
    this.activeTriggerClassName = this.activeTriggerClassName.split(' ');
    this.activeContainerClassName = this.activeContainerClassName.split(' ');
  }

  bind = () => {
    if(!this.triggerClassName){
      setTimeout(()=>{
        this.bind();
      },50)
    }else {
      const el = this.$el;
      const trigger = el.querySelector(`.${this.triggerClassName}`);
      this.checkActiveStatus();
      if (trigger) {
        trigger.addEventListener("mousedown", this.trigger, { passive: false });
      }
    }
  };
  checkActiveStatus = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    const content = el.querySelector(`.${this.containerClassName}`);
    if (trigger && content) {
      if ((trigger.classList.contains(this.activeTriggerClassName[0]) || content.classList.contains(this.activeContainerClassName[0])) && !this.isActive) {
        this.isActive = true;
      }
    }
  };
  trigger = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    const content = el.querySelector(`.${this.containerClassName}`);
    if (trigger) {
      if (this.isActive) {
        this.activeTriggerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          trigger.classList.remove(className);
        });
        this.activeContainerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          content.classList.remove(className);
        });
      } else {
        this.activeTriggerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          trigger.classList.add(className);
        });
        this.activeContainerClassName.filter(className=> className.trim().length > 0).forEach((className)=>{
          content.classList.add(className);
        });
      }
      this.isActive = !this.isActive;
    }
  };
  update = (el) => {
    this.unbind();
    this.$el = el;
    this.bind();
  };
  unbind = () => {
    const el = this.$el;
    const trigger = el.querySelector(`.${this.triggerClassName}`);
    if (trigger) {
      trigger.removeEventListener("mousedown", this.trigger);
    }
  };
}

export const SlideContentVerticalDirective = {
  name: "RtSlideContentVertical",
  bind(el, bindings, vnode) {
    vnode.context.SlideContentVertical = new SlideContentVertical(vnode.elm, bindings, vnode);
  },
  update(el, bindings, vnode) {
    vnode.context.SlideContentVertical.update(el);
  },
  beforeDestroy() {
    vnode.context.SlideContentVertical.unbind(el);
  }
};




