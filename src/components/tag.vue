<template>
	<svg class="icon" aria-hidden="true">
    <use :xlink:href="type">{{text}}</use>
  </svg>
</template>
<script>
	export default {
		data(){
			return{
				type: this.tagClass,
				text: this.tagText
			}
		},
		props:['tagClass','tagText']
	}
</script>
<style lang='less' scoped>
	
</style>