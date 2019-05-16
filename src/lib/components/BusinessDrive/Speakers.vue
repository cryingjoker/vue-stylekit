<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtSpeakers",
    components: componentsList,
    props: {
      fullName: {
        type: String,
        default: ''
      },
      theme: {
        type: String,
        default: ''
      },
      reputation: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    },
    data () {
      return {

      }
    },
    mounted(){

    },
    computed: {},
    methods: {

    },
    render(h) {
      return <div class="rt-tile-plus-timeline-wrapper">
        {this.$slots.default}
      </div>
    }
  }
</script>
