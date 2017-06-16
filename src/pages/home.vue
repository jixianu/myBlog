<template>
  <div id="home">
    <blog-header />
    <!-- <router-link to="detail">detail</router-link> -->
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
  name: 'home',
  data () {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
