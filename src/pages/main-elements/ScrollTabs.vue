<template>
    <div class="rt-container">
        <div class="app-content  rt-col-12 rt-col-md-3">
            <div class="color-block--dark-blue color-white rt-space-horizontal sticked app-sticked">
                <rt-scroll-tabs class="rt-contaner rt-tab-header" active-tabs-classname="rt-tab-header__item--active" tabs-classname="rt-tab-header__item">
                    <a class="rt-tab-header__item" href="#one">one</a>
                    <a class="rt-tab-header__item" href="#two">two</a>
                    <a class="rt-tab-header__item" href="#three">three</a>
                    <a class="rt-tab-header__item" href="#four">free</a>
                </rt-scroll-tabs>
            </div>
            <div id="one" class="color-block--orange" style="height: 500px"></div>
            <div id="two" class="color-block--pink" style="height: 500px; margin-top: 800px"></div>
            <div id="three" class="color-block--red" style="height: 500px"></div>
            <div id="four" class="color-block--purple" style="height: 500px"></div>
        </div>
    </div>
</template>
<script>
    import {ScrollTabs} from '@/components/main-elements/ScrollTabs/index';

    const componentsList = {};
    componentsList[ScrollTabs.name] = ScrollTabs;
    export default {
        name: "app-typography",
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    };
</script>
