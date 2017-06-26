<template>
	<div class="container">
		<md-editor />
    <post-info />
	</div>
</template>
<script>
import mdEditor from '../components/md-editor.vue'
import postInfo from '../components//post-info.vue'

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