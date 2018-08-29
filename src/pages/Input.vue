<template>
    <div class="app-content">
        <div class="app-title"></div>
        <div class="app-body">
            <div class="app-row">
                <p>Input without js</p>
            </div>
            <div class="app-row">
                <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                     :placeholder="'Электронная почта'"></rt-input-without-js>
            </div>
            <div class="app-row">
                <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                     :disabled="true"
                                     :placeholder="'Электронная почта'"></rt-input-without-js>
            </div>
            <div class="app-row">
                <rt-input-without-js :errorMessage="'ошибка: не является почтой'"
                                     :placeholder="'Электронная почта'"
                                     :has-error="true"></rt-input-without-js>
            </div>
            <div class="app-row">
                <p>Input with js</p>
            </div>
            <div class="app-row">
                <rt-input placeholder="Электронная почта"></rt-input>
            </div>

            <div class="app-row">
                <rt-input :placeholder="'Электронная почта'"
                          value="inputModelValue"
                          :error-message="'ошибка: не является почтой'"
                          :has-error="true"></rt-input>
            </div>
            <div class="app-row">
                <rt-input :placeholder="'Электронная почта'"
                          :disabled="true"
                          value="inputModelValue"
                          :error-message="'ошибка: не является почтой'"
                          ></rt-input>
            </div>
        </div>
    </div>
</template>


<script>
import { Input, InputWithoutJs } from "../components/Input";

const componentsList = {};
componentsList[Input.name] = Input;
componentsList[InputWithoutJs.name] = InputWithoutJs;
export default {
  name: "Input",
  components: componentsList,
  data: () => ({
    inputModelValue: "test"
  }),
  methods: {},
  mounted() {},
  created() {}
};
</script>
