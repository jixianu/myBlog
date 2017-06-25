<template>
  <div id="app">
    <nav-menu />
    <router-view></router-view>
    <manage-footer />
  </div>
</template>

<script>
import navMenu from './components/nav-menu.vue'
import manageFooter from './components/footer.vue'

export default {
  name: 'app',
  components:{
    navMenu,
    manageFooter
  }
}
</script>

<style>
</style>
