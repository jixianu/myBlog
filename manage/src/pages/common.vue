<template>
	<div>
		<nav-menu></nav-menu>
    <router-view></router-view>
    <manage-footer></manage-footer>
	</div>
</template>
<script>
import navMenu from '../components/nav-menu.vue'
import manageFooter from '../components/footer.vue'
export default {
  name: 'common',
  components:{
    navMenu,
    manageFooter
  }
}
</script>