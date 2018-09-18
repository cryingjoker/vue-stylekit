<template>
  <div class="pre-component">
    <component :is="textAsVue"></component>
    <p>{{this.text}}</p>
  </div>
</template>

<script>
  import Vue from 'vue/dist/vue.js';
  import { Card } from '@/components/complex-elements/Card';
  const componentsList = {};
  componentsList[Card.name] = Card;
  export default {
    name: "PreCode",
    props: [
      "text",
    ],

    data() {
      return {
      };
    },
    computed: {

      "textAsVue": function() {
        if (this.text == null)
          return null;
        let component = Vue.compile(this.text);
        component.components = componentsList;
        return component;
      }
    }
  };
</script>
