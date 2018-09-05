<template>
    <div class="app-content  rt-col-10 rt-col-md-3">
        <div class="app-title">
            <h1 class="rt-font-hero row">Spinner</h1>
        </div>
        <div class="app-body">

            <div class="app-row row">
                <rt-spinner></rt-spinner>
                <rt-spinner :isSmall="true"></rt-spinner>
                <rt-spinner :scale="true"></rt-spinner>
            </div>
            <div class="app-row row">
                <rt-button class="rt-button-white">
                    <rt-spinner :fill="true" :isAbsolute="true"></rt-spinner>Подождите
                </rt-button>

            </div>

        </div>
    </div>
</template>


<script>
import { Spinner } from "@/components/main-elements/Spinner/index"
import {ButtonComponent} from "@/components/main-elements/Button/index"
const componentsList = {};
componentsList[Spinner.name] = Spinner;
componentsList[ButtonComponent.name] = ButtonComponent;

export default {
  name: "app-input",
  components: componentsList,

  methods: {},
  mounted() {},
  created() {}
};
</script>
