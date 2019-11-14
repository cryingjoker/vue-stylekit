<script type="text/jsx">
  import { optionsListStore } from "./OptionsListStore.tsx";

  export default {
    name: "RtOptionsListInfoItem",
    props: {},
    data: () => ({}),
    mounted() {

      // alert('!')
    },
    methods: {},
    computed: {},
    render(h) {


      if (!!this.$slots.right) {
        return <div class="rt-options-list__option rt-space-vertical05-half">
          <div class="rt-options-list__option-left">{this.$slots.left}</div>
          <div class="rt-options-list__option-right"> {this.$slots.right}
          </div>
        </div>;
      } else {
        if (!!this.$slots.left) {
          return <div class="rt-options-list__option rt-space-vertical05-half">
            <div class="rt-options-list__option-left">{this.$slots.left}</div>
          </div>;
        } else {
          return <div class="rt-options-list__option rt-space-vertical05-half">
            <div class="rt-options-list__option-all">{this.$slots.default}</div>
          </div>;
        }
      }


    }
  };
</script>
