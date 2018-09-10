<template>
    <div class="rt-banner-content">
        <div class="rt-banner-content__inner">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    import {
        Card,
    } from "@/components/complex-elements/Card";
    import {Input, Button, Price} from "@/components/main-elements"
    import {Banner} from "@/components/experimental-elements"

    const componentsList = {};



    export default {
        props: {
            backgroundColor: String,
            backgroundImage: String,
            isWhiteColor: Boolean,
        },
        components: componentsList,
        name: "rt-banner-image",
        computed: {
            banerClass() {
                const classArray = {};

                if (this.backgroundColor) {
                    classArray['rt-banner--background-' + this.backgroundColor] = true
                }
                if (this.isWhiteColor) {
                    classArray['rt-banner--color-white'] = true
                }
                return classArray

            },
            imageStyle() {
                const styles = {};
                if (this.backgroundImage) {
                    styles.backgroundImage = 'url(' + this.backgroundImage + ')'
                }
                return styles
            }

        },

        mounted: function () {
            console.info('this',this);
        }

    }
</script>
