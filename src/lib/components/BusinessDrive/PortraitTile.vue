<script type="text/jsx">
  const componentsList = {};
  import variables from "../../variables.json";

  export default {
    name: "RtPortraitTile",
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
      return <div class="row rt-portrait-tile-gallery">
        {this.$slots.default}
      </div>
    }
  }
</script>
