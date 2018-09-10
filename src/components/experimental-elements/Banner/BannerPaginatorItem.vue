<template>
    <div class="circle-switcher__item" @click="setActiveItem" :class="paginatorItemClass">
        <svg xmlns="http://www.w3.org/2000/svg" class="circle-switcher__icon" :class="paginatorItemIconClass" viewBox="0 0 9 9">
            <circle r="4" cx="4.5" cy="4.5" fill="transparent"/>
        </svg>
    </div>
</template>

<script>


    export default {
        props: {
            index: Number
        },
        inject: {
            RtBanners : {},
        },
        data(){
            return {
                id: Math.random().toString(36).slice(4)
            }
        },
        methods:{
            setActiveItem(){
              this.RtBanners.setActiveItem(this.index);
            }
        },
        name: "rt-banner-paginator-item",
        computed: {
            paginatorItemClass() {
                const classArray = {};
                if (this.RtBanners.activeIndex === this.index) {
                    classArray['rt-banner--run-timer'] = true
                }
                return classArray

            },
            paginatorItemIconClass() {
                const classArray = {};
                if (this.RtBanners.activeIndex === this.index) {
                    classArray['circle-switcher__item--active'] = true
                }
                return classArray

            },

        },


    }
</script>
