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
          <div class="rt-col">
            <rt-checkbox>Интернет</rt-checkbox>
            <div class="rt-space-vertical"><rt-checkbox>Смс</rt-checkbox></div>
            <rt-checkbox>Голосовая почта</rt-checkbox>
            <div class="rt-space-vertical"><rt-checkbox>Звонки</rt-checkbox></div>
          </div>
        </div>
        <div class="app-row row">
          <p class="rt-font-h3 rt-col">disabled checkbox</p>
        </div>
        <div class="app-row row">
          <div class="rt-col">
            <rt-checkbox :is-disabled="true">Интернет</rt-checkbox>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>


<script>
import { Checkbox } from '@/components/main-elements/Checkbox';
const componentsList = {};
componentsList[Checkbox.name] = Checkbox;
export default {
  name: 'AppCheckbox',
  components: componentsList
};
</script>

<style scoped lang="scss">
</style>
