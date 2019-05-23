import Vue, { VNode } from 'vue'
import { Component, Prop } from 'vue-property-decorator'

const cssSelector = 'rt-carousel__navi'

@Component
class CarouselNavi extends Vue {

  @Prop({ default: 0 }) hSpace: number
  @Prop({ default: '' }) containerName: string
  @Prop({ default: 53 }) buttonSize: number
  @Prop({ default: false }) isPending: boolean
  @Prop({ default: false }) showTipsNext: boolean
  @Prop({ default: 0 }) nextCount: number
  @Prop({ default: false }) canAdvanceForward: boolean
  @Prop({ default: false }) canAdvanceBackward: boolean

  position: string = 'absolute'
  topPos: string|null = null
  bottomPos: string|null = null

  mounted () { }

  linkClasses (pos: string) {
    return [
      'pc-navs-' + pos,
      {
        'pc-navs--disabled' : pos === 'next' ? !this.canAdvanceForward : !this.canAdvanceBackward,
        'pc-navs--pending' : this.isPending
      }
    ]
  }

  render (): VNode {
    const sideLeftBlock = () => {
      if (this.canAdvanceBackward)
        return <div
          class={ cssSelector + '-side ' + cssSelector + '-side-left' }
          style={{ width: this.hSpace + 'px' }}
        />
    }
    const sideRightBlock = () => {
      if (this.canAdvanceForward)
        return <div
          class={ cssSelector + '-side ' + cssSelector + '-side-right' }
          style={{ width: this.hSpace + 'px' }}
        />
    }
    const style4Buttons = {
      width: this.buttonSize + 'px',
      height: this.buttonSize + 'px'
    }
    const moreTextBlock = () => {
      if (this.showTipsNext && this.nextCount > 0)
        return <div
          class={ cssSelector + '__more' }
        >Ещё&nbsp;{this.nextCount}</div>
    }

    return <div
        class={cssSelector}
      >
        {sideLeftBlock()}
        <div
          class={[
            cssSelector + '-arrows',
            this.containerName
          ]}
          style={{
            position: this.position,
            height: this.buttonSize + 'px',
            top: this.topPos,
            bottom: this.bottomPos
          }}
        >
          <a
            class={ cssSelector + '__button ' + this.linkClasses('prev') }
            style={ style4Buttons }
          ><i class={ cssSelector + '__circle-nav' } /></a>
          <a
            class={ cssSelector + '__button ' + this.linkClasses('next') }
            style={ style4Buttons }
          >
            <i class={ cssSelector + '__circle-nav' } />
            {moreTextBlock()}
          </a>
        </div>
        {sideRightBlock()}
      </div>
  }
}

export default {
  component: CarouselNavi,
  name: 'RtCarouselNavi'
}
