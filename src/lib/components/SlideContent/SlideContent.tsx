import Vue, { CreateElement, VNode } from "vue";
import { Component, Prop } from "vue-property-decorator";



@Component
class SlideContent extends Vue {
  @Prop({ default: false }) isOpen: boolean;
  @Prop({ default: 'left-right' }) arrowPosition: string;
  @Prop({ default: true }) needBorder: boolean;
  @Prop({ default: false }) dottedView: boolean;
  @Prop({ default: false }) revertDottedView: boolean;
  isOpenLocal = false;

  toggleOpen(){
    this.isOpenLocal= !this.isOpenLocal;

  }
  mounted(){
    if(this.isOpen){
      this.isOpenLocal = this.isOpen;
    }
    if(this.dottedView){

      const header: any = this.$refs.header
      header.$el.querySelectorAll('.rt-slide-content-trigger').forEach((el)=> {
        el.addEventListener('click', () => {
          this.isOpenLocal = !this.isOpenLocal;
          window.getSelection().removeAllRanges();
          setTimeout(()=>{
            window.dispatchEvent(new Event("resize"));
            setTimeout(()=>{
              window.dispatchEvent(new Event("resize"));
            },300)
          },50)
        });
      })

    }
  }
  render(h: CreateElement): VNode {
    if(this.revertDottedView){
      return <div class='slide-dotted'>

        <rt-slide-content-dotted-content is-open={this.isOpenLocal}>{this.$slots.content}</rt-slide-content-dotted-content>
        <rt-slide-content-dotted-header ref="header" is-open={this.isOpenLocal}>{this.$slots.header}</rt-slide-content-dotted-header>
      </div>
    }
    if(this.dottedView){

      return <div class='slide-dotted'>

        <rt-slide-content-dotted-header ref="header" is-open={this.isOpenLocal}>{this.$slots.header}</rt-slide-content-dotted-header>
        <rt-slide-content-dotted-content is-open={this.isOpenLocal}>{this.$slots.content}</rt-slide-content-dotted-content>
      </div>
    }


    let slideArrowClass = `rt-slide__arrow rt-slide__arrow--${this.arrowPosition}`;
    let slideClass = `rt-slide`;

    if(!this.needBorder){
      slideClass += ' rt-slide--without-border';
    }
    if(this.isOpenLocal){
      slideClass += ' rt-slide--is-active';
    }
    let slideHeaderClass = `rt-slide__header rt-slide__header--${this.arrowPosition.split('-')[0]}`;
    let slideContentClass = `rt-slide__content rt-slide__content--${this.arrowPosition.split('-')[0]}`;
    return <div class={slideClass}>
      <div class={slideHeaderClass} onClick={this.toggleOpen}>
        <svg class={slideArrowClass} width="8px" height="13px" viewBox="0 0 8 13" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="new-abonent" transform="translate(-202.000000, -2087.000000)" fill="#101828">
              <g id="primechania" transform="translate(0.000000, 1885.000000)">
                <g id="Group">
                  <g id="Group-3" transform="translate(3.000000, 50.000000)">
                    <polygon id="Shape-Copy"
                             transform="translate(203.000000, 158.500000) rotate(-90.000000) translate(-203.000000, -158.500000) "
                             points="207.6 155 203 159.351351 198.4 155 197 156.324324 203 162 209 156.324324"></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div class="rt-slide__title">
          {this.$slots.label}
        </div>
      </div>
      <div class={slideContentClass}>
        {this.$slots.content}
      </div>
    </div>;
  }
}

export default {
  component: SlideContent,
  name: "RtSlideContent"
};


