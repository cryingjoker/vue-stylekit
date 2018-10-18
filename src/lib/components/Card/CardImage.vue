<template>
  <div class="rt-card rt-card-image">
    <div class="rt-card-image__figure" :style="figureImageStyle"></div>
    <div class="rt-card-image__content">
      <div class="rt-card__body">
        <slot name="body"/>
      </div>
      <slot name="list"/>
    </div>
  </div>
</template>
<script>


export default {
  name: 'RtCardImage',
  props: {
    cardImage: {
      type: String,
      default: null,
      required: true
    },


  },
  computed: {

    figureImageStyle(){
      const styleObject = {};
      styleObject.backgroundImage = 'url('+this.cardImage+')';
      return styleObject;
    }
  },

  mounted: function() {}
};
</script>
