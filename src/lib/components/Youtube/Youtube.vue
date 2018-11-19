
<script type="text/jsx">
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
        default: null
      },
      playlistId : {
        type: Array,
        default: null
      },
      playlistLength: {
        type: [Number, Array],
        default: null
      },
      utmSources: {
        type: Array,
        default: null
      },
      pauseImage: {
        type: String,
        default: null
      }
    },
    data: () => ({
      playTime: 0,
      videoIsReady: false,
      player: null,
      playerState: '-1',
      isPlaying: false,
      activeIndexVideo: 0,
      activePlaylistIndex: 0,
      loadedFraction: 0,
      volume: 0,
      videoIdsArray: [],
      videoSize: 0,
    }),

    mounted: function() {
      if(this.utmSources){
        if(location.search){
          let utm = location.search.split('utm-source=')[1];
          if(utm){
            let utmPrefix = utm.split('_')[0];
            if(this.utmSources && this.utmSources.length > 0 ){
              let activePlaylistIndex = this.utmSources.findIndex((utmSourcesItem)=>{
                if(utmSourcesItem === utmPrefix){
                  return true
                }else{
                  return false
                }
              })
              if(activePlaylistIndex >= 0){
                this.activePlaylistIndex = activePlaylistIndex;
              }
            }
          }
        }
      }
      if(this.playlistId){
        if(Array.isArray(this.playlistLength)){
          this.videoSize = this.playlistLength[this.activePlaylistIndex];
        }else {
          this.videoSize = this.playlistLength;
        }
      }else{
        this.videoSize = this.videoId.length;
      }
      this.init();
      this.bindKeyboardEvents()
    },
    beforeDestroy(){
      this.unbindKeyboardEvents();
    },
    updated(){
      this.unbindKeyboardEvents();
      this.bindKeyboardEvents();
    },
    methods: {
      keyPressHolder(event){
        if(this.duration){
          switch(event.keyCode) {
            case 32:
              if (this.isPlaying) {
                this.pauseVideo();
              } else {
                this.playVideo();
              }
              event.preventDefault();
              break;
            case 39:
              if (this.isPlaying) {
                this.playTime+=5;
                this.player.seekTo(this.playTime);
              }
              break;
            case 37:
              if (this.isPlaying) {
                this.playTime-=5;
                if(this.playTime < 0){
                  this.playTime = 0
                }
                this.player.seekTo(this.playTime);
              }
              break;
          }
        }
      },
      unbindKeyboardEvents(){
        window.removeEventListener("keydown",this.keyPressHolder);
      },
      bindKeyboardEvents(){
        window.addEventListener("keydown",this.keyPressHolder, false);
      },
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
        if(this.playerState === YT.PlayerState.PLAYING || this.playerState === YT.PlayerState.CUED || this.playerState === YT.PlayerState.BUFFERING) {
          this.getCurrentTime();
          this.getDuration();
          this.volume = this.player.getVolume();
        }
        if (event.data == YT.PlayerState.ENDED) {

         if(this.activeIndexVideo < this.videoSize - 1){
           this.nextVideo()
         }else{
           this.stopVideo();
         }
        }
      },
      createPlayer(){
        const height = 400;
        const settings = {
          height: '56.25%',
          width: '100%',
          playerVars: {
            "autoplay" :"0",
            "loop" :"0",
            "autohide" :"1",
            "border" :"0",
            "wmode": "opaque",
            "enablejsapi" :"1",
            "modestbranding" :"1",
            "playsinline":"1",
            "rel":"0",
            "showinfo":"0",
            "controls" :"0",
            "disablekb": "1",
            "showinfo": "0",
            "iv_load_policy": "3"
          },
          events: {
            'onReady': this.setVideoReady,
            'onStateChange': this.onStateChange
          }
        }
        if(this.videoId){
          settings.videoId = this.videoId[this.activeIndexVideo]
        }else{

          if(this.playlistId){
            settings.playerVars.list = this.playlistId[this.activePlaylistIndex]
          }
        }
        this.player = new YT.Player("player-"+this._uid, settings);
      },
      setVideoReady(){
        this.videoIsReady = true;
        this.getLoadedFraction();
        this.isMute = this.player.isMuted();
      },
      pauseVideo(){
        this.player.pauseVideo();
        this.isPlaying = false;
      },
      stopVideo(){
        this.player.stopVideo();
        this.isPlaying = false;
        this.activeIndexVideo = 0;
      },
      previousVideo() {

          if (this.activeIndexVideo - 1 < 0) {
            this.activeIndexVideo = this.videoSize - 1;
          } else {
            this.activeIndexVideo--;
          }
        if (this.playlistId) {
          this.player.previousVideo();
        }else {
          this.player.loadVideoById(this.videoId[this.activeIndexVideo])
        }
      },
      nextVideo() {
        if (this.activeIndexVideo + 1 === this.videoSize) {
          this.activeIndexVideo = 0;
        } else {
          this.activeIndexVideo++;
        }
        if (this.playlistId) {
          this.player.nextVideo();
        } else {
          this.player.loadVideoById(this.videoId[this.activeIndexVideo])

        }
      },
      setMuteParams(isMute){
        if(isMute){
          this.player.mute();
        }else{
          this.player.unMute();
        }
      },
      getDuration(){
        this.duration = this.player.getDuration()
      },
      getCurrentTime(){
        this.playTime = this.player.getCurrentTime();
        if(this.playerState === YT.PlayerState.PLAYING || this.playerState === YT.PlayerState.BUFFERING) {
          setTimeout(()=>{
            const newTime = parseInt(this.player.getCurrentTime());
            if(this.playTime != newTime) {
              this.playTime = newTime;
              this.getCurrentTime();
            }
          },800)
        }
      },
      togglePause(){
        if(this.isPlaying){
          this.pauseVideo();
        }else{
          this.playVideo();
        }
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
        setTimeout(()=>{
          this.volume = this.player.getVolume();
          this.isPlaying = true;
        },10)
      },
      changeTime(procentOfDuration){
        this.player.seekTo(this.duration*procentOfDuration);
      },
      changeVolume(newVolume){
        this.volume = newVolume*100;
        this.player.setVolume(newVolume*100);
      },
    },
    render(){

      const backgroundImage = (()=>{
        if(this.isPlaying){
          return null;
        }
        if(this.pauseImage) {
          const style = {
            backgroundImage: 'url('+this.pauseImage+')'
          }
          return <div class="rt-youtube___pause-image" style={style}></div>
        }else{
          return <div class="rt-youtube___pause-background"></div>
        }
      })()
      const playButton = (()=>{
        if(!this.isPlaying) {
          return <div class="rt-youtube__play" onClick={this.playVideo}>
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
          return <div class="rt-youtube__pause" onClick={this.pauseVideo}>
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
      const videoControls = (()=>{
        if(this.videoIsReady) {

          let min = parseInt(this.playTime/60);
          let sec = parseInt(this.playTime%60);

          if(min<10){
            min = '0'+min
          }
          if(sec<10){
            sec = '0'+sec
          }

          let minD = parseInt(this.duration/60);
          let secD = parseInt(this.duration%60);

          if(minD<10){
            minD = '0'+minD
          }
          if(secD<10){
            secD = '0'+secD

          }
          const procentPlayed = this.playTime/this.duration*100;
          const time = (()=>{
            if(this.duration) {
              return <div class="rt-youtube__time">{min}:{sec} / {minD}:{secD}</div>
            }else{
              return null
            }
          })()
          return <div class="rt-youtube__play-control">
            <div class="rt-youtube__pause-space" onClick={this.togglePause}></div>
            {this.duration || this.playerState !== '-1'? <div class="rt-youtube__menu">
              <rt-youtube-fraction onChangetime={this.changeTime} procent-played={procentPlayed} fraction={this.loadedFraction}></rt-youtube-fraction>
              {playButton}
              {time}
              {this.duration ? <rt-youtube-volume default-volume={this.volume} is-mute={this.isMute} onMutetoggle={this.setMuteParams} onChangevolume={this.changeVolume}></rt-youtube-volume> : null}
            </div> : <div class="rt-youtube__start-video" onClick={this.playVideo}>
              <svg width="34px" height="47px" viewBox="0 0 34 47" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="smart-home-copy" transform="translate(-631.000000, -329.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <polygon id="ic-play" transform="translate(648.000000, 352.500000) rotate(-270.000000) translate(-648.000000, -352.500000) " points="625 369 648 336 671 369"></polygon>
                  </g>
                </g>
              </svg>
            </div>}
          </div>
        }else{
          return <div class="rt-youtube___not-ready"><rt-spinner /></div>
        }
      })()
      const nextVideoButton = (()=>{
        if(this.playerState !== '-1' && this.videoSize > 0 && this.activeIndexVideo+1 < this.videoSize){
          return <div class="rt-youtube__next rt-youtube__change-video" onClick={this.nextVideo}>
            <svg width="20px" height="39px" class="rt-youtube__change-icon" viewBox="0 0 20 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="smart-home-copy" transform="translate(-1061.000000, -335.000000)" fill-rule="nonzero">
                  <polygon id="Path-2" points="1061.48968 335.403436 1080.59192 354.506833 1061.48968 373.61023 1061.48968 370.765082 1077.75961 354.506833 1061.48968 338.229608"></polygon>
                </g>
              </g>
            </svg>

          </div>
        }
        else{
          return null
        }
      })()
      const previousVideoButton = (()=>{
        if(this.playerState !== '-1' && this.videoSize > 0 && this.activeIndexVideo > 0){
          return <div class="rt-youtube__previous rt-youtube__change-video" onClick={this.previousVideo}>
            <svg width="20px" height="39px" class="rt-youtube__change-icon" viewBox="0 0 20 39" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                <g id="smart-home-copy" transform="translate(-215.000000, -335.000000)" fill-rule="nonzero">
                  <polygon id="Path-2" transform="translate(224.551120, 354.488486) scale(-1, 1) translate(-224.551120, -354.488486) " points="215 335.385089 234.102239 354.488486 215 373.591883 215 370.746735 231.269933 354.488486 215 338.21126"></polygon>
                </g>
              </g>
            </svg>

          </div>
        }
        else{
          return null
        }
      })()
      return <div class={"rt-youtube"+(this.isPlaying ? " rt-youtube--is-active" : "")}>
        <div id={"player-"+this._uid}></div>
        <div class="rt-youtube__controls">
          {backgroundImage}
          {videoControls}

        </div>
        {nextVideoButton}
        {previousVideoButton}
      </div>
    }
  };
</script>
