<template>
  <div class="container">
    <h1>shopping-car</h1>
    <product-list></product-list>
    <h2>car</h2>
    <cart></cart>
	</div>
</template>
<script>
import ProductList from '../components/ProductList.vue'
import Cart from '../components/Cart.vue'

export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    Cart,
    ProductList
  },
}
</script>

<style lang='less' scoped>
</style>
