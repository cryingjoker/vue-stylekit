<template>
    <div class="select text-field" :class="{'select--error':hasError, 'select--is-open' : isOpen}">
        <label class="floating-placeholder floating-placeholder--go-top">{{label}}</label>
        <div class="select-value" @click="toggleOpen">
            <p class="select-input">{{localValue}}</p>
            <div class="select-arrow">
                <svg class="select-arrow__icon" width="10" height="5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0l5 5 5-5z" fill-rule="evenodd"/>
                </svg>
            </div>
        </div>

        <div class="text-field__line"></div>
        <div class="select-list">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            options: {},
            hasError: Boolean,
            label: String,
            value: String
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
        name: "rt-select",
        methods: {
            setValue(value) {
                this.localValue = value;
                this.RtSelect.selectedValue = value;
                this.emitSelected(this.localValue);
                this.isOpen = false;
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
            closeByEvent(e) {
                if (e.keyCode && e.keyCode === 27) {
                    this.isOpen = false;
                    this.removeBindEvents()
                } else {
                    if (!e.target.closest(".select--is-open")) {
                        this.isOpen = false;
                        this.removeBindEvents()
                    }
                }
            },
            removeBindEvents() {
                document.removeEventListener("click", this.closeByEvent);
                document.removeEventListener("keydown", this.closeByEvent);
            },
            bindEvents() {
                document.addEventListener("click", this.closeByEvent);
                document.addEventListener("keydown", this.closeByEvent);
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
            this.setValue(this.value);
        }
    };
</script>
