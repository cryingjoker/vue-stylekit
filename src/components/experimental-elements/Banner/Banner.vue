<template>
    <div class="rt-banner" :class="banerClass">
        <div class="rt-container">
            <div class="row">
                <div class="rt-col-1 mb-d-none"></div>
                <div class="rt-col-5 rt-col-mb-3">
                    <slot>
                    </slot>
                </div>
            </div>
        </div>
        <div class="circle-switcher">
            <div class="circle-switcher-container">
                <rt-banner-paginator-item v-for="(option, index) in RtBanners.items" :index="index"  :key="'paginator-index'+Math.random().toString(5).slice(4)" ></rt-banner-paginator-item>

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
    import BannerPaginatorItem from "./BannerPaginatorItem.vue"

    const componentsList = {};


    componentsList[BannerPaginatorItem.name] = BannerPaginatorItem;



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
                    activeIndex: 0,
                    setActiveItem: this.setActiveItem,
                    setStartTimer: this.setStartTimer
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
                const activeIndex = this.RtBanners.activeIndex;
                if(this.RtBanners.items[activeIndex]) {
                    if (this.RtBanners.items[activeIndex].backgroundColor) {
                        classArray['rt-banner--background-' + this.RtBanners.items[activeIndex].backgroundColor] = true
                    }
                    if (this.RtBanners.items[activeIndex].isWhiteColor) {
                        classArray['rt-banner--color-white'] = true
                    }
                }
                return classArray

            },
            imageStyle() {
                const styles = {};
                const activeIndex = this.RtBanners.activeIndex;
                if (this.RtBanners.items[activeIndex]) {
                    styles.backgroundImage = 'url(' + this.RtBanners.items[activeIndex].backgroundImage+ ')'
                }
                return styles
            }

        },
        methods: {
            setActiveItem(index){
                this.RtBanners.activeIndex = index;
                this.setStartTimer();
            },
            setStartTimer(){
                if(this.RtBanners.timer){
                    clearTimeout(this.RtBanners.timer);
                }
                this.RtBanners.timer = setTimeout(()=>{
                    const index = (this.RtBanners.activeIndex + 1) % this.RtBanners.items.length;
                    this.RtBanners.activeIndex = index;
                    this.setStartTimer();
                },5000);
            }
        },
        mounted: function () {

            if(this.RtBanners.items.length > 0 && this.RtBanners.items[0].id){
                setTimeout(()=>{
                    this.setStartTimer();
                },100)
            }
        }


    }
</script>
