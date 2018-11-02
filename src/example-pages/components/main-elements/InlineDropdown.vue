<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">

      <div class="app-title">
        <h1 class="rt-font-hero">InlineDrowdown</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">

          <pre-code
            class="rt-container"
            text="<rt-inline-dropdown :resizeSteps=&quot;[868]&quot; :dropdown-min-width=&quot;300&quot;>
              <rt-inline-dropdown-item>Price</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>RadioButton</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Ripple</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>RowList</rt-inline-dropdown-item>
              <rt-inline-dropdown-item :is-active=&quot;true&quot;>ScrollTabs</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Select</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Spinner</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Switch</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Table</rt-inline-dropdown-item>
              <rt-inline-dropdown-item>Textarea</rt-inline-dropdown-item>
            </rt-inline-dropdown>"
          />
        </div>
        <documentation-builder type="components" :json="documentation" />
      </div>
    </div>
  </div>
</template>


<script>
import documentation from "../../../lib/components/InlineDropdown/docs/index.json";
export default {
  name: "AppInlineDropdown",
  components: {},
  data: () => ({
    documentation: {}
  }),
  mounted() {
    this.documentation = documentation;
  }
};
</script>
