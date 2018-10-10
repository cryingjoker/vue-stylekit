
<script type="text/jsx">
export default {
  name: 'RtRowListItem',
  render: function(h) {
    return <div class="rt-row-list__item">
      <div class="rt-row-list__option">
        {this.$slots.icon ? <div class="rt-row-list__icon">
          {this.$slots.icon}
        </div> : null }
        <div class="rt-row-list__content">
          {this.$slots.option}
        </div>
      </div>
      <div class="rt-row-list__value">
        {this.$slots.value}
      </div>
    </div>
  }
};
</script>
