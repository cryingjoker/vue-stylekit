<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">RadioButton</h1>
      </div>
      <div class="app-body">
        <div class="app-row">
          <p class="rt-font-h3">radiobutton</p>
        </div>
        <div class="rt-space-bottom2">testModel = {{testModel}}</div>

        <pre-code text='<div class="app-row row rt-space-top2"><div class="rt-col"><rt-radio-button name="type" @change="setTestModel" value="0" :model="testModel">Огонь</rt-radio-button><div class="rt-space-vertical"><rt-radio-button name="type" @change="setTestModel" value="1" :model="testModel">Вода</rt-radio-button></div><rt-radio-button name="type" @change="setTestModel" value="2" :model="testModel">Медные трубы</rt-radio-button></div></div>'></pre-code>
        <div class="app-row row">
          <div class="rt-col">
            <rt-radio-button name="type" :is-disabled="true">Огонь</rt-radio-button>
            <rt-radio-button name="type" :is-disabled="true">Вода</rt-radio-button>
            <rt-radio-button name="type" :is-disabled="true">Медные трубы</rt-radio-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const componentsList = {};
export default {
  name: 'AppRadioButton',
  data(){
    return {
      testModel : 0
    }
  },
  components: componentsList,
  mounted() {},
  created() {},
  methods: {
    setTestModel(value){
      this.testModel = value;
    }
  },
};
</script>
