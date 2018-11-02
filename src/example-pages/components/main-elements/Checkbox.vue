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
            text="<div class=&quot;rt-col&quot;><rt-checkbox name=&quot;internet&quot;>Интернет</rt-checkbox><div class=&quot;rt-space-vertical&quot;><rt-checkbox name=&quot;sms&quot;>Смс</rt-checkbox></div><rt-checkbox name=&quot;voiseMessage&quot;>Голосовая почта</rt-checkbox><div class=&quot;rt-space-vertical&quot;><rt-checkbox name=&quot;calls&quot; :checked=&quot;true&quot;>Звонки</rt-checkbox></div></div>"
          />
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">disabled checkbox</p>
        </div>
        <div class="app-row row">
          <pre-code
            text="<div class=&quot;rt-col&quot;><div class=&quot;rt-space-vertical&quot;><rt-checkbox :is-disabled=&quot;true&quot;>Интернет</rt-checkbox></div><rt-checkbox :is-disabled=&quot;true&quot; :checked=&quot;true&quot;>Интернет</rt-checkbox></div>"
          />
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
