<template>
  <a :href="target" class="tagBox">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="type"></use>
    </svg>
    <span>
      {{text}}
    </span>
  </a>
</template>
<script>
  export default {
    data(){
      return{
         type: this.tagClass,
         text: this.tagContent,
         target: this.tagTarget,
      }
    },
    props:['tagClass', 'tagContent', 'tagTarget']
  }
</script>
<style lang='less' scoped>
  .icon {
    width: 18px;
    height: 18px;
    vertical-align:middle;
    display:inline-block;
  }
  .tagBox {
    display:  inline-block;
    height: 18px;
    line-height: 18px;
    padding: 2px 3px;
    span {
      display:  inline-block;
      height: 20px;
      vertical-align: middle;
    }
  }
</style>