<template>
    <div>
    <div class="rt-container">
        <div class="grid-center"></div>
    <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
            <div class="row">
                <h1 class="rt-font-hero rt-col">Banners</h1>
            </div>
        </div>
    </div>
    </div>
        <rt-banner>
            <!--<rt-banner-item></rt-banner-item>-->
            <!--<rt-banner-item></rt-banner-item>-->
            <rt-banner-item background-image="/example-images/banerBackground1.png"
                            :is-white-color="true"
                            background-color="dark-state">
                <p class="rt-font-banner-label">Виртуальная <br>  телефония</p>
                <p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможность пользоваться из любой точки мира 
                    <br> и ни одного пропущенного звонка клиента</p>
                <rt-button class="rt-button-orange">Подробнее</rt-button>
            </rt-banner-item>
        <rt-banner-item
                background-color="yellow"
                background-image="/example-images/banerBackground2.png">
            <p class="rt-font-banner-label">Виртуальная <br>  телефония</p>
            <p class="rt-space-top rt-space-bottom15">Быстрое подключение без трат на оборудование,<br> возможность пользоваться из любой точки мира 
                <br> и ни одного пропущенного звонка клиента</p>
            <rt-button class="rt-button-orange">Подробнее</rt-button>
        </rt-banner-item>
        </rt-banner>


    </div>
</template>

<script>
    import {
        Card,
    } from "@/components/complex-elements/Card";
    import {Input, Button, Price} from "@/components/main-elements"
    import {Banner, BannerItem} from "@/components/experimental-elements"

    const componentsList = {};

    componentsList[Card.name] = Card;
    componentsList[Input.name] = Input;
    componentsList[Button.name] = Button;
    componentsList[Price.name] = Price;
    componentsList[Banner.name] = Banner;
    componentsList[BannerItem.name] = BannerItem;


    export default {
        name: "app-banners",
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    };
</script>

<style scoped lang="scss">
</style>
