<template>
  <markdown-editor :value="context"  preview-class="markdown-body"  :configs="configs" />
</template>
<script>
import { markdownEditor } from 'vue-simplemde'
import 'github-markdown-css'
export default {
   name: 'mdEditor',
   props: {
    'content': String
   },
   data() {
    return {
      configs: {
        spellChecker: false, // 禁用拼写检查
        status: false, // 禁用底部状态栏
        initialValue: 'editor', // 设置初始值
        renderingConfig: {
          codeSyntaxHighlighting: true, // 开启代码高亮
          highlightingTheme: 'atom-one-light' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
        }
      },
      context: this.content
    }
  },
  components: {
    markdownEditor
  }
}
</script>