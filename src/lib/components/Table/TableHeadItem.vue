<script type="text/jsx">


  export default {
    name: 'RtTableHeadItem',
    components: {},
    props: {

    },
    mounted: function() {
    },
    // methods: {
    //   setValue() {
    //     this.$el.querySelector('.switch-element').checked = Boolean(this.checked);
    //   },
    //   inputHandler() {
    //     this.$emit('change', this.$el.querySelector('.switch-element').checked);
    //     this.showWave();
    //   },
    //   showWave() {
    //     this.$refs.ripple.startRipple({
    //       offsetX: 10,
    //       offsetY: 10
    //     });
    //   }
    // }
    render: function(h) {
      return <th class="rt-table-head__item">{this.$slots.default}</th>
    }
  };
</script>
