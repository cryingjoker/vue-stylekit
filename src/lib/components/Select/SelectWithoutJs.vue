<template>
  <div :class="selectClasses" class="select text-field">
    <label>
      <p class="floating-placeholder floating-placeholder--go-top">
        {{ label }}
      </p>

      <div class="select-value">
        <select :disabled="disabled" class="select-list-native" :id="fieldId">
          <slot />
        </select>
        <div class="select-arrow">
          <svg
            class="select-arrow__icon"
            width="13"
            height="7"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.705 1.704l5.999 6 6-6L11.295.295h-.002l-4.59 4.58L2.115.294h-.002z"
              fill="#575D68"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div class="text-field__line" />
      <p v-if="!!hasError" class="text-field__error-message">
        {{ errorMessage }}
      </p>
    </label>
  </div>
</template>
<script>
export default {
  name: "RtSelectWithoutJs",
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
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
    fieldId: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      localValue: this.value ? this.value : "",
      RtSelect: {
        setValue: this.setValue,
        selectedValue: this.value
      },
      isOpen: false,
      selected: {}
    };
  },
  computed: {
    selectClasses() {
      return {
        "select--error text-field--error": this.hasError,
        "select--is-open": this.isOpen,
        "select--disabled": Boolean(this.disabled)
      };
    }
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
    this.setValue(this.text);
  },
  methods: {
    setValue(value) {
      this.localValue = value;
      this.RtSelect.selectedValue = value;
      this.emitSelected(this.localValue);
      this.isOpen = false;
      this.removeBindEvents();
    },
    toggleOpen() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.scrollToSelected();
        setTimeout(() => {
          this.bindEvents();
        });
      } else {
        this.removeBindEvents();
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
      document.removeEventListener("click", this.bindMouseEvents, true);
      document.removeEventListener("keydown", this.bindKeyboardEvents, true);
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
  },
  provide() {
    const RtSelect = this.RtSelect;
    return { RtSelect };
  }
};
</script>
