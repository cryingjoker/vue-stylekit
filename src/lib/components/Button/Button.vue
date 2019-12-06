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
      },
      showAsTag:{
        type:Boolean,
        default: false
      },
      color:{
        type: String,
        default: ''
      },
      popupButton: {
        type: Boolean,
        default: false
      },
      targetPopup: {
        type: String,
        default: ''
      },
      smallerPadding: {
        type: Boolean,
        default: false
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
        if(this.showAsTag){
          className += " rt-button--as-tag";
        }
        if(this.color && this.color.length > 0){
          className += ' rt-button-'+this.color
        }
        if(this.smallerPadding) {
          className += ' rtb-button'
        }

        className += " " + this.buttonClassList + "";

        return className;
      }
    },

    mounted: function() {
      this.hide = this.$el.disabled || this.isDisabled;
      if (this.ga) {
        this.activateEventToLink('b2c', this.ga);
      }
      if (this.gaB2b) {
        this.activateEventToLink('b2b', this.gaB2b);
      }
    },
    methods: {
      triggerClick($event) {
        if (this.checkboxBehavior) {
          if (!this.$el.querySelector(".fake-radiobutton-for-button").checked) {
            this.$el.querySelector(".fake-radiobutton-for-button").click();
          } else {
            this.$el.querySelector(".fake-radiobutton-for-button").checked = false;
          }
        } else if(this.popupButton && this.targetPopup) {
          let target = [this.$el, this.targetPopup];
          document.querySelector('body').dispatchEvent(new CustomEvent("open-popup", { 'detail': target }));
          this.$emit("click", $event);
        } else {
          this.$emit("click", $event);
        }
      },
      activateEventToLink(typeEvent, ga) {

        if (this.$refs && this.$refs["button"]) {
          const button = this.$refs["button"];
          if (button.parentElement.tagName.toLocaleLowerCase() === "a") {
            button.parentElement.addEventListener("click", (e) => {
              if (!this.getAttribute("data-ga-pushed")) {
                e.preventDefault();
                if (!window.dataLayer) {
                  window.dataLayer = [];
                }
                window.dataLayer.push({
                  event: typeEvent,
                  button: button.innerText
                });
              }
            }, false);
          } else {
            button.addEventListener("click", (e) => {
              if (!this.getAttribute("data-ga-pushed")) {
                e.preventDefault();
                if (!window.dataLayer) {
                  window.dataLayer = [];
                }
                window.dataLayer.push({
                  event: typeEvent,
                  button: button.innerText
                });

              }
            }, false);

          }
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
          <label ref="button">
            <input type="radio" class="fake-radiobutton-for-button" name={this.radioGroupName}
                   value={this.radioValue}/>
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
