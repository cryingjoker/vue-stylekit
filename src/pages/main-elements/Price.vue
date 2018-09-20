<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-4 rt-col-md-3"><rt-price :value="750.231" :old-value="123.2" :currency="'$'" /></div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top"><rt-price :value="750.231" :old-value="123.2" /></div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top"><rt-price :value="750.231" /></div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3"><rt-price :value="69" :is-option="true" :currency="'€'" /></div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top"><rt-price :value="750.231" :time-interval="'час.'" /></div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3"><rt-price :value="1231223169" :is-option="true" :currency="'€'" /></div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3"><rt-price :value="1231223169" :only-price="true" :currency="'€'" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Price } from '@/main-elements/Price/index';

const componentsList = {};
componentsList[Price.name] = Price;
export default {
  name: 'AppTypography',
  components: componentsList,
  mounted() {},
  created() {},
  methods: {},
};
</script>
