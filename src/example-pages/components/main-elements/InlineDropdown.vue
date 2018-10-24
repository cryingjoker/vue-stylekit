<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">

      <div class="app-title">
        <h1 class="rt-font-hero">InlineDrowdown</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <div class="rt-col">
            <rt-inline-dropdown :resizeSteps="[868]" :dropdown-min-width="300">
              <rt-inline-dropdown-item :is-active="true">Price</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>RadioButton</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Ripple</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>RowList</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>ScrollTabs</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Select</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Spinner</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Switch</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Table</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Textarea</rt-inline-dropdown-item>
            </rt-inline-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: "AppInlineDropdown",
    components: {},
    mounted() {
    }
  };
</script>

