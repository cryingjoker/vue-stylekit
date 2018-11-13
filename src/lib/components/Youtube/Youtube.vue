<script type="text/jsx">
  export default {
    name: "RtYoutube",
    props: {
      videoId : {
        type: String,
        required: true
      }
    },
    data: () => ({
      player: null
    }),

    mounted: function() {
      this.init();
    },

    methods: {
      init(){
        let apiScript = document.querySelector('script[src$="https://www.youtube.com/iframe_api"]');
        if (typeof YT === 'undefined' && apiScript === null) {
          let tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          tag.onload = this.init
          document.getElementsByTagName('body')[0].appendChild(tag);
        }else{
          if(typeof YT === 'undefined' || !YT.Player) {
            setTimeout(()=>{this.init()},100)
          }else{
            this.createPlayer();
          }
        }
      },
      createPlayer(){
          const height = 400;
          this.player = new YT.Player("player-"+this._uid, {
            height: height,
            width: height*2.35,
            videoId: this.videoId,
            playerVars: {
              "autoplay" :"1",
              "loop" :"1",
              "autohide" :"1",
              "border" :"0",
              "rel":"0",
              "wmode": "opaque",
              "enablejsapi" :"1",
              "modestbranding" :"1",
              "controls" :"0",
              "showinfo" :"0"
            },
            events: {
              'onReady': this.playVideo,
            }
          });
      },
      playVideo(){
        this.player.playVideo();
      }
    },

    render(){
      return <div class="rt-youtube">
        <div id={"player-"+this._uid}></div>
        <div class="rt-youtube__controls"></div>
      </div>
    }
  };
</script>
