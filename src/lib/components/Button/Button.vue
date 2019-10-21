<script type="text/jsx">
  import { default as Spinner } from "../Spinner/Spinner.vue";
  import { default as RippleComponent } from "../Ripple/Ripple.vue";

  const componentsList = {};
  componentsList[RippleComponent.name] = RippleComponent;
  componentsList[Spinner.name] = Spinner;

  export default {
    name: "RtButton",
    components: componentsList,
    props: {
      ga: {
        type: Object,
        default: null
      },
      gaB2b: {
        type: Object,
        default: null
      },
      isBlock: {
        type: Boolean,
        default: false
      },
      isDisabled: {
        type: Boolean,
        default: false
      },
      isFetched: {
        type: Boolean,
        default: false
      },
      hasIcon: {
        type: Boolean,
        default: false
      },
      checkboxBehavior: {
        type: Boolean,
        default: false
      },
      radioGroupName: {
        type: String,
        default: "radio-group"
      },
      buttonClassList: {
        type: String,
        default: ""
      },
      radioValue: {
        type: String,
        default: ""
      }
    },
    data: () => ({
      hide: false
    }),
    computed: {
      buttonClass() {
        let className = "rt-button rt-button-with-ripple";
        if (this.isBlock) {
          className += " rt-button--is-block";
        }
        if (this.isFetched) {
          className += " rt-button--is-fitched";
        }
        className += " " + this.buttonClassList + "";
        return className;
      }
    },

    mounted: function() {
      this.hide = this.$el.disabled || this.isDisabled;

    },
    methods: {
      triggerClick($event) {
        if (this.checkboxBehavior) {
          if (!this.$el.querySelector(".fake-radiobutton-for-button").checked) {
            this.$el.querySelector(".fake-radiobutton-for-button").click();
          } else {
            this.$el.querySelector(".fake-radiobutton-for-button").checked = false;
          }
        } else {
          this.$emit("click", $event);
        }
      },
      activateEventToLink(typeEvent, ga) {

        if (this.refs["button"].parentElement.tagName.toLocaleLowerCase() === "a") {
          this.refs["button"].parentElement.addEventListener("click", function(e) {
            if (!this.getAttribute("data-ga-pushed")) {
              e.preventDefault();
              if (!window.dataLayer) {
                window.dataLayer = [];
              }
              window.dataLayer.push({
                event: typeEvent,
                button: this.refs["button"].innerText,
              });
            }
          }, false);
        } else {
          this.refs["button"].addEventListener("click", function(e) {
            if (!this.getAttribute("data-ga-pushed")) {
              e.preventDefault();
              if (!window.dataLayer) {
                window.dataLayer = [];
              }
              window.dataLayer.push({
                event: typeEvent,
                button: this.refs["button"].innerText,
              });

            }
          }, false);
        }
      }
    },
    render: function(h) {
      const buttonTextContent = (() => {
        return <span>{this.$slots["button-text"]}</span>;
      })();
      const icon = (() => {
        return this.$slots.icon;
      })();
      const spinner = (() => {
        if (this.isFetched) {
          return <rt-spinner fill={true} isAbsolute={true}/>;
        } else {
          return null;
        }
      })();
      if (this.checkboxBehavior) {
        return (
          <label>
            <input type="radio" class="fake-radiobutton-for-button" name={this.radioGroupName} value={this.radioValue}/>
            <button class={this.buttonClass} onClick={this.triggerClick}>
              <rt-ripple notRender={this.hide} twiceRender={true}>
                {spinner}
                {this.$slots.default}
              </rt-ripple>
            </button>
          </label>
        );
      } else {
        if (this.hasIcon) {
          return (
            <button ref="button" class={this.buttonClass} onClick={this.triggerClick} style="position: relative;">
              {icon}
              <rt-ripple notRender={this.hide} twiceRender={true}>
                {spinner}
                {buttonTextContent}
              </rt-ripple>
            </button>
          );
        } else {
          return (
            <button ref="button" onClick={this.triggerClick} class={this.buttonClass}>
              <rt-ripple notRender={this.hide} twiceRender={true} waitParentClicked={true}>
                {spinner}
                {this.$slots.default}
              </rt-ripple>
            </button>
          );
        }
      }
    }
  };
</script>
