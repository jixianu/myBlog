<template>
	<div id="header">
		<a id="logo"  href="javascript:;">
			<img src="../assets/images/logo.png" alt="xiaomengblog">
			<span class="title">xiaomengblog</span>
		</a>
		<a id="moblie_logo" href="javascript:;">
			<img src="../assets/images/logo.png" alt="xiaomengblog">
			<span class="title">xiaomengblog</span>
		</a>
		<div id="moblie_menu"></div>
		<ul id="nav">
			<li>
				<form id="search_from">
					<input type="text" class="search">
				</form>
			</li>
			<li><a href="javascript:;">博客</a></li>
			<li><a href="javascript:;">管理</a></li>
			<li><a href="javascript:;">github</a></li>
			<li><a href="javascript:;">联系我</a></li>
		</ul>
  </div>
</template>
	
<script>
export default {
	name: 'header',
	data() {
		return {}
	},
  created(){
      
  }
}
</script>