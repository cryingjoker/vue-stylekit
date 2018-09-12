<template>

  <div>
    <div class="color-block--dark-blue" />
  </div>
</template>


<script>
import { Card } from "@/components/complex-elements/Card"
import { Button } from "@/components/main-elements"

const componentsList = {}

componentsList[Card.name] = Card
componentsList[Button.name] = Button

export default {
  name: "AppRadioButton",
  components: componentsList,
  mounted() {},
  created() {},
  methods: {}
}
</script>
