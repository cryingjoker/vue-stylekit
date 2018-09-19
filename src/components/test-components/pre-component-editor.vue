<template>
  <!--{{this.code}}-->
  <div class="code-editor__container" ref="editor" ></div>
</template>

<script>
  import * as monaco from 'monaco-editor';
  export default {
    name: "PreCodeEditor",
    props: {
      code: {
        type: String,
        default: null
      }
    },
    mounted(){
      this.editor =
        monaco.editor.create(this.$refs.editor
          , {
          value: this.code,
          cursorStyle: 'line',
          autoIndent: true,
          minimap: {
            enabled: false,
            showSlider: false
          },
          scrollbar: true,
          language: 'html',
          automaticLayout: true,
          roundedSelection: true,
          scrollBeyondLastLine: true,
          parameterHints: true,
          renderIndentGuides: true,
          lineNumbersMinChars: 3,
          theme: 'vs-dark',
          formatOnType: true,
          scrollBeyondLastLine: false,
          lineNumbers: function(lineNumber){
            return `<span style="padding-right:4px">${lineNumber}</span>`;
          }
        }
        )
      setTimeout(()=>{
        this.editor.getAction("editor.action.formatDocument").run();
      },100)
    }
  };
</script>

