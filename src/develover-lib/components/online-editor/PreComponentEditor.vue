<template>
  <!--{{this.code}}-->
  <div class="code-editor__container" ref="editor" ></div>
</template>

<script>
import debounce from "debounce";
import * as monaco from "monaco-editor";
if (location.href.search("cryingjoker") > 0) {
  window.MonacoEnvironment = {
    getWorkerUrl: function(moduleId, label) {
      if (label === "json") {
        return "/vue-stylekit/docs/json.worker.js";
      }
      if (label === "css") {
        return "/vue-stylekit/docs/css.worker.js";
      }
      if (label === "html") {
        return "/vue-stylekit/docs/html.worker.js";
      }
      if (label === "typescript" || label === "javascript") {
        return "/vue-stylekit/docs/ts.worker.js";
      }
      return "/vue-stylekit/docs/editor.worker.js";
    }
  };
}

export default {
  name: "PreCodeEditor",
  props: {
    code: {
      type: String,
      default: null
    }
  },
  mounted() {
    if (monaco.languages.html.htmlDefaults.options) {
      monaco.languages.html.htmlDefaults.options.format.wrapLineLength = 20;
      monaco.languages.html.htmlDefaults.options.format.insertSpaces = true;
    }
    monaco.languages.html.htmlDefaults.indentInnerHtml = true;

    this.editor = monaco.editor.create(this.$refs.editor, {
      value: this.code,
      cursorStyle: "line",
      autoIndent: true,
      minimap: {
        enabled: false,
        showSlider: false
      },
      scrollbar: true,
      language: "html",
      automaticLayout: true,
      roundedSelection: true,
      scrollBeyondLastLine: true,
      parameterHints: true,
      renderIndentGuides: true,
      lineNumbersMinChars: 3,
      theme: "vs-dark",
      formatOnType: true,
      scrollBeyondLastLine: false,
      lineNumbers: function(lineNumber) {
        return `<span style="padding-right:4px">${lineNumber}</span>`;
      }
    });

    const debouncedModelContentChange = debounce(changes => {
      this.$emit("change", this.editor.getValue());
    }, 100);
    this.editor.onDidChangeModelContent(changes => {
      debouncedModelContentChange();
    });

    setTimeout(() => {
      this.editor.getAction("editor.action.formatDocument");
      this.editor
        .getAction("editor.action.formatDocument")
        .run()
        .then(() => {});
    }, 300);
  }
};
</script>
