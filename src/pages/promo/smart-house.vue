<template>

    <div>
        <div class="color-block--dark-blue"></div>
    </div>
</template>


<script>
    import {
        Card,
    } from "@/components/complex-elements/Card";
    import {Button} from "@/components/main-elements"

    const componentsList = {};

    componentsList[Card.name] = Card;
    componentsList[Button.name] = Button;


    export default {
        name: 'app-RadioButton',
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }

    }
</script>

