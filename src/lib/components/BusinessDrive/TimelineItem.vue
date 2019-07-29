<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtTimelineItem",
    components: componentsList,
    props: {
      important: {
        type: Boolean,
        default: false
      },
      hasImage: {
        type: Boolean,
        default: true
      },
      image: {
        type: String,
        default: ''
      },
      topMargin: {
        type: String,
        default: ''
      },
      speakerEvent: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {

      }
    },
    mounted(){

    },
    computed: {
      blockStyle() {
        const styles = {};

        if (this.topMargin !== null) {
          styles.marginTop = this.topMargin;
        }

        return styles;
      }
    },
    methods: {
      showSpeakerPopup() {
        document.querySelector('.popup-image').style.backgroundImage = 'url(' + this.$el.querySelector('.rt-timeline__item-image').src + ')';
        let fullName = this.$el.querySelector('.rt-timeline__item-speaker').innerHTML;
        let space = fullName.indexOf(' ');
        let firstName = fullName.substring(0, space);
        let lastName = fullName.substr(space + 1);
        document.querySelector('.popup-title').innerHTML = '<div class="speaker-name__wrapper"> ' +
            '<div class="speaker-name__name">' + firstName + '</div> ' +
          '</div> ' +
          '<div class="speaker-name__wrapper"> ' +
            '<div class="speaker-name__surname">' + lastName + '</div> ' +
          '</div> ';
        document.querySelector('.popup-theme').innerHTML = 'Тема: &#171;' + this.$el.querySelector('.rt-timeline__item-theme').innerHTML + '&#187;';
        document.querySelector('.popup-description').innerHTML = this.$el.querySelector('.rt-timeline__item-description').innerHTML;
        document.querySelector('.popup-reputation').innerHTML = this.$el.querySelector('.rt-timeline__item-reputation').innerHTML;
        document.querySelector('.speaker-popup').classList.add('rtb-popup-wrapper--active');
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
      }
    },
    render(h) {
      const eventImage = (() => {
        if(this.hasImage) {
          return <div class="rt-timeline__item-image-wrapper">
            <img class="rt-timeline__item-image" src={this.image}/>
          </div>;
        } else {
          return null;
        }
      })();

      const speakerName = (() => {
        if(this.$slots["speaker-name"]) {
          return <h3 class="rt-timeline__item-speaker color-white05">{this.$slots["speaker-name"]}</h3>;
        } else {
          return null;
        }
      })();

      if(this.important) {
        return <div class={"rt-timeline__item rt-timeline__item--important" + (this.speakerEvent ? ' clickable': '')} onClick={this.showSpeakerPopup} style={this.blockStyle}>
          <div class="timestamp-wrapper rt-space-bottom15">
            <span class="timestamp">{this.$slots['time-stamp']}</span>
          </div>
          {eventImage}
          <h2 class="rt-timeline__item-theme rt-font-bold">{this.$slots.theme}</h2>
          {speakerName}
          <div class="rt-timeline__item-description">{this.$slots.description}</div>
          <div class="rt-timeline__item-reputation">{this.$slots.reputation}</div>
        </div>;
      } else {
        return <div class="rt-timeline__item" style={this.blockStyle}>
          <h2 class="timestamp-wrapper rt-space-bottom">
            <span class="timestamp">{this.$slots['time-stamp']}</span>
          </h2>
          <h3 class="rt-timeline__item-theme rt-font-bold">{this.$slots.theme}</h3>
        </div>;
      }
    }
  }
</script>
