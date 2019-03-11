<script type="text/jsx">
import BannerPaginatorItem from "./BannerPaginatorItem.vue";
// import debounce from "debounce";
import variables from "../../variables.json";

const componentsList = {};

componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;

export default {
  name: "RtBannerVideoGameContron",
  components: componentsList,
  props: {},

  data: () => ({
    isPlaying : true,
    playInterval: null,
    video: null
  }),

  inject: {
    RtBanners: {}
  },


  mounted: function() {
    setTimeout(()=>{
      this.video = this.$el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.rt-banner-video__content');



      this.video.addEventListener('play',(e)=>{
        this.playInterval = setInterval(()=>{
          this.video.style.strokeDashoffset =  ((1 - this.video.currentTime/(this.video.duration*1000)) * 380) %380;
          if(!this.video){
           clearInterval(this.playInterval);
          }
        },2000);
      });
      this.video.addEventListener('playing',(e)=>{
        this.isPlaying = true;
        this.playInterval = setInterval(()=>{
          this.$el.querySelector('.banner__video-time-line-active').style.strokeDashoffset =  ((1-this.video.currentTime/(this.video.duration))* 380) %380;
        },1000/30);
      });
      this.video.play();

      this.video.addEventListener('canplay',(e)=>{
        setTimeout(()=>{
          const playVideo = ()=>{

            return this.video.play().then(() => {})
              .catch((e) => {
              setTimeout(() => {
                playVideo();
              }, 1500);
            });
          };
          playVideo();
        },400);

      });
      this.video.addEventListener('pause',(e)=>{
        this.isPlaying = false;
        clearInterval(this.playInterval);
      });

    },100);
  },

  methods: {
    toggleStartStop(){
      this.$set(this,'isPlaying', !this.isPlaying);
      if(this.isPlaying){
        this.video.play();
      }else{
        this.video.pause();
      }

    }
  },

  render(h) {
    return <div class={"banner__video-controls" + (this.isPlaying ? " banner__video-controls--is-pause" : "")} onClick={this.toggleStartStop}>
      <svg class="banner__video-time-line-active" width="131px" height="131px" viewBox="0 0 126 126" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FF4F12">
        <circle r="60" cx="63" cy="63" fill="transparent" />
      </svg>
      <svg class="banner__video-time-line" width="131px" height="131px" viewBox="0 0 126 126" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
        <circle r="60" cx="63" cy="63" fill="transparent" />
      </svg>
      <div class="banner__video-button-status"></div>

    </div>;
  }
};
</script>
