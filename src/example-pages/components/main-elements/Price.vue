<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Price</h1></div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; :old-value=&quot;123.2&quot; currency=&quot;$&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; :old-value=&quot;123.2&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code text="<rt-price :value=&quot;750.231&quot; />" />
          </div>
        </div>

        <div class="row rt-space-top">
          <div class="rt-col-4 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;69&quot; option-label=&quot;До&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
          <div class="rt-col-4 rt-col-md-3 rt-md-space-top">
            <pre-code
              text="<rt-price :value=&quot;750.231&quot; time-interval=&quot;час.&quot; />"
            />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;1231223169&quot; :is-option=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code
              text="<rt-price :value=&quot;1231223169&quot; :only-price=&quot;true&quot; currency=&quot;€&quot; />"
            />
          </div>
        </div>
        <div class="row rt-space-top">
          <div class="rt-col-16 rt-col-md-3">
            <pre-code
              text="<div><rt-price :for-game=&quot;true&quot; class=&quot;color-orange&quot; :value=&quot;800&quot; time-interval=&quot;сек&quot; currency=&quot;Мбит&quot; /><rt-price :bold-option=&quot;true&quot; class=&quot;color-white&quot; :for-game=&quot;true&quot; :value=&quot;800&quot; time-interval=&quot;сек&quot; currency=&quot;Мбит&quot; /><div>"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="rt-container rt-space-top25">
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
