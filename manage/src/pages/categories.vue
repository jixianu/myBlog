<template>
<div class="container">
  <tag title="所有分类" :dataList="categories"></tag>
</div>
</template>
<script>
import tag from '../components/tag.vue'
export default {
  data() {
    return {
      categories :['前端技术','后端技术','UI技术']
    };
  },
  components: {
    tag
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
  padding-top: 20px;
}
</style>