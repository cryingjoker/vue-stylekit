<template>
  <div class="rt-container">
    <div class="app-content  rt-col-12 rt-col-md-3">
      <div class="app-title row"><h1 class="col rt-font-hero">Color Line Text</h1></div>
      <div class="app-body">
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="purple"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="red"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--yellow"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="dark-blue"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="light-blue"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="yellow"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="pink"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text color-icon="green"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем,  <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row color-block--dark-blue"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="purple"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="red"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="dark-blue"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="light-blue"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="yellow"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="green" fill-color="pink"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
        <pre-code text='<div class="app-row row"><div class="rt-space-horizontal rt-space-vertical"><rt-color-line-text :is-white-color="true" color-icon="red" fill-color="green"><template slot="label">Мама мыла раму!</template><template slot="content">Ваш дом всегда под контролем, <br> даже когда вы далеко.</template></rt-color-line-text></div></div>'></pre-code>
      </div>
    </div>
    <div class="rt-space-top25">
      <div class="rt-col-12">
        <div class="app-documentation">
          <div class="app-documentation__label rt-font-h4 rt-space-left05 rt-space-bottom2">Possible options</div>
          <div class="app-documentation__row rt-font-bold rt-space-bottom05">
            <div class="app-documentation__name rt-col-2">component name</div>
            <div class="app-documentation__name rt-col-3">component proporty</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3">proporty type</div>
              <div class="app-documentation__value-item rt-col-6">about</div>
              <div class="app-documentation__value-item rt-col-3">default value</div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-color-line-text</div>
            <div class="app-documentation__name rt-col-3">:is-white-color</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">Boolean</span></div>
              <div class="app-documentation__value-item rt-col-6">Указатель белого цвета
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">false</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-color-line-text</div>
            <div class="app-documentation__name rt-col-3">fill-color</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Цвет обводки текста <br>
                возможные значения : <br>
                <span class="rt-code rt-code--fill">purple</span>
                <span class="rt-code rt-code--fill">red</span>
                <span class="rt-code rt-code--fill">dark-blue</span>
                <span class="rt-code rt-code--fill">light-blue</span>
                <span class="rt-code rt-code--fill">yellow</span>
                <span class="rt-code rt-code--fill">pink</span>
                <span class="rt-code rt-code--fill">green</span>


              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">null</span>
              </div>
            </div>
          </div>
          <div class="app-documentation__row rt-space-vertical">
            <div class="app-documentation__name rt-col-2">rt-color-line-text</div>
            <div class="app-documentation__name rt-col-3">color-icon</div>
            <div class="app-documentation__value app-documentation__row rt-col-7">
              <div class="app-documentation__value-item rt-col-3"><span
                class="rt-code rt-font-label rt-code--component">String</span></div>
              <div class="app-documentation__value-item rt-col-6">Цвет заливки корешка <br>
                возможные значения : <br>
                <span class="rt-code rt-code--fill">purple</span>
                <span class="rt-code rt-code--fill">red</span>
                <span class="rt-code rt-code--fill">dark-blue</span>
                <span class="rt-code rt-code--fill">light-blue</span>
                <span class="rt-code rt-code--fill">yellow</span>
                <span class="rt-code rt-code--fill">pink</span>
                <span class="rt-code rt-code--fill">green</span>
              </div>
              <div class="app-documentation__value-item rt-col-3"><span class="rt-code rt-font-label rt-code--fill">orange</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<script>
  const componentsList = {};

  export default {
    name: "AppColorLineText",
    components: componentsList,

    mounted() {
    },
    created() {
    },
    methods: {}
  };
</script>
