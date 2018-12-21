<script type="text/jsx">
export default {
  name: "RtYoutubeVolume",
  props: {
    defaultVolume: {
      type: Number,
      default: 0
    },
    isMute: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    volume: 100,
    isMuteLocal: false
  }),
  watch: {
    defaultVolume(newV,old) {
      this.volume = newV;
      this.$refs.volumeLine.style.width = newV+'%';
      this.$refs.point.style.left =  newV+'%';
    }
  },
  methods: {
    emitValue(nextLeft) {
      const lineWidth = this.$refs.line.offsetWidth;
      const responseValue = nextLeft / lineWidth;
      this.$emit("changevolume", responseValue);
    },
    setVolumeByClick(event) {
      const lineLeft = this.$refs.line.getBoundingClientRect().left;
      const nextLeft = event.clientX - lineLeft;
      this.$refs.point.style.left = nextLeft;
      this.$refs.volumeLine.style.width = nextLeft;
      this.emitValue(nextLeft);
    },
    drawVolumeFromParen(volume) {
      const volumeProcent = volume / 100;
      const lineLeft = this.$refs.line.clientWidth;
      const nextLeft = volumeProcent * lineLeft;
      this.$refs.point.style.left = nextLeft;
      this.$refs.volumeLine.style.width = nextLeft;
    },
    unbindClick() {
      this.$refs.line.removeEventListener("click", this.setVolumeByClick);
    },
    bindClick() {
      this.$refs.line.addEventListener("click", this.setVolumeByClick);
    },
    mouseMoveHandler(event) {
      const lineWidth = this.$refs.line.offsetWidth;
      const lineLeft = this.$refs.line.getBoundingClientRect().left;
      const lineTopPosition = this.$refs.line.getBoundingClientRect().top;
      const nextLeft = event.clientX - lineLeft;

      if (nextLeft <= lineWidth && nextLeft >= 0) {
        this.$refs.point.style.left = nextLeft;
        this.$refs.volumeLine.style.width = nextLeft;
        this.emitValue(nextLeft);
      }

      if (Math.abs(event.clientY - lineTopPosition) > 100 || lineWidth - event.clientX + lineLeft < -50 || lineLeft - event.clientX > 50) {
        this.unbindMousemove();
      }
    },
    unbindMousemove(event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      document.removeEventListener("mousemove", this.mouseMoveHandler);
      document.removeEventListener("mouseup", this.unbindMousemove);
    },
    bindMousemove() {
      document.addEventListener("mousemove", this.mouseMoveHandler, false);
      document.addEventListener("mouseup", this.unbindMousemove, false);
    },
    mouseDown() {
      this.bindMousemove();
    },
    muteToggle() {
      this.isMuteLocal = !this.isMuteLocal;
      this.$emit("mutetoggle", this.isMuteLocal);
    }
  },
  mounted() {
    this.isMuteLocal = this.isMute;
    this.bindClick();
    this.drawVolumeFromParen(this.defaultVolume);
  },
  updated() {
    this.unbindClick();
    this.bindClick();
  },
  beforeDestroy() {
    this.unbindClick();
  },
  render(h) {
    const muteButton = (()=>{
      let buttonClass = 'rt-youtube__sound-control';
      if(this.isMuteLocal){
        buttonClass += ' rt-youtube__sound-control--mute'
      }
      return <div class={buttonClass} onClick={this.muteToggle}>
        <svg width="18px" height="13px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="smart-home-copy" transform="translate(-908.000000, -2230.000000)" fill="#FFFFFF"
               fill-rule="nonzero">
              <g id="video-ui-simple-copy-3" transform="translate(263.000000, 2218.000000)">
                <path
                  d="M645,17.5295833 L645,23.2795833 L648.833333,23.2795833 L653.625,28.07125 L653.625,12.7379167 L648.833333,17.5295833 L645,17.5295833 Z M657.9375,20.4045833 C657.9375,18.7083333 656.96,17.2516667 655.541667,16.5425 L655.541667,24.2570833 C656.96,23.5575 657.9375,22.1008333 657.9375,20.4045833 Z M655.541667,12 L655.541667,13.9741667 C658.31125,14.7983333 660.333333,17.3666667 660.333333,20.4045833 C660.333333,23.4425 658.31125,26.0108333 655.541667,26.835 L655.541667,28.8091667 C659.384583,27.9370833 662.25,24.50625 662.25,20.4045833 C662.25,16.3029167 659.384583,12.8720833 655.541667,12 L655.541667,12 Z"
                  id="ic-volume"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    })()
    return <div class="rt-youtube__volume">
      {muteButton}
      <div ref="line" class="rt-youtube__volume__line">
        <div ref="volumeLine" class="rt-youtube__volume__now-line"></div>
        <div draggable="false" ref="point" onMousedown={this.mouseDown} class="rt-youtube__volume__point"></div>
      </div>

    </div>;
  }
};
</script>
