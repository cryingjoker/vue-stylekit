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
            <pre-code text="
            <div class=&quot;row&quot;>
              <rt-tag-list class=&quot;row&quot;>
                <rt-tag value=&quot;1&quot; :is-active=&quot;true&quot;>Все</rt-tag>
                <rt-tag value=&quot;2&quot;>Для смартфонов Android</rt-tag>
                <rt-tag value=&quot;3&quot;>Для Macbook</rt-tag>
                <rt-tag value=&quot;4&quot;>Защита для детей</rt-tag>
                <rt-tag value=&quot;5&quot;>Esset</rt-tag>
                <rt-tag value=&quot;6&quot;>Два устройств Windows и Android</rt-tag>
                <rt-tag value=&quot;7&quot;>Акция Kaspersky</rt-tag>
              </rt-tag-list>
            </div>"/>
            <h4 class="rt-font-h3 rt-space-top55">Tags with tag-list</h4>
            <!--<pre-code text='-->
            <rt-filter>
              <rt-tag-list class="row">
                <rt-filter-watcher>
                  <rt-tag  :is-active="true" value="1">Все</rt-tag>
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

  import VueRtStyle from "../../../lib/index";
  const componentDirectives = {};
  // componentDirectives[VueRtStyle.directives.FilterCallerDirective.name] = VueRtStyle.directives.FilterCallerDirective;

import componentsList from "../../componentsList";
// Vue.directive(FilterCallerDirective.name, FilterCallerDirective);
export default {
  name: "AppTags",
  // directives: componentDirectives,
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
};
</script>
