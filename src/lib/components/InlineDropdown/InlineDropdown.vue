<!--
  <rt-select-option v-for="(option, index) in optionsList" :key="'index'+Math.random().toString(5).slice(4)"
-->
<script type="text/jsx">
import { Select } from "../index";
const componentsList = {};
componentsList[Select.name] = Select;
export default {
  name: "RtInlineDropdown",
  components: {},

  props: {
    resizeSteps: {
      type: Array,
      default: []
    },
    dropdownMinWidth: {
      type: [Number, String]
    }
  },
  data: () => ({
    resizeTypeEnum: 0,
    RtInlineDropdown: {
      minClientY: null,
      maxClientY: null,
      stepToClose: null,
      activeItem: null,
      isDropdownMode: false
    },

    dropdownStyle: null,
    idealHeight: null,
    dropdownStepWidth: null
  }),
  provide() {
    const RtInlineDropdown = this.RtInlineDropdown;
    return { RtInlineDropdown };
  },
  mounted() {
    this.stepCheck();
  },
  beforeDestroy() {
    this.unbindResize();
  },
  updated() {
    this.unbindResize();
    this.bindResize();
  },
  methods: {
    stepCheck(step) {
      if (this.RtInlineDropdown.isDropdownMode) {
        this.RtInlineDropdown.isDropdownMode = false;
        this.stepCheck();
      } else {
        let currentStep = step ? step : 0;
        let width = 2000 - 10 * currentStep;
        let nowrap = "";
        if (currentStep === 0) {
          nowrap = "flex-wrap: nowrap;";

          this.$el.setAttribute("style", `${nowrap}`);
        } else {
          this.$el.removeAttribute("style");
        }
        const el = this.$el.querySelector(".rt-inline-dropdown__list");
        if (el) {
          el.setAttribute(
            "style",
            `width: ${width}px!important; height:auto!important;${nowrap}`
          );
          if (currentStep == 0) {
            this.idealHeight = el.clientHeight;
          }
          if (this.idealHeight === el.clientHeight) {
            this.stepCheck(++currentStep);
          } else {
            this.dropdownStepWidth = width + 40;
            el.removeAttribute("style");
            this.bindResize();
          }
        }
      }
    },
    bindResize() {
      window.addEventListener("resize", this.checkWidth, { passive: true });
      this.checkWidth();
    },
    checkWidth() {
      const currentClienWidth = this.$el.clientWidth;

      const isDropdownMode = currentClienWidth <= this.dropdownStepWidth;
      if (this.RtInlineDropdown.isDropdownMode != isDropdownMode) {
        this.RtInlineDropdown.isDropdownMode = isDropdownMode;
      }
      if (this.resizeSteps && this.resizeSteps.length > 0) {
        const windowWidth = window.innerWidth;

        let enumIndex = this.resizeSteps.findIndex(a => {
          return windowWidth < parseInt(a);
        });
        if (enumIndex < 0) {
          enumIndex = this.resizeSteps.length;
        }
        if (this.resizeTypeEnum !== enumIndex) {
          this.resizeTypeEnum = enumIndex;
          this.stepCheck();
        }
      }
    },
    unbindResize() {
      window.removeEventListener("resize", this.checkWidth);
    }
  },
  render() {
    return (
      <div class="rt-inline-dropdown">
        {this.RtInlineDropdown.isDropdownMode ? (
          <rt-select
            text={this.RtInlineDropdown.activeItem}
            dropdown-min-width={this.dropdownMinWidth}
            reset-wrapper-width={true}
          >
            {this.$slots.default}
          </rt-select>
        ) : (
          <div class="rt-inline-dropdown__list">{this.$slots.default}</div>
        )}
      </div>
    );
  }
};
</script>
