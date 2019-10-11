import variables from "../../variables.json";

class ScrollToOnClick {
  constructor(element, data, vnode) {
    this.$el = element;
    this.vnode = vnode;
    this.value = data.value;
    this.scrollToId = this.value.scrollToId;

    if (this.scrollToId) {
      this.bind();

    }else{
      console.error('have not set scrollToId property!');
    }
  }

  bind = () => {
    if (this.$el && (!this.vnode || !this.vnode.ScrollToOnClick)) {
      this.$el.addEventListener("click", this.scrollTo, { passive: true });
    }
  };

  update = (el) => {
    this.unbind();
    this.$el = el;
    this.bind();
  };
  unbind = () => {
    this.$el.removeEventListener("click", this.scrollTo);
  };
  scrollTo = () => {
    function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) return self.pageYOffset;
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
    }
    function elmYPosition(eID) {
      var elm = document.getElementById(eID);
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      } return y;
    }
    function smoothScroll(eID) {
      var startY = currentYPosition();
      var stopY = elmYPosition(eID);
      var distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY); return;
      }
      var speed = Math.round(distance / 100);
      if (speed >= 20) speed = 20;
      var step = Math.round(distance / 25);
      var leapY = stopY > startY ? startY + step : startY - step;
      var timer = 0;
      if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
      }
      for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
      }
      return false;
    }
    smoothScroll(this.scrollToId);
  };
}

export const ScrollToOnClickDirective = {
  name: "RtScrollToOnClick",
  isFn: true,
  bind(el, bindings, vnode) {
    console.info('ScrollToOnClick',ScrollToOnClick)
    vnode.context.ScrollToOnClick = new ScrollToOnClick(vnode.elm, bindings, vnode);
    console.info('vnode.context',vnode.context)
    console.info('vnode.context.ScrollToOnClick',vnode.context.ScrollToOnClick)
  },
  update(el, bindings, vnode) {
    console.info('vnode.context',vnode.context.ScrollToOnClick)
    vnode.context.ScrollToOnClick.update(el);
  },
  beforeDestroy() {
    vnode.context.ScrollToOnClick.unbind(el);
  }
};




