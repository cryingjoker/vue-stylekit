<template>
    <div class="app-content">
        <div class="app-title"></div>
        <div class="app-body">
            <div class="app-row">
                <p>Select without js</p>
            </div>
            <div class="app-row">

            </div>

            <div class="app-row">
                <p>Select with js</p>
            </div>
            <div class="app-row">
                <rt-select label="Оборудование" value="Elter NTP-RG-1402G-W"></rt-select>
            </div>
        </div>
    </div>
</template>


<script>
import { Select} from "../components/Select";

const componentsList = {};
componentsList[Select.name] = Select;
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
