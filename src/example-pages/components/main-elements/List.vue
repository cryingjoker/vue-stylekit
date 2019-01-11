<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">List elememnts</h1></div>
      <div class="app-body">
        <pre-code
          text="
        <div><ul class=&quot;rt-numeric-list&quot;>
          <li class=&quot;rt-numeric-list__item&quot;>List item 1</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 2</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 3</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 4</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 5</li>
        </ul>
        <ul class=&quot;rt-numeric-list rt-space-top&quot;>
          <li class=&quot;rt-numeric-list__item&quot;>List item 1</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 2</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 3</li>
          <li class=&quot;rt-ordered-list__item&quot;>List item</li>
          <li class=&quot;rt-ordered-list__item&quot;>List item</li>
          <li class=&quot;rt-ordered-list__item&quot;>List item</li>
          <li class=&quot;rt-ordered-list__item&quot;>List item</li>
          <li class=&quot;rt-ordered-list__item&quot;>List item</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 4</li>
          <li class=&quot;rt-numeric-list__item&quot;>List item 5</li>
        </ul></div>
        "></pre-code>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
export default {
  name: "AppPrice",
  components: componentsList,
  data: () => ({
    documentation: {}
  }),
  mounted() {
  },
  created() {},
  methods: {}
};
</script>
