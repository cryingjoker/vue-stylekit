<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code text='<rt-price :value="750.231" :old-value="123.2" currency="$" />'></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text='<rt-price :value="750.231" :old-value="123.2" />'></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text='<rt-price :value="750.231" />'></pre-code>
          </div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code text='<rt-price :value="69" :is-option="true" currency="€" />'></pre-code>
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text='<rt-price :value="750.231" :time-interval="час." />'></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code text='<rt-price :value="1231223169" :is-option="true" currency="€" />'></pre-code>
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code text='<rt-price :value="1231223169" :only-price="true" currency="€" />'></pre-code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Price } from '@/main-elements/Price/index';
import { PreComponent } from "@/test-components";

const componentsList = {};
componentsList[Price.name] = Price;
componentsList[PreComponent.name] = PreComponent;
export default {
  name: 'AppTypography',
  components: componentsList,
  mounted() {},
  created() {},
  methods: {},
};
</script>
