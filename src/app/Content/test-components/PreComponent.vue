<template>
  <div class="pre-component">
    <div class="pre-component__trigger" @click="toggleShow" :class="toggleClassObjects">show component</div>
    <component :is="textAsVue"></component>
    <div class="code-editor" v-if="showCodeEditor">
      <div @click="close()" class="code-editor__close">
        <svg viewBox="0 0 14 14" class="code-editor__icon" xmlns="http://www.w3.org/2000/svg">
          <path class="cu-fill" d="M19,17 L26,17 C26.5522847,17 27,17.4477153 27,18 C27,18.5522847 26.5522847,19 26,19 L19,19 L19,26 C19,
          26.5522847 18.5522847,27 18,27 C17.4477153,27 17,26.5522847 17,26 L17,19 L10,19 C9.44771525,19 9,18.5522847 9,
          18 C9,17.4477153 9.44771525,17 10,17 L17,17 L17,10 C17,9.44771525 17.4477153,9 18,9 C18.5522847,9 19,
          9.44771525 19,10 L19,17 Z" fill-rule="evenodd" transform="rotate(45 25.778 -.778)"></path>
        </svg>
      </div>
      <pre-code-editor :code="text"></pre-code-editor>
    </div>
  </div>
</template>
<script>
  import PreComponentEditor from '@/test-components/PreComponentEditor.vue'
  import { Card } from '@/complex-elements/Card';
  import { Input, Button, Price, RadioButton, Checkbox } from '@/main-elements';
  import { Banner, BannerItem } from '@/experimental-elements';

  const preComponentsList = {};
  preComponentsList[RadioButton.name] = RadioButton;
  preComponentsList[Checkbox.name] = Checkbox;
  preComponentsList[Card.name] = Card;
  preComponentsList[Input.name] = Input;
  preComponentsList[Button.name] = Button;
  preComponentsList[Price.name] = Price;
  preComponentsList[Banner.name] = Banner;
  preComponentsList[BannerItem.name] = BannerItem;

  const componentsList = {};
  componentsList[PreComponentEditor.name] = PreComponentEditor;
  import Vue from 'vue/dist/vue.js';
  export default {
    name: "PreCode",
    props: {
      text:{
        type: String,
        default: null
      },
    },

    data: () => ({
      showCodeEditor: false
    }),

    components: componentsList,
    methods:{
      close(){
        this.showCodeEditor = false;

      },
      toggleShow(){
        if(document.querySelector('.code-editor__close')){
          document.querySelector('.code-editor__close').dispatchEvent(new Event('click'));
        }
        this.showCodeEditor = !this.showCodeEditor;
      }
    },
    computed: {
      toggleClassObjects (){
          const classObject = {};
          if(this.showCodeEditor){
            classObject['pre-component__trigger--is-active'] = true;
          }
      },
      textAsVue () {
        if (this.text == null)
          return null;

        let component = Vue.compile(this.text);
        component.components = preComponentsList;
        return component;
      }
    }
  };
</script>
