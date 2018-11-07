<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Tags</h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row">
          <rt-tag :is-active="true">Все</rt-tag>
          <rt-tag>Для смартфонов Android</rt-tag>
          <rt-tag>Для Macbook</rt-tag>
          <rt-tag>Защита для детей</rt-tag>
          <rt-tag>Esset</rt-tag>
          <rt-tag>Два устройств Windows и Android</rt-tag>
          <rt-tag>Акция Kaspersky</rt-tag>
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
