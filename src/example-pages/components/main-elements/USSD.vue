<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          USSD
        </h1>
      </div>
      <div class="app-body">

        <div class="app-row row">
          <div class="rt-col">
            <rt-ussd phone="*12*21#">Интернет!!</rt-ussd>
          </div>
          <div class="rt-col rt-space-top">
            <rt-ussd>*102*101#</rt-ussd>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // const componentsList = {};
  import componentsList from "../../componentsList";
  export default {
    name: "AppSwitch",
    components: componentsList,
    mounted() {},
    created() {},
    methods: {}
  };
</script>
