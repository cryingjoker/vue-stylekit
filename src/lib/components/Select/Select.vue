<template>
  <div :class="selectClasses" class="select text-field">
    <button :disabled="disabled" class="select__inner" @click="toggleOpen">
      <label class="floating-placeholder floating-placeholder--go-top">{{
        label
      }}</label>
      <div class="select-value">
        <p class="select-input">{{ localValue }}</p>
        <div class="select-arrow">
          <svg
            class="select-arrow__icon"
            width="10"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0l5 5 5-5z" fill-rule="evenodd" />
          </svg>
        </div>
      </div>
    </button>
    <div class="text-field__line" />
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
      isOpenListOnTop: false
    };
  },
  computed: {
    selectClasses() {
      return {
        "select--error text-field--error": this.hasError,
        "select--is-open": this.isOpen,
        "select--is-reset-width": this.resetWrapperWidth,
        "select--disabled": Boolean(this.disabled),
        "select--invert-open-list": this.isOpenListOnTop
      };
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
    },
    emitSelected(value) {
      this.$emit("rt-selected", value);
    },
    bindMouseEvents(e) {
      if (!e.target.closest(".select--is-open")) {
        this.isOpen = false;
        this.removeBindEvents();
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
    }
  }
};
</script>
