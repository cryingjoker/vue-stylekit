<template>
  <div class="pre-component">
    <div class="pre-component__trigger" @click="toggleShow" :class="toggleClassObjects">
      <svg viewBox="0 0 1024 768" class="pre-component__trigger-icon">
        <path d="M288 384L128 544l160 160 64-64-96-96 96-96-64-64zm128 64l96 96-96 96 64 64 160-160-160-160-64 64zM576 64H0v896h768V256L576 64zm128 832H64V128h448l192 192v576z"/>
      </svg>
    </div>
    <div class="code-editor" v-if="showCodeEditor">
      <div @click="close()" class="code-editor__close">
        <svg viewBox="0 0 14 14" class="code-editor__icon" xmlns="http://www.w3.org/2000/svg">
          <path class="cu-fill" d="M19,17 L26,17 C26.5522847,17 27,17.4477153 27,18 C27,18.5522847 26.5522847,19 26,19 L19,19 L19,26 C19,
          26.5522847 18.5522847,27 18,27 C17.4477153,27 17,26.5522847 17,26 L17,19 L10,19 C9.44771525,19 9,18.5522847 9,
          18 C9,17.4477153 9.44771525,17 10,17 L17,17 L17,10 C17,9.44771525 17.4477153,9 18,9 C18.5522847,9 19,
          9.44771525 19,10 L19,17 Z" fill-rule="evenodd" transform="rotate(45 25.778 -.778)"></path>
        </svg>
      </div>

      <pre-code-editor @change="changeComponentCode($event)" :code="normalizeCode"></pre-code-editor>
    </div>
    <div class="wc-inline-render"></div>
  </div>
</template>
<script>
  import PreComponentEditor from '@/test-components/PreComponentEditor.vue'
  import * as mainElements from '@/main-elements';
  import * as complexElements from '@/complex-elements';
  import * as experimentalElements from '@/experimental-elements';
  const preComponentsList = {};
  for(let key in mainElements){
    preComponentsList[mainElements[key].name] = mainElements[key];
  }
  for(let key in complexElements){
    preComponentsList[complexElements[key].name] = complexElements[key];
  }
  for(let key in experimentalElements){
    preComponentsList[experimentalElements[key].name] = experimentalElements[key];
  }

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
      component: null,
      localCode: '',
      showCodeEditor: false
    }),

    watch: {
      text(value) {
        this.localCode = this.changeComponentCode(this.text);
      }
    },

    mounted(){

      this.localCode = this.text
      this.getTextAsVue();
    },
    components: componentsList,
    methods:{

      changeComponentCode(code){
        if(code) {

          this.localCode = code;
          this.component.$destroy();
          this.component.$el.outerHTML = '<div class="wc-inline-render"></div>';
          this.getTextAsVue ();

        }

      },
      getTextAsVue () {

        if (this.localCode == null)
          return null;
        let options = {};
        for(let key in this.$parent){
          if(key.search(/(^\$)|(^\_)|(^constructor$)/) === -1){
            options[key] = this.$parent[key];
          }
        }
        if(this.normalizeCode) {
          this.component = new Vue({
            el:'.wc-inline-render',
            name: 'Content',
            template: this.normalizeCode,
            data: () => {
              return options
            },
            components: preComponentsList
          });
        }

      },
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
      normalizeCode() {
        return this.localCode ? this.localCode : this.text.replace(/\\\{\\\{/g,'\{\{');
      },
      toggleClassObjects (){
          const classObject = {};
          if(this.showCodeEditor){
            classObject['pre-component__trigger--is-active'] = true;
          }
      }
    }
  };
</script>
