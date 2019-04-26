<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Opacity class elements
          </h1>
        </div>
      </div>
      <div class="app-body rt-space-top25">
        <div class="rt-col-12">
          <rt-tabs>
            <template slot="navigation">
              <rt-tabs-nav-item name="all">
                All devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="tablet">
                Tablet devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="mobile">
                Mobile devices
              </rt-tabs-nav-item>
            </template>
            <template slot="content">
              <rt-tabs-content-item name="all">
                <documentation-builder
                  :json="json"
                  type="classStyle"
                  label="all width"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="tablet">
                <documentation-builder
                  :label="'max-width: ' + variables['tablet-upper-limit']"
                  :json="tabletJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="mobile">
                <documentation-builder
                  :label="'max-width: ' + variables['mobile-upper-limit']"
                  :json="mobileJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
            </template>
          </rt-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const componentsList = {};
  import variables from "../../../lib/variables.json";
  export default {
    name: "AppGridElements",
    components: componentsList,
    data() {
      return {
        variables: variables,
        json: {
          items: [
            {
              version: "0.1.18",
              name: ".rt-element-animate-opacity",
              description: "animate opacity and visibility changes"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show",
              description: "`opacity: 1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show09",
              description: "`opacity: 0.9 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show08",
              description: "`opacity: 0.8 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show07",
              description: "`opacity: 0.7 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show06",
              description: "`opacity: 0.6 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show05",
              description: "`opacity: 0.5 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show04",
              description: "`opacity: 0.4 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show03",
              description: "`opacity: 0.3 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show02",
              description: "`opacity: 0.2 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-show01",
              description: "`opacity: 0.1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-element-hide",
              description: "`opacity: 0 \nvisability: hidden`"
            },
          ]
        },
        tabletJson: {
          items: [
            {
              version: "0.1.18",
              name: ".rt-element-animate-opacity",
              description: "animate opacity and visibility changes"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show",
              description: "*for tablet* \n\n `opacity: 1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show09",
              description: "*for tablet* \n\n `opacity: 0.9 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show08",
              description: "*for tablet* \n\n `opacity: 0.8 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show07",
              description: "*for tablet* \n\n `opacity: 0.7 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show06",
              description: "*for tablet* \n\n `opacity: 0.6 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show05",
              description: "*for tablet* \n\n `opacity: 0.5 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show04",
              description: "*for tablet* \n\n `opacity: 0.4 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show03",
              description: "*for tablet* \n\n `opacity: 0.3 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show02",
              description: "*for tablet* \n\n `opacity: 0.2 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-show01",
              description: "*for tablet* \n\n `opacity: 0.1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-td-element-hide",
              description: "*for tablet* \n\n `opacity: 0 \nvisability: hidden`"
            },
          ]
        },
        mobileJson: {
          items: [
            {
              version: "0.1.18",
              name: ".rt-element-animate-opacity",
              description: "animate opacity and visibility changes"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show",
              description: "*for mobile* \n\n `opacity: 1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show09",
              description: "*for mobile* \n\n `opacity: 0.9 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show08",
              description: "*for mobile* \n\n `opacity: 0.8 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show07",
              description: "*for mobile* \n\n `opacity: 0.7 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show06",
              description: "*for mobile* \n\n `opacity: 0.6 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show05",
              description: "*for mobile* \n\n `opacity: 0.5 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show04",
              description: "*for mobile* \n\n `opacity: 0.4 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show03",
              description: "*for mobile* \n\n `opacity: 0.3 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show02",
              description: "*for mobile* \n\n `opacity: 0.2 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-show01",
              description: "*for mobile* \n\n `opacity: 0.1 \nvisability: visible`"
            },
            {
              version: "0.1.18",
              name: ".rt-md-element-hide",
              description: "*for mobile* \n\n `opacity: 0 \nvisability: hidden`"
            },
          ]
        }
      };
    },
    mounted() {},
    created() {},
    methods: {}
  };
</script>
