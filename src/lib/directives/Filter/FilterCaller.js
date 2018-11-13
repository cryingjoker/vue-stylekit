import variables from "../../variables.json";
class FilterCaller {
  constructor(element, action, vnode){
    this.$el = element;
    this.action = action;
    this.bind();
    this.vnode = vnode;
  }
  bind = ()=>{
    console.info('!!',this)
  }

  // update = (el) => {
  //   this.unbind();
  //   this.$el = el;
  //   this.bind();
  // }
  // unbind = () => {
  //   window.removeEventListener('click',this.triggerAction);
  //   this.$el.removeEventListener('mouseenter', this.mouseenter);
  //   this.$el.removeEventListener('mouseleave', this.mouseleave);
  // }
  // mouseleave = ()=>{
  //   this.hover = false
  // }
  // mouseenter = ()=>{
  //   this.hover = true
  // }
  // triggerAction = ()=>{
  //
  //   const isTablet =
  //     window.innerWidth <= parseInt(variables["tablet-step-size"]);
  //   if(!this.hover && !isTablet){
  //     this.action.value();
  //   }
  // }
}

export const FilterCallerDirective = {
  name: 'RtFilterCaller',
  // isFn: true,
  inject: ['foo'],
  bind (el, bindings, vnode) {
    console.info('#### vnode',vnode);
  },
  update(el, bindings, vnode){
    console.info('#### vnode',vnode);
  },
  beforeDestroy(){
    console.info('#### vnode',vnode);
    // vnode.context.OutsideClick.unbind(el);
  }
};

// <script>
//
//
// setTimeout(()=>{
//   var b = new Date() - 0;
//   function scrollTo(element, to, duration) {
//     var start = element.scrollTop,
//       change = to - start,
//       currentTime = 0,
//       increment = 20;
//
//     var animateScroll = function(){
//       currentTime += increment;
//       var val = Math.easeInOutQuad(currentTime, start, change, duration);
//       element.scrollTop = val;
//       if(currentTime < duration) {
//         setTimeout(animateScroll, increment);
//       }
//     };
//     animateScroll();
//   }
//
//   Math.easeInOutQuad = function (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
//   };
//
//   var nodesArray = Array.prototype.slice.call(document.querySelectorAll('.rt-banner .rt-button-orange'))
//   for(var i in nodesArray){
//     nodesArray[i].addEventListener('click',function(){
//       scrollTo(document.documentElement, document.querySelector('#tariff').offsetTop - document.querySelector('#header').offsetHeight,300)
//     })
//   }
// },5000)
//
// </script>




