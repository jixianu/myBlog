<template>
	<div class="container">
		<md-editor :content="form.content"/>
    <post-info :post="form"/>
	</div>
</template>
<script>
import mdEditor from '../components/md-editor.vue'
import postInfo from '../components//post-info.vue'
import {getDate} from '../utils/date.js'

export default {
 	name: 'post-add',
  props: {},
	data() {
		return {
      form: {
        title: '123',
        date: getDate(),
        content: '# abc',
        body: '',
        description:'fdsafd',
        category: 'cdcd',
        tag: ['abab','bcbc','vdvdvd'],
        delivery: false,
        author: 'xm'
      }
    }
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
</style>