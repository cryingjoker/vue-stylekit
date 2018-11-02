<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">Spinner</h1>
      </div>
      <div class="app-body">

        <div class="app-row row">
          <pre-code text='<rt-spinner />'></pre-code>
          <pre-code text='<rt-spinner :is-small="true" />'></pre-code>
          <pre-code text='<rt-spinner :scale="true" />'></pre-code>
        </div>
        <div class="app-row row">
          <pre-code text='<rt-button class="rt-button-white" :isFetched="true"></rt-button>'></pre-code>

        </div>

      </div>
    </div>
  </div>
</template>


<script>
const componentsList = {};

export default {
  name: "AppInput",
  components: componentsList,
  mounted() {},
  created() {},

  methods: {}
};
</script>
