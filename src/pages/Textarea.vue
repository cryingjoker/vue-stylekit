<template>
    <div class="app-content">
        <div class="app-title">
                <h1 class="rt-font-hero">Textarea</h1>
        </div>
        <div class="app-body">
            <div class="app-row">
                <p class="rt-font-h3">Textarea without js</p>
            </div>
            <div class="app-row">
                <rt-textarea-without-js placeholder="Textarea"></rt-textarea-without-js>
            </div>
            <div class="app-row">
                <rt-textarea-without-js errorMessage="textarea error message" :hasError="true" placeholder="Textarea"></rt-textarea-without-js>
            </div>
            <div class="app-row">
                <rt-textarea-without-js errorMessage="textarea error message" :disabled="true" placeholder="Textarea"></rt-textarea-without-js>
            </div>

            <div class="app-row">
                <p class="rt-font-h3">Textarea with js</p>
            </div>
            <div class="app-row">
                <rt-textarea-static placeholder="Textarea"></rt-textarea-static>
            </div>
            <div class="app-row">
                <rt-textarea placeholder="Textarea"></rt-textarea>
            </div>
            <div class="app-row">
                <rt-textarea-static errorMessage="textarea error message" placeholder="Textarea" :hasError="true"></rt-textarea-static>
            </div>
            <div class="app-row">
                <rt-textarea placeholder="Textarea" errorMessage="textarea error message" :hasError="true"></rt-textarea>
            </div>
            <div class="app-row">
                <rt-textarea-static errorMessage="textarea error message" placeholder="Textarea" :disabled="true"></rt-textarea-static>
            </div>
            <div class="app-row">
                <rt-textarea placeholder="Textarea" errorMessage="textarea error message" :disabled="true"></rt-textarea>
            </div>
        </div>
    </div>
</template>


<script>
import { Textarea,TextareaStatic,TextareaWithoutJs } from "../components/Textarea";

const componentsList = {};
componentsList[Textarea.name] = Textarea;
componentsList[TextareaStatic.name] = TextareaStatic;
componentsList[TextareaWithoutJs.name] = TextareaWithoutJs;
export default {
  name: "Textarea",
  components: componentsList,
  methods: {},
  mounted() {},
  created() {}
};
</script>
