<script type="text/jsx">
  export default {
    inject: ["RtSelect"],
    name: "RtSelectOption",
    props: {
      value: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        localValue: this.text ? this.text : "",
        isSelected: false
      };
    },
    computed: {
      selectedValue() {
        if (this.RtSelect) {
          return this.RtSelect.selectedValue;
        } else {
          return "";
        }
      },
      optionClasses() {
        let optionClasses = "select-option";
        if(this.isSelected && !this.$parent._props.multi) {
          optionClasses += " select-option--select"
        }
        if(this.$parent._props.multi) {
          optionClasses += " select-option--multi"
        }
        return optionClasses;
      }
    },

    watch: {
      selectedValue() {
        this.setIsSelected();
      }
    },
    mounted() {
      this.setValue();
      this.setIsSelected();
    },
    methods: {
      setIsSelected() {
        this.isSelected = this.selectedValue === this.text;
      },
      setValue() {
        this.text = this.getTextContent();
      },
      setSelection(e) {
        this.RtSelect.setValue({ text: this.text, value: this.value });
        if(this.$el.querySelector('.select-option__checkbox input[type="checkbox"]')) {
          this.$el.querySelector('.select-option__checkbox input[type="checkbox"]').click();
        }
        e.preventDefault();
      },
      getTextContent() {
        if (this.$el) {
          return this.$el.textContent.trim();
        }
        const slot = this.$slots.default;
        return slot ? slot[0].text.trim() : "";
      }
    },
    render(h) {
      const hiddenCheckbox = (() => {
        if(this.$parent._props.multi) {
          return <div class="select-option__checkbox" ref="multiSelectCheckbox">
            <input type="checkbox" class="select-option__hidden-checkbox"/>
            <div class="select-option__checked-sign">
              <svg width="12" height="10" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 5l3.448 3L11 2" stroke="#70F" stroke-width="3" fill="none" fill-rule="evenodd"/>
              </svg>
            </div>
          </div>
        }
      })();

      return <div class={this.optionClasses}>
        {hiddenCheckbox}
        <button class="select-option__inner" onClick={this.setSelection}>
          {this.$slots.default}
        </button>
      </div>
    }
  };
</script>
