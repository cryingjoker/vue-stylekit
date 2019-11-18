<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Sticky Bottom Line
          </h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-12">
            <div id="one" class="color-block--red" style="height: 100vh; margin-top: 100vh"></div>
            <div id="two" class="color-block--pink" style="height: 100vh; "></div>
            <div id="tree" class="color-block--black" style="height: 100vh; margin-top: 1000px"></div>
            <div id="tree2" class="color-block--black" style="height: 50vh; margin-top: 1000px"></div>
            <rt-sticky-bottom-line :start-stop-points="['one','two','tree','tree2']">
              <div class="d-flex flex-center-center">
                <rt-button class="rt-button-orange rt-button-small">Оставить заявку</rt-button>
              </div>
            </rt-sticky-bottom-line>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import componentsList from "../../componentsList";
export default {
  name: "AppTags",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
