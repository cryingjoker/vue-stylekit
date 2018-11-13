<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title"><h1 class="rt-font-hero">Spinner</h1></div>
      <div class="app-body">
        <div class="app-row row">
          <pre-code text="<rt-spinner />" />
          <pre-code text="<rt-spinner :is-small=&quot;true&quot; />" />
          <pre-code text="<rt-spinner :scale=&quot;true&quot; />" />
        </div>
        <div class="app-row row">
          <pre-code
            text="<rt-button class=&quot;rt-button-white&quot; :isFetched=&quot;true&quot;></rt-button>"
          />
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
