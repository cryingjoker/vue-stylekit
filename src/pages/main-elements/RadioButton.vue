<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">RadioButton</h1>
      </div>
      <div class="app-body">
        <div class="app-row">
          <p class="rt-font-h3">radiobutton</p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <rt-radio-button name="type">Огонь</rt-radio-button>
            <div class="rt-space-vertical">
              <rt-radio-button name="type">Вода</rt-radio-button>
            </div>
            <rt-radio-button name="type">Медные трубы</rt-radio-button>
          </div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">disabled radiobutton</p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <rt-radio-button name="type" :is-disabled="true">Огонь</rt-radio-button>
            <rt-radio-button name="type" :is-disabled="true">Вода</rt-radio-button>
            <rt-radio-button name="type" :is-disabled="true">Медные трубы</rt-radio-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { RadioButton } from '@/components/main-elements/RadioButton/index';

const componentsList = {};
componentsList[RadioButton.name] = RadioButton;
export default {
  name: 'AppRadioButton',
  components: componentsList,
  mounted() {},
  created() {},
  methods: {},
};
</script>
