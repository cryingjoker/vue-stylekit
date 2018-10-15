<script type="text/jsx">
  export default {
    name: "RtRowListItem",
    data: () => ({
      show: false,
    }),
    methods: {
      toggleShow(){
        console.info('toggleShow')
        this.show = !this.show;
      }

    },
    render: function(h) {
      if (this.$slots.moreInfo) {
        return <div class={"rt-row-list__item rt-row-list__item--with-slide"+(this.show ? " rt-row-list__item--active" : "")} onClick={this.toggleShow}>
          <div class="rt-row-list__header">
            <div class="rt-row-list__option">
              {this.$slots.icon ? <div class="rt-row-list__icon">
                {this.$slots.icon}
              </div> : null}
              <div class="rt-row-list__content">
                {this.$slots.option}
              </div>
            </div>
            <div class="rt-row-list__value">
              {this.$slots.value}
            </div>
          </div>
          <div class={"rt-row-list__body"+(this.$slots.icon ? " rt-row-list__body--has-icon-padding" : "")}>
            {this.$slots.moreInfo}
          </div>
        </div>;
      } else {
        return <div class="rt-row-list__item">
          <div class="rt-row-list__option">
            {this.$slots.icon ? <div class="rt-row-list__icon">
              {this.$slots.icon}
            </div> : null}
            <div class="rt-row-list__content">
              {this.$slots.option}
            </div>
          </div>
          <div class="rt-row-list__value">
            {this.$slots.value}
          </div>
        </div>;
      }
    }
  };
</script>
