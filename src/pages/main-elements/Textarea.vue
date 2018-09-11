<template>
    <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title">
            <h1 class="rt-font-hero">Textarea</h1>
        </div>
        <div class="app-body">
            <div class="app-row row">
                <p class="rt-font-h3 rt-col">Textarea without js</p>
            </div>
            <div class="app-row row">
                <div class="rt-col">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple textarea</span>
                    <rt-textarea-without-js placeholder="Textarea"></rt-textarea-without-js>
                </div>
            </div>
            <div class="app-row row">
                <div class="rt-col-6 rt-col-md-3 rt-md-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple with error</span>
                    <rt-textarea-without-js errorMessage="textarea error message" :hasError="true"
                                            placeholder="Textarea"></rt-textarea-without-js>
                </div>
                <div class="rt-col-6 rt-col-md-3 rt-md-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">disabled simple</span>
                    <rt-textarea-without-js errorMessage="textarea error message" :disabled="true"
                                            placeholder="Textarea"></rt-textarea-without-js>
                </div>
            </div>

            <div class="app-row row">
                <div class="col  rt-col-md-3 ">
                    <p class="rt-font-h3">Textarea with js</p>
                </div>
            </div>
            <div class="app-row row">
                <div class="rt-col-6  rt-col-md-3">
                    <span class="rt-font-label flex-fill rt-space-bottom05">simple static textarea</span>
                    <rt-textarea-static placeholder="Textarea"></rt-textarea-static>
                </div>
                <div class="rt-col-6  rt-col-md-3 rt-md-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">static textarea with error</span>
                    <rt-textarea-static errorMessage="textarea error message" placeholder="Textarea"
                                        :hasError="true"></rt-textarea-static>
                </div>
            </div>

            <div class="app-row row">
                <div class="col rt-col-md-3">
                    <span class="rt-font-label flex-fill rt-space-bottom05">static disabled textarea</span>
                    <rt-textarea-static errorMessage="textarea error message" placeholder="Textarea"
                                        :disabled="true"></rt-textarea-static>
                </div>
            </div>
            <div class="app-row row">
                <div class="rt-col-4  rt-col-md-2 rt-md-space-top">
                    <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea</span>
                    <rt-textarea placeholder="Textarea"></rt-textarea>
                </div>
                <div class="rt-col-4  rt-col-md-2 rt-md-space-top d-flex flex-column">
                    <span class="rt-font-label flex-fill rt-space-bottom05">dynamic textarea with error</span>
                    <rt-textarea placeholder="Textarea" errorMessage="textarea error message"
                                 :hasError="true"></rt-textarea>
                </div>


                <div class="rt-col-4  rt-col-md-1 rt-md-space-top d-flex flex-column">
                    <span class="rt-font-label flex-fill rt-space-bottom05">dynamic disabled textarea</span>
                    <rt-textarea placeholder="Textarea" errorMessage="textarea error message"
                                 :disabled="true"></rt-textarea>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>


<script>
    import {Textarea, TextareaStatic, TextareaWithoutJs} from "@/components/main-elements/Textarea/index";

    const componentsList = {};
    componentsList[Textarea.name] = Textarea;
    componentsList[TextareaStatic.name] = TextareaStatic;
    componentsList[TextareaWithoutJs.name] = TextareaWithoutJs;
    export default {
        name: "app-textarea",
        components: componentsList,
        methods: {},
        mounted() {
        },
        created() {
        }
    };
</script>
