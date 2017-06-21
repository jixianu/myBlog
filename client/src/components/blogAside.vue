<template>
  <div class="sidebar">
    <ul>
      <li v-for="(article, index) in list.topList" :key="index">
        <a :href="article.url">
          <span :class="{num: true, top3: index < 3}">{{index + 1}}</span> {{article.articlename}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
     data(){
      return {
        list: this.dataList,
      }
    },
    props: ['data-list']
  }
</script>

<style lang='less' scoped>
  .sidebar {
    width: 100%;
    float: left;
    border: 1px solid #CCC;
    box-sizing: border-box;
    background-color: #FCFCFC;
    border-radius: 20px;
    padding: 8px 10px;
    margin-bottom: 20px;
    li {
      margin-bottom: 8px;
      a {
        padding-left: 10px;
        font-size: 1.4rem;
        .num {
          width: 15px;
          display: inline-block;
          margin-right: 10px;
        }
        .top3 {
          color: #FF7F27;
        }
      }
    }
  }
</style>