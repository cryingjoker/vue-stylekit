<script type="text/jsx">
  export default {
    name: "RtTableCol",
    components: {},
    inject: ['tableLabels'],
    props: {
      width: {
        type: [String, Number],
        default: null
      }
    },
    render: function(h) {
      const style = {};
      if(this.width){
        style.width = String(this.width).replace(/[0-9]/gi).length === 0 ? String(this.width) + 'px' : this.width;
      }

      return <div class="rt-table-col" style={style}></div>
    }
  };
</script>
