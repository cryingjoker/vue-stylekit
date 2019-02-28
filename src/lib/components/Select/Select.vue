<template>
  <div :class="selectClasses" class="select text-field">
    <button :disabled="disabled" class="select__inner" @click="toggleOpen">
      <label class="floating-placeholder" :class="placeholderClasses">{{
        label
      }}</label>
      <div class="select-value">
        <p class="select-input">{{ localValue }}</p>
        <div class="select-arrow">
          <svg
            class="select-arrow__icon"
            width="13"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.705 1.704l5.999 6 6-6L11.295.295h-.002l-4.59 4.58L2.115.294h-.002z" fill="#575D68" fill-rule="evenodd"/>
          </svg>
        </div>
      </div>
    </button>
    <div v-bind:class="{'text-field__border': outlined, 'text-field__line': !outlined, 'text-field__border--error': outlined && hasError}"/>
    <!--<div v-else class="text-field__line" />-->
    <div v-if="!disabled" :style="selectListStyle" class="select-list">
      <slot />
    </div>
    <p v-if="!!hasError" class="text-field__error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
export default {
  name: "RtSelect",
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: null
    },
    text: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: null
    },
    dropdownMinWidth: {
      type: [String, Number],
      default: null
    },
    resetWrapperWidth: {
      type: Boolean,
      default: false
    },
    isB2bSelect: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localValue: this.text ? this.value : "",
      RtSelect: {
        setValue: this.setValue,
        selectedValue: this.text
      },
      isOpen: false,
      selected: {},
      isOpenListOnTop: false,
      hasSelected: this.text ? true : false
    };
  },
  computed: {
    selectClasses() {
      return {
        "select--error text-field--error": this.hasError,
        "select--is-open": this.isOpen,
        "select--is-reset-width": this.resetWrapperWidth,
        "select--disabled": Boolean(this.disabled),
        "select--invert-open-list": this.isOpenListOnTop,
        "rtb-select": this.isB2bSelect,
        "rtb-select--outlined": this.outlined
      };
    },
    placeholderClasses() {
      return {
        "floating-placeholder--go-top": this.hasSelected
      }
    },
    selectListStyle() {
      if (this.dropdownMinWidth) {
        let width = this.dropdownMinWidth;
        if (typeof this.dropdownMinWidth === "number") {
          width = width + "px";
        }
        return {
          "min-width": width
        };
      }
    }
  },
  provide() {
    const RtSelect = this.RtSelect;
    return { RtSelect };
  },
  watch: {
    localValue(val) {
      this.$emit("input", val);
    }
  },
  beforeDestroy() {
    this.removeBindEvents();
  },
  mounted() {
    this.setValue({ text: this.text, value: this.value });
  },
  methods: {
    setValue(data) {
      const { value, text } = data;
      this.localValue = text;
      this.RtSelect.selectedValue = text;
      this.emitSelected(this.localValue);
      this.isOpen = false;
      this.removeBindEvents();
      this.$emit("select", data);
    },
    toggleOpen(e) {
      if (!this.disabled) {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
          this.scrollToSelected();
          if (window.innerHeight - e.clientY < 200 && e.clientY > 200) {
            this.isOpenListOnTop = true;
          }
          setTimeout(() => {
            this.bindEvents();
          });
        } else {
          this.removeBindEvents();
        }
      }
      this.liftPlaceholder();
    },
    emitSelected(value) {
      this.$emit("rt-selected", value);
    },
    bindMouseEvents(e) {
      if (!e.target.closest(".select--is-open")) {
        this.isOpen = false;
        this.removeBindEvents();
        this.liftPlaceholder();
      }
    },
    bindKeyboardEvents(e) {
      if (e.keyCode && e.keyCode === 27) {
        this.isOpen = false;
        this.removeBindEvents();
      } else {
        if (e.keyCode === 38 || e.keyCode === 40) {
          e.preventDefault();
          e.stopPropagation();
          let selectedItem = this.$el.querySelector(".select-option--select");
          const focusedItem = this.$el.querySelector(
            ".select-option__inner:focus"
          );
          const optionItems = this.$el.querySelectorAll(".select-option");
          const optionItemsLength = optionItems.length;
          if (focusedItem) {
            selectedItem = focusedItem.parentNode;
          }
          let selectedIndex = [...selectedItem.parentNode.children].indexOf(
            selectedItem
          );

          if (e.keyCode === 38) {
            selectedIndex =
              (selectedIndex - 1 + optionItemsLength) % optionItemsLength;
          } else {
            selectedIndex =
              (selectedIndex + 1 + optionItemsLength) % optionItemsLength;
          }
          optionItems[selectedIndex]
            .querySelector(".select-option__inner")
            .focus();
        }
      }
    },
    removeBindEvents() {
      document.removeEventListener("click", this.bindMouseEvents);
      document.removeEventListener("keydown", this.bindKeyboardEvents);
    },
    bindEvents() {
      document.addEventListener("click", this.bindMouseEvents, {
        passive: false
      });
      document.addEventListener("keydown", this.bindKeyboardEvents, {
        passive: false
      });
    },
    scrollToSelected() {
      const selectElement = this.$el.querySelector(".select-option--select");
      if (selectElement) {
        const scrollPosition =
          selectElement.offsetTop - selectElement.parentNode.offsetTop;
        selectElement.parentNode.scrollTop = scrollPosition;
      }
    },
    liftPlaceholder() {
      if(!this.$el.querySelector(".select-input").innerText) {
        if(!this.$el.querySelector(".floating-placeholder").classList.contains('floating-placeholder--go-top')) {
          this.$el.querySelector(".floating-placeholder").classList.add('floating-placeholder--go-top')
        } else {
          this.$el.querySelector(".floating-placeholder").classList.remove('floating-placeholder--go-top')
        }
      }
    }
  }
};
</script>
