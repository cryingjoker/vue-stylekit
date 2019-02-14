<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row"><h1 class="rt-font-hero rt-col">Tags</h1></div>
      </div>
      <div class="app-body">
        <div class="row">
          <div class="rt-col-12">
            <h4 class="rt-font-h3  rt-space-top25">Simple tags</h4>
            <pre-code
              text="
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
              <rt-tag-list color=&quot;red-high&quot; class=&quot;row&quot;>
                <rt-tag value=&quot;1&quot; :is-active=&quot;true&quot;>Все</rt-tag>
                <rt-tag value=&quot;2&quot;>Для смартфонов Android</rt-tag>
                <rt-tag value=&quot;3&quot;>Для Macbook</rt-tag>
                <rt-tag value=&quot;4&quot;>Защита для детей</rt-tag>
                <rt-tag value=&quot;5&quot;>Esset</rt-tag>
                <rt-tag value=&quot;6&quot;>Два устройств Windows и Android</rt-tag>
                <rt-tag value=&quot;7&quot;>Акция Kaspersky</rt-tag>
              </rt-tag-list>
            </div>"
            />
            <h4 class="rt-font-h3 rt-space-top55">Tags with tag-list</h4>
            <!-- <pre-code text=' -->
            <rt-filter>
              <rt-tag-list class="row">
                <rt-filter-caller option="device-type" :clear-value="true">
                  <rt-tag :is-active="true">Все</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="2">
                  <rt-tag>Для смартфонов Android</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="3">
                  <rt-tag>Для Macbook</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="4">
                  <rt-tag>Защита для детей</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="5">
                  <rt-tag>Esset</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="6">
                  <rt-tag>Два устройств Windows и Android</rt-tag>
                </rt-filter-caller>
                <rt-filter-caller option="device-type" value="7">
                  <rt-tag>Акция Kaspersky</rt-tag>
                </rt-filter-caller>
              </rt-tag-list>
              <rt-filter-watcher :options="['device-type']" :values="[2]">
                <p>123</p>
              </rt-filter-watcher>
              <rt-filter-watcher :options="['device-type']" :values="[2]">
                <rt-card
                  ><template slot="content"
                    >Для смартфонов Android 2</template
                  ></rt-card
                >
              </rt-filter-watcher>
              <rt-filter-watcher :options="['device-type']" :values="[3]">
                <rt-card
                  ><template slot="content"
                    >Macbook</template
                  ></rt-card
                >
              </rt-filter-watcher>
              <rt-filter-watcher :options="['device-type']" :values="[[2, 6]]">
                <rt-card
                  ><template slot="content"
                    >Для смартфонов Android 2 Windows</template
                  ></rt-card
                >
              </rt-filter-watcher>
              <rt-filter-watcher :options="['device-type']" :values="[3]">
                <rt-card
                  ><template slot="content"
                    >Macos</template
                  ></rt-card
                >
              </rt-filter-watcher>
            </rt-filter>
            <!-- '></pre-code> -->
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
