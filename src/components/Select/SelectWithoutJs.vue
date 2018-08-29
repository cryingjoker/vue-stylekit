<template>
    <div class="select text-field" :class="selectClasses">
        <label>
        <p class="floating-placeholder floating-placeholder--go-top">{{label}}</p>

        <div class="select-value">
            <select class="select-list-native" :disabled="disabled">
                <slot></slot>
            </select>
            <div class="select-arrow">
                <svg class="select-arrow__icon" width="10" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0l5 5 5-5z" fill-rule="evenodd"/>
                </svg>
            </div>
        </div>
        <div class="text-field__line"></div>
        </label>

    </div>
</template>
<script>
    export default {
        props: {
            options: {},
            hasError: Boolean,
            label: String,
            value: String,
            text: String,
            disabled: Boolean
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
        name: "rt-select-without-js",
        computed: {

            selectClasses() {
                return {
                    'select--error': this.hasError,
                    'select--is-open': this.isOpen,
                    'select--disabled': Boolean(this.disabled)
                }
            }
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
                    this.removeBindEvents()
                }
            },
            bindKeyboardEvents(e) {
                if (e.keyCode && e.keyCode === 27) {
                    this.isOpen = false;
                    this.removeBindEvents()
                }
                else {
                    if (e.keyCode === 38 || e.keyCode === 40) {
                        e.preventDefault();
                        e.stopPropagation();
                        let selectedItem = this.$el.querySelector(".select-option--select");
                        const focusedItem = this.$el.querySelector(".select-option__inner:focus");
                        const optionItems = this.$el.querySelectorAll(".select-option");
                        const optionItemsLength = optionItems.length;
                        if (focusedItem) {
                            selectedItem = focusedItem.parentNode
                        }
                        let selectedIndex = [...selectedItem.parentNode.children].indexOf((selectedItem));

                        if (e.keyCode === 38) {
                            selectedIndex = (selectedIndex - 1 + optionItemsLength) % optionItemsLength;
                        } else {
                            selectedIndex = (selectedIndex + 1 + optionItemsLength) % optionItemsLength;
                        }
                        optionItems[selectedIndex].querySelector('.select-option__inner').focus();

                    }
                }
            },
            removeBindEvents() {
                document.removeEventListener("click", this.bindMouseEvents);
                document.removeEventListener("keydown", this.bindKeyboardEvents);
            },
            bindEvents() {
                document.addEventListener("click", this.bindMouseEvents);
                document.addEventListener("keydown", this.bindKeyboardEvents);
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
        beforeDestroy() {
            this.removeBindEvents();
        },
        provide() {
            const RtSelect = this.RtSelect;
            return {RtSelect};
        },
        watch: {
            localValue(val) {
                this.$emit("input", val);
            }
        },
        mounted() {
            this.setValue(this.text);
        }
    };
</script>
