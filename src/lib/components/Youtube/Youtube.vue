
<script type="text/jsx">
  // YT.PlayerState.ENDED
  // YT.PlayerState.PLAYING
  // YT.PlayerState.PAUSED
  // YT.PlayerState.BUFFERING
  // YT.PlayerState.CUED

  import YoutubeVolume from './YoutubeVolume.vue'
  import YoutubeFraction from './YoutubeFraction.vue'
  const components = {};
  components[YoutubeVolume.name] = YoutubeVolume;
  components[YoutubeFraction.name] = YoutubeFraction;
  export default {
    name: "RtYoutube",
    components: components,
    props: {
      videoId : {
        type: Array,
        required: true
      },
      pauseImage: {
        type: String,
        default: null
      }
    },
    data: () => ({
      videoIsReady: false,
      player: null,
      playerState: '-1',
      isPlaying: false,
      activeIndexVideo: 0,
      loadedFraction: 0
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
          tag.onload = this.init;
          document.getElementsByTagName('body')[0].appendChild(tag);
        }else{
          if(typeof YT === 'undefined' || !YT.Player) {
            setTimeout(()=>{this.init()},100)
          }else{
            this.createPlayer();
          }
        }
      },
      onStateChange(event){
        this.playerState = event.data;
        // console.info('event onStateChange',event,YT.PlayerState.ENDED);
      },
      createPlayer(){
          const height = 400;
          this.player = new YT.Player("player-"+this._uid, {
            height: '56.25%',
            width: '100%',
            videoId: this.videoId[this.activeIndexVideo],
            playerVars: {
              "autoplay" :"0",
              // "loop" :"1",
              "autohide" :"1",
              "border" :"0",
              "rel":"0",
              "wmode": "opaque",
              "enablejsapi" :"1",
              // "modestbranding" :"1",
              "controls" :"0",
              "disablekb": "1",
              "showinfo": "0",
            },
            events: {
              'onReady': this.setVideoReady,
              'onStateChange': this.onStateChange
            }
          });
      },
      setVideoReady(){
        this.videoIsReady = true;
        this.getLoadedFraction();
        this.isMute = this.player.isMuted();
      },
      stopVideo(){
        this.player.pauseVideo();
        this.isPlaying = false;
      },
      nextVideo(){
        if(this.activeIndexVideo + 1 === this.videoId.length){
          this.activeIndexVideo = 0;
        }else{
          this.activeIndexVideo ++;
        }
        this.player.loadVideoById(this.videoId[this.activeIndexVideo])
      },
      volumeFadeIn(){
        let volume = this.player.getVolume();
        volume+=1
        this.changeVolume(volume);
        if(volume < 100){
          setTimeout( () => {
            // console.info('volume',volume);
            this.volumeFadeIn();
          },100)
        }
      },
      setMuteParams(isMute){
        if(!isMute){
          this.player.mute();
        }else{
          this.player.unMute();
        }
        console.info('getIframe -->> ',this.player.getIframe);
      },
      getLoadedFraction(){
        if(this.loadedFraction !== this.player.getVideoLoadedFraction()) {
          this.loadedFraction = this.player.getVideoLoadedFraction();
        }

        if(this.loadedFraction < 1){
          setTimeout(()=>{
            this.getLoadedFraction();
          },500)
        }
      },
      playVideo(){


        this.player.playVideo();
        setTimeout(()=> {
          this.changeVolume(0);
        })
        setTimeout(()=>{
          this.volumeFadeIn();
          this.isPlaying = true;
        },10)
      },
      changeVolume(newVolume){
        this.player.setVolume(newVolume/100);
      },
    },
    computed:{
      playerVolume(){
         return this.player.getVolume();
      }
    },
    watch:{
      playerState(oldVal,newVal){
        console.info('playerState has been changed ' ,oldVal,newVal);
      }
    },
    render(){
      const backgroundImage = (()=>{
        if(this.pauseImage) {
          const style = {
            backgroundImage: 'url('+this.pauseImage+')'
          }
         return <div class="rt-youtube___pause-image" style={style}></div>
        }else{
          return null
        }
      })()
      const playButton = (()=>{
        if(!this.isPlaying) {
          return <div className="rt-youtube__play" onClick={this.playVideo}>
            <svg width="10px" height="13px" viewBox="0 0 10 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="smart-home-copy" transform="translate(-273.000000, -2232.000000)" fill="#FFFFFF"
                   fill-rule="nonzero">
                  <polygon id="ic-play"
                           transform="translate(278.000000, 2238.500000) rotate(-270.000000) translate(-278.000000, -2238.500000) "
                           points="272 2243 278 2234 284 2243"></polygon>
                </g>
              </g>
            </svg>
          </div>
        }else {
          return <div className="rt-youtube__pause" onClick={this.stopVideo}>
            <svg width="9px" height="13px" viewBox="0 0 9 13" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="smart-home-copy" transform="translate(-273.000000, -1119.000000)" fill="#FFFFFF"
                   fill-rule="nonzero">
                  <g id="Group" transform="translate(273.000000, 1119.000000)">
                    <rect id="Rectangle-5" x="0" y="0" width="3" height="13"></rect>
                    <rect id="Rectangle-5-Copy" x="6" y="0" width="3" height="13"></rect>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        }
      })();
      //getDuration
      const videoControls = (()=>{
        if(this.videoIsReady) {
          return <div class="rt-youtube__play-control">

            <div class="rt-youtube__menu">
              <rt-youtube-fraction fraction={this.loadedFraction}></rt-youtube-fraction>
              {playButton}
              <rt-youtube-volume default-volume={this.playerVolume} is-mute={this.isMute} onMutetoggle={this.setMuteParams} onChangevolume={this.changeVolume}></rt-youtube-volume>
            </div>
          </div>
        }else{
          return <div class="rt-youtube___not-ready"><rt-spinner /></div>
        }
      })()
      return <div class={"rt-youtube"+(this.isPlaying ? " rt-youtube--is-active" : "")}>
        <div id={"player-"+this._uid}></div>
        <div class="rt-youtube__controls">
          {backgroundImage}
          {videoControls}
          <div class="rt-youtube__next" onClick={this.nextVideo}>
            <svg class="rt-youtube__control-icon" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 294.997 294.997">
              <path d="M286.36,98.016c-13.223-37.091-40.098-66.813-75.675-83.691C175.109-2.554,135.088-4.567,97.997,8.656
		C60.906,21.879,31.183,48.754,14.305,84.331C-2.572,119.908-4.585,159.928,8.637,197.02c1.113,3.122,4.547,4.748,7.667,3.637
		c3.122-1.113,4.75-4.545,3.637-7.667C7.794,158.918,9.643,122.155,25.147,89.474s42.807-57.369,76.879-69.515
		c34.072-12.146,70.836-10.296,103.516,5.207c32.682,15.504,57.369,42.807,69.516,76.879c12.146,34.072,10.297,70.835-5.207,103.516
		s-42.807,57.369-76.879,69.515c-38.189,13.613-80.082,9.493-114.935-11.304c-2.848-1.699-6.529-0.768-8.227,2.078
		c-1.698,2.846-0.768,6.529,2.078,8.227c23.207,13.848,49.276,20.903,75.541,20.902c16.674,0,33.43-2.845,49.572-8.599
		c37.092-13.223,66.813-40.098,83.691-75.675C297.57,175.127,299.583,135.107,286.36,98.016z"/>
              <path d="M213.499,147.518c0-3.313-2.687-6-6-6H58.069c-3.314,0-6,2.687-6,6s2.686,6,6,6h149.43
		C210.812,153.518,213.499,150.831,213.499,147.518z"/>
              <path d="M165.686,210.275c-2.344,2.343-2.344,6.142,0,8.485c1.171,1.171,2.707,1.757,4.242,1.757s3.071-0.586,4.242-1.757l67-67
		c2.344-2.343,2.344-6.142,0-8.485l-67-67c-2.342-2.343-6.143-2.343-8.484,0c-2.344,2.343-2.344,6.142,0,8.485l62.757,62.757
		L165.686,210.275z"/>
            </svg>

          </div>

        </div>
      </div>
    }
  };
</script>
