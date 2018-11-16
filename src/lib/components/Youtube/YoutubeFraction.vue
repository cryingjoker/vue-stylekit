<script type="text/jsx">
  export default {
    name: "RtYoutubeFraction",
    props: {
      fraction: {
        type: Number,
        default: 0
      },
      procentPlayed:{
        type: Number,
        default: 0
      }

    },
    data: {
      fractionLocal: 0
    },
    methods: {
      setWillBePlayedLineWidth(event){
        const lineLeft = this.$refs.fraction.getBoundingClientRect().left;
        const lineWidth = this.$refs.fraction.offsetWidth;

        const nextLeft = event.clientX - lineLeft;
        this.$refs.fraction.querySelector('.rt-youtube-fraction__will-be-played').style.width = parseInt(nextLeft/lineWidth*100)+'%';
      },
      setNewTimePlay(event){
        const lineLeft = this.$refs.fraction.getBoundingClientRect().left;
        const nextLeft = event.clientX - lineLeft;
        const lineWidth = this.$refs.fraction.offsetWidth;
        this.$emit('changetime',nextLeft/lineWidth);
      },
      removeWillBePlayedLineWidth(){
        this.$refs.fraction.querySelector('.rt-youtube-fraction__will-be-played').style.width = 0;
      },
      bindMouse(){
        this.$refs.fraction.addEventListener('mousemove',this.setWillBePlayedLineWidth)
        this.$refs.fraction.addEventListener('mouseleave',this.removeWillBePlayedLineWidth)
        this.$refs.fraction.addEventListener('mousedown',this.setNewTimePlay)
      },
      unbindMouse(){
        this.$refs.fraction.removeEventListener('mousemove',this.setWillBePlayedLineWidth)
        this.$refs.fraction.removeEventListener('mouseleave',this.removeWillBePlayedLineWidth)
        this.$refs.fraction.removeEventListener('mousedown',this.setNewTimePlay)
      }
    },
    mounted(){
      this.bindMouse();
    },
    updated(){
      this.unbindMouse();
      this.bindMouse();
    },
    beforeDestroy(){
      this.unbindMouse();
    },
    computed: {
      fractionLocal() {
        return this.fraction
      },
      playedProcentLocal(){
        if(isNaN(this.procentPlayed)){
          return 0
        }else{
          return this.procentPlayed;
        }
      }
    },


    render(h) {
      let readyLineWidth = "width:"+this.fractionLocal*100 + '%';
      let playedLineStyle = "width:"+this.playedProcentLocal + '%';
      let playedPointStyle = "left:" + this.playedProcentLocal+ '%';

      // procentPlayed
      return <div class="rt-youtube-fraction" ref="fraction">
        <div style={playedPointStyle} class="rt-youtube-fraction__played-point"></div>
        <div style={playedLineStyle} class="rt-youtube-fraction__played-line"></div>
        <div style={readyLineWidth} class="rt-youtube-fraction__ready-line"></div>
        <div class="rt-youtube-fraction__will-be-played"></div>
      </div>
    }
  };
</script>
