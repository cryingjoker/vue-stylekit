<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
      <div class="app-body">
        <div class="is-b2c">
          <div class="row">
            <div class="rt-col-4 rt-col-md-3">
              <pre-code
                text="<rt-price :value='750.231' :old-value='123.2' currency='$' />"
              />
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
              <pre-code
                text="<rt-price :value='750.231' :old-value='123.2' />"
              />
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
              <pre-code text="<rt-price :value='750.231' />" />
            </div>
          </div>

          <div class="row rt-space-top">
            <div class="rt-col-4 rt-col-md-3">
              <pre-code
                text="<rt-price :value='69' option-label='До' :is-option='true' currency='€' />"
              />
            </div>
            <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
              <pre-code
                text="<rt-price :value='750.231' time-interval='час.' />"
              />
            </div>
          </div>
          <div class="row rt-space-top">
            <div class="rt-col-16 rt-col-md-3">
              <pre-code
                text="<rt-price :value='1231223169' :is-option='true' currency='€' />"
              />
            </div>
          </div>
          <div class="row rt-space-top">
            <div class="rt-col-8 rt-col-md-3">
              <pre-code
                text="<rt-price :value='1231223169' :only-price='true' currency='€' />"
              />
            </div>
            <div class="rt-col-8 rt-col-md-3">
              <pre-code
                text="<rt-price :value='1231223169' :old-value='666' :only-price='true' currency='€' />"
              />
            </div>
          </div>
          <div class="row rt-space-top">
            <div class="rt-col-16 rt-col-md-3">
              <pre-code
                text="<div><rt-price :for-game='true' class='color-orange' :value='800' time-interval='сек' currency='Мбит' /><rt-price :bold-option='true' class='color-white' :for-game='true' :value='800' time-interval='сек' currency='Мбит' /></div>"
              />
            </div>
          </div>
        </div>
        <div class="is-b2b">
          <div class="row rt-space-top">
            <div class="rt-col-4 rt-col-md-3">
              <pre-code
                text="<rt-price old-price-color='red' :old-value='2500' :value='400' :is-option='false' currency='₽' :b2bPrice='true' time-interval='в месяц' class='color-main09'/>"
              />
            </div>
          </div>
          <div class="row rt-space-top">
            <div class="rt-col-4 rt-col-md-3">
              <pre-code
                text="<rt-price :value='500' currency='₽' :b2b-price='true' time-interval='' class='color-main09' :is-option='true'/>"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rt-space-top25">
      <documentation-builder :json="documentation" type="components" />
    </div>
  </div>
</template>

<script>
  import documentation from "../../../lib/components/Price/docs/index.json";

  const componentsList = {};
  export default {
    name: "AppPrice",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {},
    methods: {}
  };
</script>
