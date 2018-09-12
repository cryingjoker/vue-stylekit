<template>
    <div class="rt-banner-content" :class="banerClass">
        <div class="rt-banner-content__inner">
            <slot></slot>
        </div>
    </div>


</template>

<script>

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
                id: this._uid
            }
        },
        components: componentsList,
        name: "rt-banner-item",
        computed: {
            banerClass() {
                const classArray = {};
                if (this.RtBanners.activeIndex === this.index) {
                    classArray['rt-banner-content--active'] = true
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
