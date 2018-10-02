<template>
  <div class="color-line-wrapper">
    <p class="rt-font-banner-label-bold color-line">
      <span class="color-line-text"><slot name="label"/></span>
    </p>
    <p class="color-line color-line--is-paragraph rt-space-bottom">
    <span class="color-line-text rt-font-paragraph"><slot name="content"/>
      <svg
        class="color-line-paragraph-icon" :class="colorLineIconClass" width="38" height="23"><defs><path id="a"
                                                                                                         d="M33.5561211 0H0l22.4131224 22.4131038L36.5337472 6.67090677c1.4751011-1.64449747 1.3377782-4.17343176-.3067193-5.64853284C35.4931384.36408091 34.5419931 0 33.5561211 0z"/></defs>
        <path
        d="M33-1.0172375h-45V.04327594l43.7946512.04908113v7.93806336l1.4849033-.08350525c2.6481474-.14892161 4.7192255-2.33971054 4.7192629-4.99204202L38-76.0172375c.0000389-2.7614238-2.2385058-5.0000315-4.9999296-5.0000704H33z"
        fill="#FFF"/><use xlink:href="#a"/></svg></span></p>
  </div>
</template>
<script>

  export default {
    name: "RtColorLineText",
    props: {
      colorIcon: {
        type: String, //['purple','red','dark-blue','light-blue','yellow','pink','green'],
        default: "orange"
      }
    },
    computed: {
      colorLineIconClass() {
        const classObject = {};
        if (this.colorIcon !== "orange") {
          classObject["color-line-paragraph-icon--" + this.colorIcon] = true;
        }
        return classObject;
      }
    }
  };
</script>
