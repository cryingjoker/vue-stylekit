<script type="text/jsx">
  export default {
    name: "RtCountdownTimer",
    props: {
      duration: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        timerDuration: parseInt(this.duration * 60),
        minutes: null,
        seconds: null
      };
    },
    computed: {
      countdownClass() {
        let className = 'rt-timer';
        return className;
      }
    },
    mounted() {
      let timeLeft = this.timerDuration;
      this.startCounter(timeLeft)
    },
    created() {},

    methods: {
      startCounter(timeLeft) {
        let counter = timeLeft;
        let intervalID = setInterval(() => {
          counter--;
          this.minutes = Math.floor(counter / 60);
          this.seconds = counter % 60;
          this.seconds < 10 ? this.seconds = '0' + this.seconds.toString() : null;
          counter <= 0 ? clearInterval(intervalID) : null;
        },1000);
      }
    },
    render(h) {

      return <div class={this.countdownClass}>
        <div class="rt-timer__minutes">{this.minutes}</div>
        <div class="rt-timer__seconds">{this.seconds}</div>
      </div>;
    }
  };
</script>
