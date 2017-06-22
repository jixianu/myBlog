<template>
  <div id="app">
    <nav-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import navMenu from './components/nav-menu.vue'

export default {
  name: 'app',
  components:{
    navMenu
  }
}
</script>

<style>
</style>
