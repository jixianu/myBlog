<template>
<div class="container">
  <tag title="所有标签" :dataList="dynamicTags"></tag>
</div>
</template>
<script>
import tag from '../components/tag.vue'
export default {
  data() {
    return {
      dynamicTags: ['标签一', '标签二', '标签三'],
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