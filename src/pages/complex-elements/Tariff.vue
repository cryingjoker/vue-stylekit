<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">Tariffs</h1>
        </div>
      </div>
      <div class="app-body">
        <div class="row" />
      </div>
    </div>

  </div>
</template>

<script>
import { Card } from '@/components/complex-elements/Card';
import { Input, Button, Price } from '@/components/main-elements';

const componentsList = {};

componentsList[Card.name] = Card;
componentsList[Input.name] = Input;
componentsList[Button.name] = Button;
componentsList[Price.name] = Price;

export default {
  name: 'AppButtons',
  components: componentsList,
  mounted() {},
  created() {},
  methods: {},
};
</script>

<style scoped lang="scss">
</style>
