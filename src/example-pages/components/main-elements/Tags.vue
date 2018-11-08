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
          <div class="rt-col-12">
            <h4 class="rt-font-h3  rt-space-top25">Simple tags</h4>

            <pre-code text='
            <div class="row">
              <rt-tag value="1" :is-active="true">Все</rt-tag>
              <rt-tag value="2">Для смартфонов Android</rt-tag>
              <rt-tag value="3">Для Macbook</rt-tag>
              <rt-tag value="4">Защита для детей</rt-tag>
              <rt-tag value="5">Esset</rt-tag>
              <rt-tag value="6">Два устройств Windows и Android</rt-tag>
              <rt-tag value="7">Акция Kaspersky</rt-tag>
            </div>'></pre-code>
            <h4 class="rt-font-h3 rt-space-top55">Tags with tag-list</h4>
            <!--<pre-code text='-->
            <rt-filter>
              <rt-tag-list class="row">
                <rt-filter-watcher>
                  <rt-tag value="1" :is-active="true">Все</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="2">Для смартфонов Android</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="3">Для Macbook</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="4">Защита для детей</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="5">Esset</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="6">Два устройств Windows и Android</rt-tag>
                </rt-filter-watcher>
                <rt-filter-watcher>
                  <rt-tag value="7">Акция Kaspersky</rt-tag>
                </rt-filter-watcher>

              </rt-tag-list>
            </rt-filter>
            <!--'></pre-code>-->
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import componentsList from "../../componentsList";
console.info('componentsList',componentsList);
export default {
  name: "AppTags",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
