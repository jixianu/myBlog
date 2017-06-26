<template>
  <div class="container">
    <md-editor />
    <post-info />
  </div>
</template>
<script>
import mdEditor from '../components/md-editor.vue'
import postInfo from '../components/post-info.vue'

export default {
  name: 'post-add',
  props: {},
  data() {
    return {}
  },
  components: {
    mdEditor,
    postInfo
  }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  padding-top: 20px;
}
.markdown-editor {
  font-size: 1.4rem;
}
</style>