<template>
	<div class="container">
    <blog-header />
    <div class="markdown">
      <div v-html="markdown(markHTML)"></div>
    </div>
    <blog-footer />
	</div>
</template>

<script>
import blogHeader from '../components/header'
import blogFooter from '../components/footer'
import {markdown} from '../filter/marked.js'

export default {
  name: 'detail',
  data () {
    return {
      markHTML: ''
    }
  },
  components: {
    blogHeader,
    blogFooter,
  },
  methods: {
    markdown: markdown
  },
  mounted(){
  }
}
</script>

<style scoped>
h2 {
  color: yellowgreen;
}
</style>