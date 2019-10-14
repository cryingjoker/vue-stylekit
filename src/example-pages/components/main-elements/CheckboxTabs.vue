<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          Checkbox Tabs
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row row">

          <div class="rt-col-12 rt-space-bottom2">
            <pre-code
              text='<rt-checkbox-tabs>
              <template slot="label">
                  <span>Я являюсь клиентов данной организации</span>
              </template>
              <template slot="content">
                <div class="rt-space-top2">
                <span>Я не являюcь</span>
                </div>
              </template>
              <template slot="content">
                <div class="rt-space-top2">
                <span>Я  являюcь</span>
                </div>
              </template>
            </rt-checkbox-tabs>'></pre-code>
          </div>
          <div class="rt-col-12 rt-space-bottom2">
            <pre-code
              text='<rt-checkbox-tabs :hide-not-active="true">
              <template slot="label">
                  <span>Я являюсь клиентов данной организации</span>
              </template>
              <template slot="content">
                <div class="rt-space-top2">
                <span>Я не являюcь</span>
                </div>
              </template>
              <template slot="content">
                <div class="rt-space-top2">
                <span>Я  являюcь</span>
                </div>
              </template>
            </rt-checkbox-tabs>'></pre-code>
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
  import componentsList from "../../componentsList";
  import documentation from "../../../lib/components/CheckboxTabs/docs/index.json";


  export default {
    name: "AppTabs",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
  };
</script>
