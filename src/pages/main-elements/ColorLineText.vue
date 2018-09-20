<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Color Line Text</h1></div>
      <div class="app-body">
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><p class="rt-font-banner-label-bold color-line"><span class="color-line-text">Умный   дом</span></p><p class="color-line color-line--is-paragraph rt-space-bottom"><span class="color-line-text rt-font-paragraph">Ваш дом всегда под контролем,  <br> даже когда вы далеко.<svg class="color-line-paragraph-icon" width="38" height="23"><defs><path id="a" fill="@{b2c-orange-low}" d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"/></defs><g fill="none" fill-rule="evenodd"><path d="M33-81.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z" fill="#FFF"/><use fill="#FF4F12" xlink:href="#a" /></g></svg></span></p></div></div>'></pre-code>
      </div>
    </div>
  </div>
</template>


<script>
  import { PreComponent } from "@/test-components";

  const componentsList = {};
  componentsList[PreComponent.name] = PreComponent;


  export default {
    name: "AppColorLineText",
    components: componentsList,
    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
