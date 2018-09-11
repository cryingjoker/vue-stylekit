<template>
    <label class="switch">
        <input name="test" @change="inputHandler" type="checkbox"  :disabled="isDisabled" class="switch-element">
        <div class="switch-container">
            <div class="switch-container__circle">
                <rt-ripple ref="ripple" :not-render="isDisabled">
                </rt-ripple>
            </div>
            <slot></slot>

        </div>
    </label>
</template>

<script>
    import {RippleComponent} from '../Ripple/index'
    const componentsList = {};
    componentsList[RippleComponent.name] = RippleComponent;


    export default {
        props:['isDisabled','checked'],
        name: "rt-switch",
        components: componentsList,
        methods: {
            setValue() {
                this.$el.querySelector('.switch-element').checked = Boolean(this.checked);
            },
            inputHandler(){
                this.$emit('change',this.$el.querySelector('.switch-element').checked)
                this.showWave()
            },
            showWave(){
                this.$refs.ripple.startRipple(
                    {
                        offsetX:10,
                        offsetY:10
                    }
                );
            }
        },
        mounted: function () {
            this.setValue();
        }
    };
</script>
