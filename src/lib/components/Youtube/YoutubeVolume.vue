<script type="text/jsx">
  export default {
    name: "RtYoutubeVolume",
    props:{
      defaultVolume: {
        type: Number,
        default: 0
      }
    },
    data: () => ({
      volume: false,
    }),

    methods:{
      emitValue(nextLeft){
        const lineWidth = this.$refs.line.offsetWidth;
        const responseValue = nextLeft/lineWidth;
        this.$emit('change',responseValue);
      },
      setVolumeByClick(event){
        const lineLeft = this.$refs.line.getBoundingClientRect().left;
        const nextLeft = event.clientX - lineLeft;
        this.$refs.point.style.left = nextLeft;
        this.$refs.volumeLine.style.width = nextLeft;
        this.emitValue(nextLeft);
      },
      drawVolumeFromParen(volume){
        const volumeProcent = volume/100;
        const lineLeft = this.$refs.line.getBoundingClientRect().left;
        const nextLeft = volumeProcent*lineLeft;
        this.$refs.point.style.left = nextLeft;
        this.$refs.volumeLine.style.width = nextLeft;
      },
      unbindClick(){
        this.$refs.line.removeEventListener('click',this.setVolumeByClick)
      },
      bindClick(){
        this.$refs.line.addEventListener('click',this.setVolumeByClick)
      },
      mouseMoveHandler(event){
        const lineWidth = this.$refs.line.offsetWidth;
        const lineLeft = this.$refs.line.getBoundingClientRect().left;
        const lineTopPosition = this.$refs.line.getBoundingClientRect().top;
        const nextLeft = event.clientX - lineLeft;

        if(nextLeft <= lineWidth && nextLeft >= 0){
          this.$refs.point.style.left = nextLeft;
          this.$refs.volumeLine.style.width = nextLeft;
          this.emitValue(nextLeft);
        }

        if(Math.abs(event.clientY - lineTopPosition) > 100 ||  lineWidth -event.clientX + lineLeft < -50  || lineLeft - event.clientX > 50){
          this.unbindMousemove();
        }
      },
      unbindMousemove(event){
        if(event) {
          event.stopPropagation();
          event.preventDefault();
        }
        document.removeEventListener('mousemove',this.mouseMoveHandler);
        document.removeEventListener('mouseup',this.unbindMousemove);
      },
      bindMousemove(){
        document.addEventListener('mousemove',this.mouseMoveHandler, false);
        document.addEventListener('mouseup',this.unbindMousemove, false)
      },
      mouseDown(){
        this.bindMousemove();
      },
    },
    mounted(){
     this.bindClick();
     this.drawVolumeFromParen(this.defaultVolume);
    },
    updated(){
      this.unbindClick();
      this.bindClick();
    },
    beforeDestroy(){
      this.unbindClick();
    },
    render(h){
      return <div class="rt-youtube__volume">
        <div ref="line" class="rt-youtube__volume__line">
          <div ref="volumeLine" class="rt-youtube__volume__now-line"></div>
          <div draggable="false" ref="point" onMousedown={this.mouseDown} class="rt-youtube__volume__point"></div>
        </div>

      </div>
    }
  };
</script>
