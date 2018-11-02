
<script type="text/jsx">
export default {
  name: "RtInlineDropdownItem",
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    RtInlineDropdown: {}
  },
  mounted() {
    if (this.isActive) {
      this.RtInlineDropdown.activeItem = this.$el.innerText;
    }
  },
  components: {},
  methods: {},
  render() {
    if (this.RtInlineDropdown.isDropdownMode) {
      return <rt-select-option>{this.$slots.default}</rt-select-option>;
    }
    return <div class="rt-inline-dropdown-item">{this.$slots.default}</div>;
  }
};
</script>
