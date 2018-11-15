
<script type="text/jsx">
  // YT.PlayerState.ENDED
  // YT.PlayerState.PLAYING
  // YT.PlayerState.PAUSED
  // YT.PlayerState.BUFFERING
  // YT.PlayerState.CUED

  import YoutubeVolume from './YoutubeVolume.vue'
  const components = {};
  components[YoutubeVolume.name] = YoutubeVolume;
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
      activeIndexVideo: 0
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
        consoel.info('playerState has been changed ' ,oldVal,newVal);
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
      const videoControls = (()=>{
        if(this.videoIsReady) {
          return <div class="rt-youtube__play-control">
            <rt-youtube-volume default-volume={this.playerVolume} onChange={this.changeVolume}></rt-youtube-volume>
            <div class="rt-youtube__play" onClick={this.playVideo}>
              <svg class="rt-youtube__control-icon" xmlns="http://www.w3.org/2000/svg" version="1.1"
                   viewBox="0 0 191.255 191.255">
                <path
                  d="M162.929,66.612c-2.814-1.754-6.514-0.896-8.267,1.917s-0.895,6.513,1.917,8.266c6.544,4.081,10.45,11.121,10.45,18.833  s-3.906,14.752-10.45,18.833l-98.417,61.365c-6.943,4.329-15.359,4.542-22.512,0.573c-7.154-3.97-11.425-11.225-11.425-19.406  V34.262c0-8.181,4.271-15.436,11.425-19.406c7.153-3.969,15.569-3.756,22.512,0.573l57.292,35.723  c2.813,1.752,6.513,0.895,8.267-1.917c1.753-2.812,0.895-6.513-1.917-8.266L64.512,5.247c-10.696-6.669-23.661-7-34.685-0.883  C18.806,10.48,12.226,21.657,12.226,34.262v122.73c0,12.605,6.58,23.782,17.602,29.898c5.25,2.913,10.939,4.364,16.616,4.364  c6.241,0,12.467-1.754,18.068-5.247l98.417-61.365c10.082-6.287,16.101-17.133,16.101-29.015S173.011,72.899,162.929,66.612z"/>
              </svg>
            </div>
            <div class="rt-youtube__pause" onClick={this.stopVideo}>
              <svg class="rt-youtube__control-icon" version="1.1" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 512 512">
                <path d="M291,166v180c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V166c0-11.046-8.954-20-20-20
				C299.954,146,291,154.954,291,166z"/>
                <path d="M437.02,74.98C388.667,26.629,324.38,0,256,0S123.333,26.629,74.98,74.98C26.629,123.333,0,187.62,0,256
				s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512c46.812,0,92.616-12.757,132.462-36.893
				c9.447-5.723,12.467-18.021,6.744-27.468c-5.724-9.449-18.022-12.467-27.469-6.745C334.143,461.244,295.504,472,256,472
				c-119.103,0-216-96.897-216-216S136.897,40,256,40s216,96.897,216,216c0,42.589-12.665,84.044-36.626,119.885
				c-6.14,9.183-3.672,21.603,5.51,27.742c9.184,6.141,21.604,3.672,27.742-5.511C497.002,355.674,512,306.531,512,256
				C512,187.62,485.371,123.333,437.02,74.98z"/>
                <path
                  d="M181,166v180c0,11.046,8.954,20,20,20s20-8.954,20-20V166c0-11.046-8.954-20-20-20S181,154.954,181,166z"/>
              </svg>

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
