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
      },
      preLinkText: {
        type: String,
        default: ''
      },
      postLinkText: {
        type: String,
        default: ''
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
        return <p>{this.preLinkText}<a href={'' + this.macosLink + ''} class="rt-link">{this.linkText}</a>{this.postLinkText}</p>;
      } else if(this.deviceOS === 'Windows') {
        return <p>{this.preLinkText}<a href={'' + this.windowsLink + ''} class="rt-link">{this.linkText}</a>{this.postLinkText}</p>;
      } else {
        return <p>{this.preLinkText}<span>{this.linkText}</span>{this.postLinkText}</p>;
      }
    }
  };
</script>
