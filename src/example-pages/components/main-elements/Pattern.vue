<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Patterns <span class="rt-code rt-font-h3 rt-col"> .rt-pattern</span>
          </h1>
        </div>
      </div>
      <div class="app-body">
        <div class="app-row">
          <div class="rt-col rt-space-bottom rt-space-top">
            <rt-pattern top-color="main-color" left-color="error-color" right-color="orange" :pattern-type="1"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import componentsList from "../../componentsList";
  export default {
    name: "AppPattern",
    components: componentsList,
    mounted() {},
    created() {},
    methods: {}
  };
</script>
