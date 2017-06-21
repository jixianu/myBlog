<template>
	<div class="container">
		<blog-header />
		<div class="row">
			<blog-list :data-list="articles"/>
	    <div class="asider">
	    	<blog-aside :data-list="top10"/>
	    	<blog-aside :data-list="top10"/>
	    </div>
	    <div class="clear"></div>
		</div>
	  <blog-footer />
	</div>
</template>

<script>
	import blogHeader from '../components/header'
	import blogFooter from '../components/footer'
	import blogList from '../components/blogList'
	import blogAside from '../components/blogAside'

	import {articles} from '../utils/mock.js'
  import {top10} from '../utils/mock.js'

	export default {
  	name: 'article',
  	data(){
  		return {
  			top10,
  			articles
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
<style scoped lang='less'>
	.container {
		.row {
			padding-top: 10px;
			.asider {
				width: 25%;
				float: right;
			}
		}
	}
	
  @media screen and (max-width: 900px) {
    .asider {
      display: none;
    }
  }
</style>