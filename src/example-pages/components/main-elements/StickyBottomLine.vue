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
            <div id="two" class="color-block--pink" style="height: 100vh;"></div>
            <div id="tree" class="color-block--black" style="height: 100vh; margin-top: 1000px"></div>
            <div id="tree2" class="color-block--black" style="height: 50vh; margin-top: 1000px"></div>
            <rt-sticky-bottom-line :start-stop-points="['one','two','tree','tree2']" :delta-between-blocks="50">
              <div class="d-flex flex-center-center">
                <rt-button class="rt-button-orange rt-button-small">Оставить заявку</rt-button>
              </div>
            </rt-sticky-bottom-line>
          </div>
        </div>
        <div class="app-content rt-col-12 rt-col-md-3 rt-space-top3">
          <pre style="color:#a9b7c6;font-family:'Menlo'"><span style="color:#e8bf6a;">&lt;rt-sticky-bottom-line </span><span style="color:#bababa;">:start-stop-points</span><span style="color:#a5c261;">="</span>['one','two','tree','tree2']<span style="color:#a5c261;">" </span><span style="color:#bababa;">:delta-between-blocks</span><span style="color:#a5c261;">="</span>50<span style="color:#a5c261;">"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">  &lt;div </span><span style="color:#bababa;">class</span><span style="color:#a5c261;">="d-flex flex-center-center"</span><span style="color:#e8bf6a;">&gt;<br></span><span style="color:#e8bf6a;">    &lt;rt-button </span><span style="color:#bababa;">class</span><span style="color:#a5c261;">="rt-button-orange rt-button-small"</span><span style="color:#e8bf6a;">&gt;</span>Оставить заявку<span style="color:#e8bf6a;">&lt;/rt-button&gt;<br></span><span style="color:#e8bf6a;">  &lt;/div&gt;<br></span><span style="color:#e8bf6a;">&lt;/rt-sticky-bottom-line&gt;</span></pre>
          <documentation-builder :json="documentation" type="components"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import documentation from "../../../lib/components/StickyBottomLine/docs/index.json";

  import componentsList from "../../componentsList";

  export default {
    name: "AppTags",
    components: componentsList,
    data: () => ({
      documentation: {}
    }),
    mounted() {
      this.documentation = documentation;
    },
    created() {
    },
    methods: {}
  };
</script>
