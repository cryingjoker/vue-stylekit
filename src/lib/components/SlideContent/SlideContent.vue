<script type="text/jsx">
export default {
  name: "RtSlideContent",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isOpenLocal: false
  }),
  mounted() {
    if (this.isOpen) {
      this.isOpenLocal = this.isOpen;
    }
  },
  methods:{
    toggleOpen(){
      this.isOpenLocal= !this.isOpenLocal;
    }
  },
  render(h) {
    return <div class={"rt-slide" + (this.isOpenLocal ? " rt-slide--is-active" : "")}>
      <div class="rt-slide__header" onClick={this.toggleOpen}>
        <svg class="rt-slide__arrow" width="8px" height="13px" viewBox="0 0 8 13" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="new-abonent" transform="translate(-202.000000, -2087.000000)" fill="#101828">
              <g id="primechania" transform="translate(0.000000, 1885.000000)">
                <g id="Group">
                  <g id="Group-3" transform="translate(3.000000, 50.000000)">
                    <polygon id="Shape-Copy"
                             transform="translate(203.000000, 158.500000) rotate(-90.000000) translate(-203.000000, -158.500000) "
                             points="207.6 155 203 159.351351 198.4 155 197 156.324324 203 162 209 156.324324"></polygon>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div class="rt-slide__title">
          {this.$slots.label}
        </div>
      </div>
      <div class="rt-slide__content">
        {this.$slots.content}
      </div>
    </div>;
  }
};
</script>
