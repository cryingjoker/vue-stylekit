<script type="text/jsx">
  import Vue from "vue";
  import colors from "../../color.json";
  import defaultValues from '../../defaultIconsSize.json'
  export default {
    name: "RtIcon",
    props: {
      type: {
        type: String,
        default: "default"
      },
      image:{
        type: String,
        default: null
      },
      width: {
        type: String,
        default: null
      },
      height: {
        type: String,
        default: null
      },
      color: {
        type: String,
        default: null
      }
    },
    computed: {},
    mounted() {},
    render: function(h) {
      let width = 0;
      let height = 0;
      let color = null;
      if(defaultValues[this.type]) {
        width = this.width ? this.width : defaultValues[this.type].width;
        height = this.height ? this.height : defaultValues[this.type].height;
        color = this.color ? this.color : defaultValues[this.type].color;
      }
      return (
        <div class="rtb-icon">
          <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path class="rtb-icon-image" d="M8 8c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" fill={color} fill-rule="evenodd" fill-opacity=".7"/>
          </svg>
        </div>
      );
    }
  };
</script>

