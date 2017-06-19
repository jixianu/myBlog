<template>
	<div class="container">
		<blog-header />
	    <router-link to="detail"></router-link>
	    <div id="content">
	      <blog-list />
	      <blog-aside />
	    </div>
	  <blog-footer />
	</div>
</template>

<script>
	import blogHeader from '../components/header'
	import blogFooter from '../components/footer'
	import blogList from '../components/blogList'
	import blogAside from '../components/blogAside'

	export default {
  	name: 'article',
  	data(){
  		return {
  		}
  	},
	  components: {
	    blogHeader,
	    blogFooter,
	    blogList,
	    blogAside,
	  }
  }
</script>
<style scoped>
</style>