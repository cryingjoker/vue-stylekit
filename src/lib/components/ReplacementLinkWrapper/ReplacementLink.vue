<script type="text/jsx">
  export default {
    name: "RtReplacementLink",
    props: {
      linkText: {
        type: String,
        default: null,
        required: true
      },
      macosLink: {
        type: String,
        default: null,
        required: true
      },
      windowsLink: {
        type: String,
        default: null,
        required: true
      }
    },

    data: () => ({
      deviceOS: null
    }),

    mounted(){
      if (navigator.appVersion.indexOf("Win") != -1) this.deviceOS = "Windows";
      if (navigator.appVersion.indexOf("Mac") != -1) this.deviceOS = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) this.deviceOS = "UNIX";
      if (navigator.appVersion.indexOf("Linux") != -1) this.deviceOS = "Linux";
    },
    render: function(h) {

      if(this.deviceOS === 'MacOS') {
        return <a href={'' + this.macosLink + ''} class="rt-link">{this.linkText}</a>;
      } else if(this.deviceOS === 'Windows') {
        return <a href={'' + this.windowsLink + ''} class="rt-link">{this.linkText}</a>;
      } else {
        return <span>{this.linkText}</span> ;
      }
    }
  };
</script>
