<script type="text/jsx">



export default {
  name: 'RtCardImageList',
  props: {
    hasIcon:{
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  render(h) {
    if(this.hasIcon && this.$slots.icon) {
      return <div class="rt-card-image-list rt-card-image-list--has-icon rt-font-small-paragraph">
        <div class="rt-card-image-list__icon">
          {this.$slots.icon}
        </div>
        <div className="rt-card-image-list__content">
          {this.$slots.default}
        </div>
      </div>
    }else {
      return <div class="rt-card-image-list rt-font-small-paragraph">
        {this.$slots.default}
      </div>
    }

  }
};
</script>
