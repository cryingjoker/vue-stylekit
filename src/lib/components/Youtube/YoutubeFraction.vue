<script type="text/jsx">
  export default {
    name: "RtYoutubeFraction",
    props: {
      fraction: {
        type: Number,
        default: 0
      },

    },
    data: {
      fractionLocal: 0
    },

    watch: {
      fraction() {
        this.fractionLocal = this.fraction
      }
    },

    render(h) {
      let readyLineWidth = this.fractionLocal*100 + '%';
      let style = "width:"+readyLineWidth
      return <div class="rt-youtube-fraction">
        <div style={style} class="rt-youtube-fraction__ready-line"></div>
      </div>
    }
  };
</script>
