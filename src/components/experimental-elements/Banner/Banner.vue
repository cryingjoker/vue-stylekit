<template>
    <div class="rt-banner" :class="banerClass">
        <div class="rt-container">
            <div class="row">
                <div class="rt-col-1"></div>
                <div class="rt-col-5">
                    <slot>
                    </slot>

                </div>
            </div>
        </div>
        <div class="circle-switcher">
            <div class="circle-switcher-container">
                <div class="circle-switcher__item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="circle-switcher__icon" viewBox="0 0 9 9">
                        <circle r="4" cx="4.5" cy="4.5" fill="transparent"/>
                    </svg>
                </div>
                <div class="circle-switcher__item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="circle-switcher__icon" viewBox="0 0 9 9">
                        <circle r="4" cx="4.5" cy="4.5" fill="transparent"/>
                    </svg>
                </div>
                <div class="circle-switcher__item">
                    <svg xmlns="http://www.w3.org/2000/svg" class="circle-switcher__icon" viewBox="0 0 9 9">
                        <circle r="4" cx="4.5" cy="4.5" fill="transparent"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="rt-banner-image" :style="imageStyle">
            <svg class="rt-banner-triangle" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v500h2L185 0z" fill-rule="evenodd"/>
            </svg>
            <svg class="rt-banner-right-triangle" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0v500h2L185 0z" fill-rule="evenodd"/>
            </svg>
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

    componentsList[Card.name] = Card;
    componentsList[Input.name] = Input;
    componentsList[Button.name] = Button;
    componentsList[Price.name] = Price;



    export default {
        props: {
            backgroundColor: String,
            backgroundImage: String,
            isWhiteColor: Boolean,
            backgroundImages: Array
        },
        components: componentsList,
        name: "rt-banner",
        data() {
            return {
                RtBanners: {
                    items: [],
                    activeIndex: 0
                },
                isOpenListOnTop: false
            };
        },

        provide() {
            const RtBanners = this.RtBanners || {};
            return {RtBanners};
        },
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
            if(this.RtBanners.items.length > 0 && this.RtBanners.items[0].id){
                console.info('this.RtBanners.items',this.RtBanners.items[0].id);
            }
        }

    }
</script>
