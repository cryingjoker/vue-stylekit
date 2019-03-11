<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <h1 class="rt-font-hero">
          RadioButton
        </h1>
      </div>
      <div class="app-body">
        <div class="app-row">
          <p class="rt-font-h3">
            radiobutton
          </p>
        </div>
        <div class="rt-space-bottom2">testModel = {{ testModel }}</div>

        <pre-code
          text="<div class=&quot;app-row row rt-space-top2&quot;><div class=&quot;rt-col&quot;><rt-radio-button name=&quot;type&quot; @change=&quot;setTestModel&quot; value=&quot;0&quot; :model=&quot;testModel&quot;>Огонь</rt-radio-button><div class=&quot;rt-space-vertical&quot;><rt-radio-button name=&quot;type&quot; @change=&quot;setTestModel&quot; value=&quot;1&quot; :model=&quot;testModel&quot;>Вода</rt-radio-button></div><rt-radio-button name=&quot;type&quot; @change=&quot;setTestModel&quot; value=&quot;2&quot; :model=&quot;testModel&quot;>Медные трубы</rt-radio-button></div></div>"
        />
        <div class="app-row row">
          <div class="rt-col">
            <rt-radio-button :is-disabled="true" name="type">
              Огонь
            </rt-radio-button>
            <rt-radio-button :is-disabled="true" name="type">
              Вода
            </rt-radio-button>
            <rt-radio-button :is-disabled="true" name="type">
              Медные трубы
            </rt-radio-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import componentsList from "../../componentsList";
// const componentsList = {};
export default {
  name: "AppRadioButton",
  components: componentsList,
  data() {
    return {
      testModel: 0
    };
  },
  mounted() {},
  created() {},
  methods: {
    setTestModel(value) {
      this.testModel = value;
    }
  }
};
</script>
