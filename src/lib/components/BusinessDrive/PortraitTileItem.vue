<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtPortraitTileItem",
    components: componentsList,
    props:{
      photo: {
        type: String,
        default: ''
      },
      smallImage: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    },
    mounted(){

    },
    computed: {

    },
    methods: {
      showSpeakerPopup() {
        document.querySelector('.popup-image').style.backgroundImage = 'url(' + this.$el.querySelector('.rt-portrait-tile-gallery__image').src + ')';
        document.querySelector('.popup-title').innerHTML = this.$el.querySelector('.speaker-name').innerHTML;
        document.querySelector('.popup-theme').innerHTML = 'Тема: &#171;' + this.$el.querySelector('.rt-portrait-tile-gallery__theme').innerHTML + '&#187;';
        document.querySelector('.popup-reputation').innerHTML = this.$el.querySelector('.rt-portrait-tile-gallery__item-description .rt-font-paragraph').innerHTML;
        document.querySelector('.popup-description').innerHTML = this.$el.querySelector('.rt-portrait-tile-gallery__description').innerHTML;
        document.querySelector('.rtb-popup').scrollTo(0, 0);
        document.querySelector('.speaker-popup').classList.add('rtb-popup-wrapper--active');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }
    },
    render(h) {
      const name = (() => {
        let fullName = this.$slots.title[0].text;
        let space = fullName.indexOf(' ');
        let firstName = fullName.substring(0, space);
        let lastName = fullName.substr(space + 1);
        return <div class="speaker-name rt-font-bold rt-space-bottom rt-md-space-bottom-none">
          <div class="speaker-name__wrapper">
            <div class="speaker-name__name">{firstName}</div>
          </div>
          <div class="speaker-name__wrapper">
            <div class="speaker-name__surname">{lastName}</div>
          </div>
        </div>
      })();

      return <div class={(this.smallImage ? "rt-col-4 rt-col-td-2" : "rt-col-6 rt-col-td-3") + " rt-col-md-3"}>
        <div class="rt-portrait-tile-gallery__item" onClick={this.showSpeakerPopup}>
          <img class="rt-portrait-tile-gallery__image" src={this.photo}/>
          <div class="rt-portrait-tile-gallery__item-description">
            {name}
            {this.$slots.reputation}
          </div>
           <div class="rt-portrait-tile-gallery__description">{this.$slots.description}</div>
           <div class="rt-portrait-tile-gallery__theme">{this.$slots.theme}</div>
        </div>
      </div>
    }
  }
</script>
