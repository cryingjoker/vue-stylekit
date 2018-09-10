<template>
    <div class="rt-banner-content" :class="banerClass">
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
        inject: {
            RtBanners : {},
        },
        data(){
            return {
                id: Math.random().toString(36).slice(4)
            }
        },
        components: componentsList,
        name: "rt-banner-item",
        computed: {
            banerClass() {
                const classArray = {};
                console.info('this.RtBanners.activeId === this.id',this.RtBanners.activeIndex === this.id,this.RtBanners.activeIndex ,this.index);
                if (this.RtBanners.activeIndex === this.index) {
                    classArray['rt-banner-content-active'] = true
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

        beforeMount: function () {

            this.index = this.RtBanners.items.length
            this.RtBanners.items.push({
                backgroundColor: this.backgroundColor,
                backgroundImage: this.backgroundImage,
                isWhiteColor: this.isWhiteColor,
                id:this.id
            })



        }

    }
</script>
