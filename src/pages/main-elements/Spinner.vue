<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">Spinner</h1>
      </div>
      <div class="app-body">

        <div class="app-row row">
          <rt-spinner />
          <rt-spinner :is-small="true" />
          <rt-spinner :scale="true" />
        </div>
        <div class="app-row row">
          <rt-button class="rt-button-white">
            <rt-spinner :fill="true" :is-absolute="true" />Подождите
          </rt-button>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
import { Spinner } from '@/main-elements/Spinner/index';
import { ButtonComponent } from '@/main-elements/Button/index';
const componentsList = {};
componentsList[Spinner.name] = Spinner;
componentsList[ButtonComponent.name] = ButtonComponent;

export default {
  name: 'AppInput',
  components: componentsList,
  mounted() {},
  created() {},

  methods: {},
};
</script>
