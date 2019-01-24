<!--<template>-->
  <!--<div class="links-block">-->
    <!--<div class="rtb-card__links-block" :class="blockClasses">-->
     <!---->
    <!--</div>-->
    <!--<button class="rtb-card__expand-button" @click="unwrap()">ещё 4</button>-->
  <!--</div>-->
<!--</template>-->

<script type="text/jsx">
  export default {
    name: "LinksBlock",

    methods: {
      unwrap() {
        this.isOpen = !this.isOpen;
        this.$el.querySelector('.rtb-card__links-block').classList.add('rtb-card__links-block--expanded');
      }
    },
    data() {
      return {
        isOpen: false,
        quantity: null,
        quantityToShow: null
      };
    },

    computed: {},
    mounted() {
      this.quantity = this.$el.getElementsByClassName('rtb-card__social-link').length;
      this.quantityToShow = this.quantity - 5;
    },
    created() {},

    render(h) {
      const content = (() => {
        if (this.$slots.content) {
          return this.$slots.content;
        } else {
          return null;
        }
      })();
      return <div class="links-block">
        <div class="rtb-card__links-block" >
          {content}
        </div>
        <button class="rtb-card__expand-button" onClick={this.unwrap}>ещё {this.quantityToShow}</button>
      </div>;
    }
  };
</script>
