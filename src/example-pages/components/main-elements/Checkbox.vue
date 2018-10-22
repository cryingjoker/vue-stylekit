<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">

      <div class="app-title">
        <h1 class="rt-font-hero">Checkbox</h1>
      </div>
      <div class="app-body">
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">checkbox</p>
        </div>
        <div class="app-row row">
          <pre-code
            text='<div class="rt-col"><rt-checkbox name="internet">Интернет</rt-checkbox><div class="rt-space-vertical"><rt-checkbox name="sms">Смс</rt-checkbox></div><rt-checkbox name="voiseMessage">Голосовая почта</rt-checkbox><div class="rt-space-vertical"><rt-checkbox name="calls" :checked="true">Звонки</rt-checkbox></div></div>'></pre-code>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">disabled checkbox</p>
        </div>
        <div class="app-row row">
          <pre-code
            text='<div class="rt-col"><div class="rt-space-vertical"><rt-checkbox :is-disabled="true">Интернет</rt-checkbox></div><rt-checkbox :is-disabled="true" :checked="true">Интернет</rt-checkbox></div>'></pre-code>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  const componentsList = {};
  export default {
    name: "AppCheckbox",
    components: componentsList
  };
</script>

