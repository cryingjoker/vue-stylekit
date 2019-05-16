<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtTimeline",
    components: componentsList,
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
      return <div class="rt-timeline">
        {this.$slots.default}
      </div>
    }
  }
</script>
