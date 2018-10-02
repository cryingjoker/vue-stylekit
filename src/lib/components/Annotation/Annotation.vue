<template>
  <div class="rt-annotation" :class="annotationClasses">
    <p class="rt-annotation__title rt-font-paragraph" @click="toggleOpen()">{{label}}<svg class="rt-annotation__arrow" width="10" height="5" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0l5 5 5-5z" fill-rule="evenodd" />
    </svg></p>
    <div class="rt-annotation__content">
      <slot name="content"/>
    </div>
  </div>


</template>


<script>

  export default {
    name: 'RtAnnotation',
    props: {
      label: {
        type: String,
        default: null,
        required: true
      },
      hasWhiteColor: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        isOpen : false
      }
    },
    components: {},
    mounted() {
    },
    created() {},
    methods: {
      toggleOpen(){
        this.isOpen = !this.isOpen;
      }
    },
    computed: {
      annotationClasses() {
        return {
          'rt-annotation--white-color': this.hasWhiteColor,
          'rt-annotation--is-open': this.isOpen,

        };
      }
    },
  };
</script>

<style scoped lang="scss">
</style>
