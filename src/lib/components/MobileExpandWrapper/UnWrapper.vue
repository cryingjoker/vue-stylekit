<!--<template>-->
  <!--<div class="rt-expand-wrapper row">-->
    <!--<slot name="short-content"/>-->
    <!--<div @click="toggleOpen" class="rtb-unwrap-button rt-link rt-col-md-3 rt-font-paragraph">{{unwrapButtonText}}</div>-->
    <!--<slot v-if="!isMobileView || !isClosed" name="full-content"/>-->
  <!--</div>-->
<!--</template>-->
<script type="text/jsx">
  import variables from "../../variables.json";

  export default {
    name: "RtUnWrapper",
    components: {},
    props: {
      mobileColor: {
        type: String,
        default: 'inherit'
      },
      unwrapButtonText: {
        type: String,
        default: ''
      }
    },
    data: () => ({
      isClosed: true,
      isMobileView: false
    }),
    computed:{},
    mounted() {
      const toggleComponentView = () => {
        if(window.innerWidth <= parseInt(variables["mobile-upper-limit"])) {
          this.isMobileView = true;
        } else {
          this.isMobileView = false;
        }
      };
      toggleComponentView();
      window.addEventListener('resize', toggleComponentView);
    },
    created() {},
    methods: {
      toggleOpen($event) {
        this.isClosed = !this.isClosed;
        $event.target.classList.add('rtb-unwrap-button--hidden');
      }
    },
    render(h) {
      const fullContent = (() => {
        if(!this.isMobileView || !this.isClosed) {
          return this.$slots['full-content']
        }
      })();
      return <div class="rt-expand-wrapper row">
        {this.$slots['short-content']}
        <div onClick={this.toggleOpen} class="rtb-unwrap-button rt-link rt-col-md-3 rt-font-paragraph">{this.unwrapButtonText}</div>
        {fullContent}
    </div>
    }
  }
</script>
